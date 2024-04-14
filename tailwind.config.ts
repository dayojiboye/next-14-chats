import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				sidebar: "rgba(48, 48, 50, 1)",
				status: "rgb(67, 137, 247)",
				header: "rgb(57, 57, 58)",
				backdrop: "rgba(48, 48, 50, 0.4)",
				faded: "#ccc",
				ghost: "#eee",
				input: "rgb(62, 60, 70)",
				initials: "rgb(81, 81, 81)",
			},
		},
	},
	plugins: [],
};
export default config;
