import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";
type Size = "default" | "lg" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          variant === "primary" && "btn-primary",
          variant === "ghost" && "btn-ghost",
          size === "lg" && "btn-lg",
          size === "sm" && "btn-sm",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export default Button;
