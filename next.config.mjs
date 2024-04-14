/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [{ protocol: "https", hostname: "image.ibb.co" }],
	},
	// async redirects() {
	// 	return [
	// 		{
	// 			source: "/1",
	// 			destination: "/2",
	// 			permanent: true,
	// 		},
	// 	];
	// },
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
