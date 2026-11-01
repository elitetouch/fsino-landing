/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next sends `X-Powered-By: Next.js` by default. Nothing reads it,
  // and naming the framework on every response is free reconnaissance.
  // Already off in fsino-use and the admin portal.
  poweredByHeader: false,
};

export default nextConfig;
