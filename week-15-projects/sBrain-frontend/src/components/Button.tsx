import { ReactElement } from "react";


type Varients = "primary" | "secondary";

interface ButtonProps {
    variant: Varients,
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600" 
}
const sizeStyles = {
    "sm": "px-4 py-1",
    "md": "px-5 py-2" ,
    "lg": "px-6 py-3" 
}
const defaultStyles = "rounded-md px-5 py-2 mx-1 font-medium flex justify-center items-center gap-x-1 hover:cursor-pointer transition-all duration-300 ";
export const Button = (props: ButtonProps) => {
    return (
        <div>
            <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
                {props.startIcon} {props.text} {props.endIcon}
            </button>
        </div>
    )
}
<Button variant="primary" size="sm" text="samosa" onClick={() => {}} />
