import manifest from '@/shared/data/optimizedImages.json';
import { getAssetPath } from '@/utils/prefix';

type ImageVariant = { src: string; width: number; height: number };
const images: Record<string, ImageVariant[]> = manifest;

function getVariants(src: string) {
  const assetPrefix = getAssetPath('/');
  const original = assetPrefix !== '/' && src.startsWith(assetPrefix)
    ? `/${src.slice(assetPrefix.length)}`
    : src;
  return images[original];
}

export function getResponsiveImage(src: string, maxWidth = 1200) {
  const available = getVariants(src);
  if (!available) return { src };
  const variants = available.filter((variant) => variant.width <= maxWidth);
  const fallback = variants.at(-1) ?? available[0];
  return {
    src: getAssetPath(fallback.src),
    srcSet: (variants.length ? variants : [fallback])
      .map((variant) => `${getAssetPath(variant.src)} ${variant.width}w`)
      .join(', '),
    width: fallback.width,
    height: fallback.height,
  };
}

export function getOptimizedBackground(src: string, isMobile: boolean) {
  const variants = getVariants(src);
  const variant = isMobile ? variants?.[0] : variants?.at(-1);
  return variant ? getAssetPath(variant.src) : src;
}
