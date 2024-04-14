import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
	return twMerge(clsx(args));
};

export function debounceInput(callback: () => void, delay: number = 500) {
	return setTimeout(callback, delay);
}
