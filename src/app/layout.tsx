import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/PageLayout/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mock chat app",
	description: "With ❤️ Dayo Jiboye",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}
