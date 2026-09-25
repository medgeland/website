import type { ReactNode } from "react";

export type SectionCardProps = { title: string; icon?: ReactNode; action?: ReactNode; children: ReactNode };

export function SectionCard({ title, icon, action, children }: SectionCardProps) {
  return <section className="ch-card"><header className="ch-card__head"><div className="ch-card__title">{icon}<h3>{title}</h3></div>{action}</header>{children}</section>;
}
