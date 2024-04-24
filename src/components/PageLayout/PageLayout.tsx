"use client";

import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import HamburgerOpen from "@/assets/hamburger-icon.svg";
import HamburgerClose from "@/assets/cancel-icon.svg";
import { useParams, usePathname } from "next/navigation";
import { IS_DESKTOP } from "@/constants/variables";
import ChatData from "@/constants/dummy-api";
import { debounceInput } from "@/utils/helpers";
import Loading from "../Loading/Loading";

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const pathname = usePathname();
	const params = useParams();
	const { id } = params;
	const currentChat = ChatData.friends.find((friend) => friend.id === Number(id));
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const [chatHeaderInfo, setChatHeaderInfo] = React.useState<{ id: number; name: string }>();

	const closeSidebar = () => {
		setIsOpen(false);

		document.documentElement.classList.remove("_fixed");
		document.body.classList.remove("_fixed");
	};

	React.useEffect(() => {
		closeSidebar();
		const pageLoaderTimer = debounceInput(() => setIsLoading(false));
		if (id && currentChat) {
			setChatHeaderInfo({
				id: currentChat.id,
				name: currentChat.name,
			});
		}
		return () => clearTimeout(pageLoaderTimer);
	}, [pathname, id, currentChat]);

	React.useEffect(() => {
		setIsLoading(false);
		const handleStopResize = () => {
			IS_DESKTOP && IS_DESKTOP.matches && closeSidebar();
			let resizeTimer;
			document.documentElement.setAttribute("data-resizing", "true");
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				document.documentElement.removeAttribute("data-resizing");
			}, 100);
		};

		window.addEventListener("resize", handleStopResize);
		return () => window.removeEventListener("resize", handleStopResize);
	}, []);

	return (
		<div className="w-full md:h-screen md:overflow-y-scroll">
			<Sidebar
				isOpen={isOpen}
				setChatHeaderInfo={(id, name) => {
					// setIsLoading(true)
					setChatHeaderInfo({ id, name });
				}}
			/>
			{isLoading ? (
				<Loading />
			) : (
				<>
					{currentChat && <Header chatHeaderInfo={chatHeaderInfo} />}
					<main className="md:ml-[280px] px-4">{children}</main>
				</>
			)}
			<div
				className={`bg-backdrop fixed md:hidden w-full h-full top-0 left-0 right-0 bottom-0 transition-all backdrop-filter backdrop-blur-md z-[11] ${
					isOpen
						? "visible opacity-[1] pointer-events-auto"
						: "invisible opacity-0 pointer-events-none"
				}`}
				onClick={() => {
					closeSidebar();
					document.documentElement.classList.remove("_fixed");
					document.body.classList.remove("_fixed");
				}}
			></div>
			<div className="flex md:hidden w-fit h-fit fixed z-20 top-[100px] right-4">
				<button
					aria-label="mobile navigation button"
					aria-expanded={isOpen}
					aria-controls="nav"
					className="w-[48px] h-[48px] bg-sidebar flex items-center justify-center rounded-[50%] shadow-md shadow-zinc-800"
					onClick={() => {
						setIsOpen(!isOpen);

						if (isOpen) {
							document.documentElement.classList.remove("_fixed");
							document.body.classList.remove("_fixed");
							return;
						}

						document.documentElement.classList.add("_fixed");
						document.body.classList.add("_fixed");
					}}
				>
					{isOpen ? <HamburgerClose className="w-9 h-9" /> : <HamburgerOpen className="w-9 h-9" />}
				</button>
			</div>
		</div>
	);
}
