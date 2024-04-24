export type TSearchResult = {
	id: number;
	name: string;
	picture: string;
	latest_timestamp: string;
	lastChat: string;
}[];

export type TFriendChat = {
	id: number;
	name: string;
	picture: string;
	chatlog: TChatLog[];
};

export type TChatLog = {
	text: string;
	timestamp: string;
	side: string;
	message_id: number;
};
