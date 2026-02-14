const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Personal-Website";
const basePath = isGitHubPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true
      }
    : {}),
  images: {
    unoptimized: isStaticExport
  },
  basePath: isStaticExport ? basePath : undefined,
  assetPrefix: isGitHubPages ? `${basePath}/` : undefined
};

export default nextConfig;
