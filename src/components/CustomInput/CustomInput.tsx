import React from "react";

type Props = {
	className: string | undefined;
	label: string | undefined;
	name: string;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	value: string | number | readonly string[] | undefined;
	placeholder: string | undefined;
	inputClassName: string | undefined;
	icon?: React.ElementType;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function CustomInput({
	className,
	label,
	name,
	onChange,
	value,
	placeholder,
	inputClassName,
	icon,
	...props
}: Props) {
	const Icon = icon ? icon : null;
	const [isFocused, setIsFocused] = React.useState(false);

	return (
		<div className={`w-full ${className}`}>
			{label && (
				<label
					className="mb-[4px] text-sm font-medium w-fit block"
					htmlFor={props.id ? props.id : name}
				>
					{label}
				</label>
			)}

			<div className="w-full relative">
				{icon && (
					<label
						htmlFor={props.id ? props.id : name}
						className="absolute top-[50%] translate-y-[-50%] z-[1] left-[12px]"
					>
						{Icon ? <Icon className={`w-5 h-5`} /> : null}
					</label>
				)}

				<input
					name={name}
					placeholder={placeholder}
					id={props.id ? props.id : name}
					onChange={onChange}
					value={value}
					className={`block h-[40px] border py-[10px] text-sm placeholder:text-[#868C98] w-full rounded-[10px] ${
						icon ? "px-9" : "px-3"
					} ${inputClassName}`}
					{...props}
				/>
			</div>
		</div>
	);
}
