import ChatData from "@/constants/dummy-api";
import Image from "next/image";
import React from "react";
import EditIcon from "@/assets/edit-icon.svg";
import CustomInput from "../CustomInput/CustomInput";
import SearchIcon from "@/assets/search-icon.svg";

type Props = {
	isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
	return (
		<nav
			data-transition="true"
			className={`fixed md:absolute md:!left-0 top-0 h-full md:h-screen w-[280px] backdrop-filter backdrop-blur-3xl transition-all
			 bg-sidebar py-8 pb-14 md:pb-8 px-4 hide-scroll-bar overflow-y-scroll z-[12] md:!opacity-[1] md:!visible md:!pointer-events-auto md:!transition-none
				${
					isOpen
						? "left-0 opacity-[1] visible pointer-events-auto"
						: "left-[-100vw] opacity-0 invisible pointer-events-none"
				}
			 `}
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						priority
						alt={ChatData.profile.name}
						width={500}
						height={500}
						src={ChatData.profile.picture}
						className="w-[60px] h-[60px] rounded-[50%]"
					/>

					<div className="flex flex-col">
						<span className="font-medium text-xl">{ChatData.profile.name}</span>
						<span className="text-sm text-status">{ChatData.profile.status}</span>
					</div>
				</div>

				<button className="w-fit h-fit p-2 flex items-center justify-center bg-transparent rounded transition-all hover:bg-sidebar group">
					<EditIcon className="w-6 group-hover:[&>path]:fill-white" />
				</button>
			</div>

			<CustomInput
				icon={SearchIcon}
				className="mt-5"
				name="search"
				placeholder="Search"
				onChange={() => {}}
			/>
		</nav>
	);
}
