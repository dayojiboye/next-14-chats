import React from "react";
import VideoIcon from "@/assets/video-icon.svg";
import ExclamationIcon from "@/assets/exclamation-icon.svg";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="md:ml-[280px] h-[60px] px-4 py-4 bg-header flex justify-between items-center sticky top-0 left-0 z-10">
			<h2 className="w-fit text-gray-300 text-base h-fit">
				To: <span className="font-medium text-white">Olu</span>
			</h2>

			<div className="w-fit flex items-center h-fit">
				<button className="w-fit h-fit p-2 flex items-center justify-center bg-transparent rounded transition-all hover:bg-sidebar group">
					<VideoIcon className="w-6 group-hover:[&>path]:fill-white" />
				</button>

				<button className="w-fit h-fit p-2 flex items-center justify-center bg-transparent rounded transition-all hover:bg-sidebar group">
					<ExclamationIcon className="w-6 group-hover:[&>path]:fill-white" />
				</button>
			</div>
		</header>
	);
}
