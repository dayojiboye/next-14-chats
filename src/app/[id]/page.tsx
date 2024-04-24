import React from "react";
import ChatData from "@/constants/dummy-api";
import { notFound } from "next/navigation";
import ChatBubble from "@/components/ChatBubble/ChatBubble";

type Props = {
	params: { id: number };
};

export default function page({ params }: Props) {
	const { id } = params;
	const currentChat = ChatData.friends.find((friend) => friend.id === Number(id));

	if (!currentChat) notFound();

	return (
		<div className="w-full">
			<div className="flex flex-col gap-3">
				{[...currentChat.chatlog].reverse().map((chat) => (
					<ChatBubble key={chat.message_id} chat={chat} />
				))}
			</div>
		</div>
	);
}
