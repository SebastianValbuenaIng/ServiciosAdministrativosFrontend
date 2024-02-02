"use client";

import { useState } from "react";
import Input from "../ui/Input";
import {
    emptyValue,
    validateString,
    verifyLetters,
} from "@/libs/functionsStrings";

interface Validations {
    required?: string;
    validateEmail?: boolean;
    onlyNumbers?: boolean;
    onlyLetters?: boolean;
    minLength?: {
        value: number;
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
}

const InputForm = ({
    type = "text",
    name,
    defaultValue,
    className,
    validations,
    onChange,
    label,
    isRequired = false,
    classNames,
    placeholder
}: {
    type?: string;
    name: string;
    icon?: string;
    className?: string;
    defaultValue?: string;
    validations?: Validations;
    onChange: ({ name, value }: { name: string; value: string | null }) => any;
    label: string | boolean;
    isRequired: boolean;
    classNames: any;
    placeholder?: string;
}) => {
    const [error, setError] = useState<string | undefined>(undefined);

    const handleChange = ({
        name,
        value,
    }: {
        name: string;
        value: string | null;
    }) => {
        // WITHOUT VALIDATIONS
        if (Object.keys(validations ?? {}).length === 0) {
            return onChange({ name, value });
        }

        const nullReturn = {
            name,
            value: null,
        };

        const returnValue = () => {
            if (validations?.onlyNumbers) {
                const valueNumber = validateString(value, "int");

                if (!valueNumber) {
                    setError("El valor debe ser numérico.");
                    return nullReturn;
                }
                return { name, value: valueNumber };
            }
            if (validations?.onlyLetters) {
                const valueVerified = verifyLetters(value ?? "");

                if (!valueVerified) {
                    setError("El valor solo debe contener letras.");
                    return nullReturn;
                }
                return { name, value: valueVerified };
            }

            return { name, value };
        };

        setError(undefined);

        // VALIDATE REQUIRED
        if (validations?.required && emptyValue(value)) {
            setError(
                validations.minLength
                    ? validations.minLength.message
                    : validations?.required
            );
            onChange(nullReturn);
            return;
        } else if (!validations?.required && emptyValue(value)) {
            setError(undefined);
            onChange(nullReturn);
            return;
        }

        // VALIDATE LENGTHS
        if (!emptyValue(value) && !validations?.validateEmail) {
            // WITHOUT LENGTHS
            if (!validations?.minLength && !validations?.maxLength) {
                setError(undefined);
                onChange(returnValue());
                return;
            }

            // VALIDATE MIN LENGTH
            if (validations?.minLength && !validations?.maxLength) {
                if (value && value.length < validations?.minLength.value) {
                    setError(validations?.minLength.message);
                    onChange(nullReturn);
                    return;
                } else {
                    setError(undefined);
                    onChange(returnValue());
                    return;
                }
            }

            // VALIDATE MAX LENGTH
            if (!validations?.minLength && validations?.maxLength) {
                if (value && value.length > validations?.maxLength.value) {
                    setError(validations?.maxLength.message);
                    onChange(nullReturn);
                    return;
                } else {
                    setError(undefined);
                    onChange(returnValue());
                    return;
                }
            }

            // VALIDATE MINMAX LENGTH
            if (validations?.minLength && validations?.maxLength) {
                if (
                    value &&
                    value.length <= validations?.maxLength.value &&
                    value &&
                    value.length >= validations?.minLength.value
                ) {
                    setError(undefined);
                    onChange(returnValue());
                    return;
                }

                if (value && value.length > validations?.maxLength.value) {
                    setError(validations?.maxLength.message);
                    onChange(nullReturn);
                    return;
                }

                if (value && value.length < validations?.minLength.value) {
                    setError(validations?.minLength.message);
                    onChange(nullReturn);
                    return;
                }
            }
        }

        // VALIDATE EMAIL
        if (validations?.validateEmail) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value ?? "")) {
                setError("El email no es válido.");
                onChange(nullReturn);
                return;
            } else {
                setError(undefined);
                onChange(returnValue());
                return;
            }
        }
    };

    return (
        <Input
            type={validations?.onlyNumbers ? "number" : validations?.validateEmail ? "email" : type}
            name={name}
            className={className}
            defaultValue={defaultValue}
            error={error}
            onChange={handleChange}
            label={label}
            isRequired={isRequired}
            classNames={classNames}
            placeholder={placeholder}
        />
    );
};

export default InputForm;