import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "sepehr-workshop-2026"; // نام ریپازیتوری شما در گیت‌هاب

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
