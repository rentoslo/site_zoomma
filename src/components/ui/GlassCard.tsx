import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "strong";
  interactive?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", interactive = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variant === "default" && (interactive ? "glass-card" : "glass"),
          variant === "strong" && "glass-strong",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
export default GlassCard;
