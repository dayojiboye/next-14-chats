import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
	name: string;
	picture?: string;
	lastChat: string;
	latest_timestamp: string;
	id: number;
	onClick?: () => void | undefined;
};

export default function ChatItem({
	name,
	picture,
	lastChat,
	latest_timestamp,
	id,
	onClick,
}: Props) {
	const pathname = usePathname();
	const isActivePath = pathname === `/${id}`;

	return (
		<Link
			href={`/${id}`}
			onClick={onClick}
			className={`p-2 rounded-md hover:bg-input flex gap-2 ${
				isActivePath ? "!bg-blue-600" : "bg-transparent"
			}`}
		>
			{picture ? (
				<Image
					alt={name}
					width={500}
					height={500}
					src={picture}
					className="w-10 h-10 rounded-[50%] shrink-0"
				/>
			) : (
				<span className="bg-initials w-9 h-9 rounded-[50%] text-white font-medium shrink-0 flex items-center justify-center">
					{name[0].toUpperCase()}
				</span>
			)}

			<div className="flex-1 overflow-hidden">
				<h3 className="text-sm text-white font-semibold">{name}</h3>
				<p className="text-gray-300 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
					{lastChat}
				</p>
			</div>

			<span className="block w-fit ml-auto text-gray-300 text-xs shrink-0">{latest_timestamp}</span>
		</Link>
	);
}
