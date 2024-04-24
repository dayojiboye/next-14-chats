import React from "react";
import ChatData from "@/constants/dummy-api";
import { notFound } from "next/navigation";
import ChatBubble from "@/components/ChatBubble/ChatBubble";
import CustomInput from "@/components/CustomInput/CustomInput";
import CameraIcon from "@/assets/camera.svg";
import EnvelopeIcon from "@/assets/envelope.svg";

type Props = {
	params: { id: number };
};

export default function page({ params }: Props) {
	const { id } = params;
	const currentChat = ChatData.friends.find((friend) => friend.id === Number(id));

	if (!currentChat) notFound();

	return (
		<div className="w-full">
			<div className="flex flex-col gap-3 px-4">
				{[...currentChat.chatlog].reverse().map((chat) => (
					<ChatBubble key={chat.message_id} chat={chat} />
				))}
			</div>

			<div className="fixed w-full md:w-[calc(100%-280px)] h-[60px] bg-backdrop bottom-0 left-0 md:left-[280px] z-9 backdrop-filter backdrop-blur-3xl flex items-center gap-3 px-2">
				<button className="h-fit w-fit group flex-shrink-0">
					<CameraIcon className="group-hover:[&>path]:fill-white" />
				</button>
				<CustomInput
					className="flex-1 w-[unset]"
					name="message"
					placeholder="Type message..."
					inputClass="bg-transparent border border-header rounded-[32px] text-xs"
				/>
				<button className="h-fit w-fit group">
					<EnvelopeIcon className="group-hover:[&>path]:fill-white flex-shrink-0" />
				</button>
			</div>
		</div>
	);
}
