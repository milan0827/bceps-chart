import React, { ComponentProps, forwardRef } from "react";

interface ButtonProps extends Omit<ComponentProps<"button">, "ref"> {
  label: string;
  variant?: "primary" | "secondary";
}

const Button = forwardRef(
  ({ label, variant = "primary", ...props }: ButtonProps, ref) => {
    const baseStyle =
      "text-white text-sm px-2 py-1 bg-zinc-600 rounded-md w-28 ";
    const buttonStyle = {
      primary: baseStyle + "bg-green-700",
      secondary: baseStyle + "bg-blue-900",
    };
    return (
      <button
        className={`${buttonStyle[variant]}`}
        ref={ref as never}
        {...props}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
