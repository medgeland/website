import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export type EmptyStateProps = { title?: string; text?: string; action?: ReactNode };

export function EmptyState({ title = "Nothing here yet", text = "New items will appear after the first action.", action }: EmptyStateProps) {
  return <div className="ch-empty"><Sparkles /><b>{title}</b><p>{text}</p>{action}</div>;
}
