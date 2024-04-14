import ChatData from "@/constants/dummy-api";
import Image from "next/image";
import React from "react";
import EditIcon from "@/assets/edit-icon.svg";
import CustomInput from "../CustomInput/CustomInput";
import SearchIcon from "@/assets/search-icon.svg";
import ChatItem from "../ChatItem/ChatItem";
import { TSearchResult } from "@/types";
import { debounceInput } from "@/utils/helpers";

type Props = {
	isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
	const [searchText, setSearchText] = React.useState<string>("");
	const [searchResult, setSearchResult] = React.useState<TSearchResult>(ChatData.profile.friends);

	const onSearch = () => {
		if (searchText.length > 0) {
			const updatedSearchResult: TSearchResult = ChatData.profile.friends.filter((friend) => {
				const pattern = new RegExp("\\b" + searchText + "\\b", "i");
				return pattern.test(friend.name) || pattern.test(friend.lastChat);
			});
			setSearchResult(updatedSearchResult);
		} else {
			setSearchResult(ChatData.profile.friends);
		}
	};

	React.useEffect(() => {
		const debounceTimer = debounceInput(() => onSearch());
		return () => clearTimeout(debounceTimer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText]);

	return (
		<nav
			data-transition="true"
			className={`fixed md:absolute md:!left-0 top-0 h-full md:h-screen w-[280px] backdrop-filter backdrop-blur-3xl transition-all
			 bg-sidebar pb-14 md:pb-8 hide-scroll-bar overflow-y-scroll z-[12] md:!opacity-[1] md:!visible md:!pointer-events-auto md:!transition-none
				${
					isOpen
						? "left-0 opacity-[1] visible pointer-events-auto"
						: "left-[-100vw] opacity-0 invisible pointer-events-none"
				}
			 `}
		>
			<div className="sticky w-full top-0 left-0 bg-[inherit] pt-8 pb-2 px-4">
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
							<h1 className="font-medium text-lg">{ChatData.profile.name}</h1>
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
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>

			<div className="flex flex-col px-4">
				{searchResult.map((friend) => (
					<ChatItem
						key={friend.id}
						name={friend.name}
						picture={friend.picture}
						lastChat={friend.lastChat}
						latest_timestamp={friend.latest_timestamp}
					/>
				))}
			</div>
		</nav>
	);
}
