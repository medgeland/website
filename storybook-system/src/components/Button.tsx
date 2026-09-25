import type { ReactNode } from "react";

export type ButtonProps = { children: ReactNode; variant?: "primary" | "secondary" | "ghost"; disabled?: boolean };

export function Button({ children, variant = "primary", disabled = false }: ButtonProps) {
  return <button className={`ch-button ch-button--${variant}`} disabled={disabled}>{children}</button>;
}
