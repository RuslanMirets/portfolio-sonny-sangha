/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["coolsen.ru"],
	},
};

module.exports = nextConfig;
