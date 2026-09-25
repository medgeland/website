import { LoaderCircle } from "lucide-react";

export function LoadingState({ label = "Loading data…" }: { label?: string }) {
  return <div className="ch-loading"><LoaderCircle className="spin" /><span>{label}</span></div>;
}
