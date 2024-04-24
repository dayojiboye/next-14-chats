import React from "react";
import ChatData from "@/constants/dummy-api";
import { notFound } from "next/navigation";

type Props = {
	params: { id: number };
};

export default function page({ params }: Props) {
	const { id } = params;
	const currentChat = ChatData.friends.find((friend) => friend.id === Number(id));

	if (!currentChat) notFound();

	return <div>{params.id}</div>;
}
