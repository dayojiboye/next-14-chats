import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
	return twMerge(clsx(args));
};

// To-Do: change this name later
export function debounceInput(callback: () => void, delay: number = 500) {
	return setTimeout(callback, delay);
}
