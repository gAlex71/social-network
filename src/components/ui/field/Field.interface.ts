import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface FieldProps {
    placeholder: string;
    Icon?: LucideIcon;
    error?: FieldError;
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface IField extends TypeInputProps{};