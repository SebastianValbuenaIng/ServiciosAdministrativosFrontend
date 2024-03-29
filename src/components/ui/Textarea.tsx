"use client";

import { Textarea as TextareaNextUi } from "@nextui-org/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
	name: string;
	placeholder?: string;
	className?: string;
	defaultValue?: string;
	minRows?: number;
    maxRows?: number;
	error?: string;
	onChange?: ({ name, value }: { name: string; value: string | null }) => any;
	isDisabled?: boolean;
	description?: string;
    label: string;
    classNames?: any
    isInvalid?: boolean;
    isRequired?: boolean;
    endContent?: React.ReactNode;
    readOnly?: boolean;
}

const Textarea = ({
	name,
	placeholder,
	className,
	defaultValue,
	minRows = 6,
    maxRows,
	error,
	onChange,
	isDisabled,
	description,
    label,
    classNames,
    isInvalid,
    isRequired,
    endContent,
    readOnly = false
}: Props) => {
	return (
		<TextareaNextUi
            label={label}
			radius="lg"
			size="lg"
			variant="faded"
			classNames={classNames}
			minRows={minRows}
            maxRows={maxRows}
			className={twMerge(clsx("mb-[10px] outline-none select-none", className))}
			isDisabled={isDisabled}
			isInvalid={error ? true : false}
			errorMessage={error ?? null}
			description={description}
			placeholder={placeholder}
			defaultValue={defaultValue}
            isRequired={isRequired}
			name={name}
			onChange={(e) => {
				if (onChange) {
					const value = String(e.target.value).trim();
					onChange({
						name: String(e.target.name).trim(),
						value: value !== "" ? value : null,
					});
				}
			}}
            endContent={endContent}
            readOnly={readOnly}
		/>
	);
};

export default Textarea;
