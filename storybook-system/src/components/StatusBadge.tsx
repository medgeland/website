import type { ReactNode } from "react";
import type { Tone } from "./types";

export type StatusBadgeProps = { children: ReactNode; tone?: Tone };

export function StatusBadge({ children, tone = "neutral" }: StatusBadgeProps) {
  return <span className={`ch-status ch-status--${tone}`}><i />{children}</span>;
}
