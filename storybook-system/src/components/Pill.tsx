import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return <span className="ch-pill">{children}</span>;
}
