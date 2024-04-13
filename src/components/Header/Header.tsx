import React from "react";
import VideoIcon from "@/assets/video-icon.svg";
import ExclamationIcon from "@/assets/exclamation-icon.svg";

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="md:ml-[280px] h-[80px] px-4 py-4 bg-header flex justify-between items-center sticky top-0 left-0 z-10">
			<div className="w-fit text-gray-300 text-base h-fit">
				To: <span className="font-medium text-white">Olu</span>
			</div>

			<div className="w-fit flex gap-5 items-center h-fit">
				<button className="w-fit h-fit flex items-center justify-center">
					<VideoIcon className="w-6" />
				</button>

				<button className="w-fit h-fit">
					<ExclamationIcon className="w-6" />
				</button>
			</div>
		</header>
	);
}
