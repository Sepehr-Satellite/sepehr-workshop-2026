import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const imageRoot = path.join(projectRoot, 'public/images');
const manifest = {};
let originalBytes = 0;
let largestVariantBytes = 0;

async function optimizeDirectory(directory) {
  for (const entry of (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name === 'optimized') continue;
    const input = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await optimizeDirectory(input);
      continue;
    }
    if (!/\.(png|jpe?g)$/i.test(entry.name)) continue;

    const relative = path.relative(imageRoot, input).replaceAll('\\', '/');
    const stem = relative.replace(/\.[^.]+$/, '');
    const background = /-bg\d*$/.test(stem);
    const metadata = await sharp(input).metadata();
    const sourceSize = (await stat(input)).size;
    const widths = [...new Set((background ? [800, 1600] : [480, 800, 1200])
      .map((width) => Math.min(width, metadata.width)))];
    const variants = [];

    for (const width of widths) {
      const outputPath = `/images/optimized/${stem}-${width}.webp`;
      const output = path.join(projectRoot, 'public', outputPath.slice(1));
      await mkdir(path.dirname(output), { recursive: true });
      const info = await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: background ? 75 : 80, lossless: sourceSize < 20 * 1024 })
        .toFile(output);
      variants.push({ src: outputPath, width: info.width, height: info.height });
    }

    const largest = variants.at(-1);
    const optimizedSize = (await stat(path.join(projectRoot, 'public', largest.src.slice(1)))).size;
    originalBytes += sourceSize;
    largestVariantBytes += optimizedSize;
    manifest[`/images/${relative}`] = variants;
    console.log(`${relative}: ${(sourceSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB`);
  }
}

await optimizeDirectory(imageRoot);
const manifestPath = path.join(projectRoot, 'src/shared/data/optimizedImages.json');
await mkdir(path.dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Largest variants: ${(originalBytes / 1024 / 1024).toFixed(2)} MB → ${(largestVariantBytes / 1024 / 1024).toFixed(2)} MB (${(100 * (1 - largestVariantBytes / originalBytes)).toFixed(1)}% smaller). Originals preserved.`);
