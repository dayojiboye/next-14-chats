import ChatData from "@/constants/dummy-api";
import { redirect } from "next/navigation";

export default function Home() {
	const mostRecentChatId: number = ChatData.profile.friends[0].id;
	redirect(`/${mostRecentChatId}`);
}
