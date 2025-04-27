import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Icon({ icon, className }: { icon: ReactNode; className?: string }) {
  return <div className={cn("text-primary", className)}>{icon}</div>;
}
