/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  images: {
    domains: ['via.placeholder.com', 'example.com']
  },
};

export default nextConfig;
