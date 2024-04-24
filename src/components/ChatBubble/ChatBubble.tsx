import { TChatLog } from "@/types";
import React from "react";

type Props = {
	chat: TChatLog;
};

export default function ChatBubble({ chat }: Props) {
	const isUserTheSender: boolean = chat.side === "right";

	return (
		<div
			className={`w-full gap-16 flex first-of-type:mt-8 last-of-type:mb-[100px] ${
				isUserTheSender ? "justify-end" : "justify-start"
			}`}
		>
			<div className="flex flex-col gap-2">
				<div
					className={`w-fit max-w-[300px] h-fit px-4 py-2 rounded-3xl ${
						isUserTheSender ? "rounded-br-none bg-blue-600" : "rounded-bl-none bg-sidebar"
					} `}
				>
					<p className="text-sm text-white">{chat.text}</p>
				</div>
				<p className={`text-xs text-gray-300 ${isUserTheSender ? "ml-auto" : "ml-0"}`}>
					{chat.timestamp}
				</p>
			</div>
		</div>
	);
}
