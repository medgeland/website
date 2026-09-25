import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export type NavigationItemProps = { label: string; active?: boolean; icon?: ReactNode };

export function NavigationItem({ label, active = false, icon }: NavigationItemProps) {
  return <button className={`ch-nav ${active ? "is-active" : ""}`}>{icon}<span>{label}</span><ChevronRight /></button>;
}
