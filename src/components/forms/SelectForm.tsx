"use client";

import { useState } from "react";
import Select from "../ui/Select";
import { emptyValue } from "@/libs/functionsStrings";

const SelectForm = ({
	name,
	placeholder,
	icon,
	label,
	onChange,
	required,
    isRequired,
	children,
	defaultValue,
    className,
    classNames
}: {
	type?: string;
	name: string;
	placeholder?: string;
	icon?: string;
	required?: boolean;
	onChange: ({ name, value }: { name: string; value: string | null }) => any;
	children?: any;
	defaultValue?: string;
    isRequired?: boolean;
    className?: string;
    classNames?: any;
    label: string | boolean;
}) => {
	const [error, setError] = useState<string | undefined>(undefined);

	const handleChange = ({
		name,
		value,
	}: {
		name: string;
		value: string | null;
	}) => {
		if (onChange) onChange({ name, value });

		if (required && emptyValue(value)) {
			setError("Debe seleccionar una opción.");
		} else if (required && !emptyValue(value)) {
			setError(undefined);
		}
	};

	return (
		<div>
			<Select
				name={name}
				placeholder={placeholder ?? ''}
				icon={icon}
				error={error}
				onChange={handleChange}
				defaultValue={defaultValue}
                className={className}
                isRequired={isRequired}
                label={label}
                classNames={classNames}
			>
				{children}
			</Select>
		</div>
	);
};

export default SelectForm;