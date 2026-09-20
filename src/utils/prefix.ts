// src/utils/prefix.ts

const repoName = 'sepehr-workshop-2026'; // نام دقیق ریپازیتوری شما در گیت‌هاب
const prefix = process.env.NODE_ENV === 'production' ? `/${repoName}` : '';

export const getAssetPath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  // مطمئن می‌شویم آدرس همیشه با / شروع شود
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
};
