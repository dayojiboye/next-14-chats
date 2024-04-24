import { cn } from "@/utils/helpers";
import React from "react";

type Props = {
	className?: string;
	inputClass?: string;
	name: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string | number | readonly string[];
	placeholder?: string;
	icon?: React.ElementType;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function CustomInput({
	className,
	name,
	onChange,
	value,
	placeholder,
	icon,
	inputClass,
	...props
}: Props) {
	const Icon = icon ? icon : null;

	return (
		<div className={cn("w-full", className)}>
			<div className="w-full relative">
				{Icon && (
					<label
						htmlFor={props.id ? props.id : name}
						className="absolute top-[50%] translate-y-[-50%] z-[1] left-[12px]"
					>
						{Icon ? <Icon className="w-4 h-4" /> : null}
					</label>
				)}

				<input
					name={name}
					placeholder={placeholder}
					id={props.id ? props.id : name}
					onChange={onChange}
					value={value}
					className={cn(
						`block h-[32px] py-[10px] text-sm placeholder:text-faded w-full rounded-[4px] bg-input ${
							Icon ? "px-9" : "px-3"
						}`,
						inputClass
					)}
					{...props}
				/>
			</div>
		</div>
	);
}
