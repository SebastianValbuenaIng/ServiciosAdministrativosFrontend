'use client';
 
import { Textarea as TextareaNextUi } from "@nextui-org/react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
 
interface Props {
    name: string;
    minRows?: number;
    placeholder?: string;
    className?: string;
    defaultValue?: string;
    error?: string;
    onChange?: ({ name, value }: { name: string; value: string | null }) => any;
    disabled?: boolean;
    description?: string;
    isRequired?: boolean;
    classNames: any;
    label: string;
    endContent?: React.ReactNode
}
 
const Textarea = ({
    name,
    placeholder,
    className,
    minRows,
    defaultValue,
    error,
    onChange,
    disabled,
    description,
    isRequired = false,
    classNames,
    label,
    endContent
}: Props) => {
    return (
        <TextareaNextUi
            label={label}
            variant="faded"
            minRows={minRows}
            classNames={classNames}
            className={twMerge(clsx(className))}
            isDisabled={disabled}
            isInvalid={error ? true : false}
            isRequired={isRequired}
            errorMessage={error ?? null}
            description={description}
            placeholder={placeholder}
            defaultValue={defaultValue}
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
        />
    );
};
 
export default Textarea;