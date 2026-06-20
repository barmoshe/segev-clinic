import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app (a stray parent lockfile otherwise
  // confuses Turbopack's root inference). As a self-contained sibling repo,
  // this directory is the correct root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
