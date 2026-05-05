import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow", className)}>
      <span className="eyebrow-dot" aria-hidden />
      {children}
    </span>
  );
}
