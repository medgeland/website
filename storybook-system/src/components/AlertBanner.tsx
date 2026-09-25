import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export type AlertBannerProps = { tone?: "warning" | "danger" | "success"; title: string; children: ReactNode };

export function AlertBanner({ tone = "warning", title, children }: AlertBannerProps) {
  const Icon = tone === "success" ? CheckCircle2 : AlertTriangle;
  return <div className={`ch-alert ch-alert--${tone}`}><Icon /><div><b>{title}</b><p>{children}</p></div></div>;
}
