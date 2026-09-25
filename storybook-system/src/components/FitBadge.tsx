import type { Tone } from "./types";
import { StatusBadge } from "./StatusBadge";

export function FitBadge({ value }: { value: number }) {
  const tone: Tone = value >= 85 ? "success" : value >= 70 ? "warning" : "neutral";
  return <StatusBadge tone={tone}>AI fit {value}%</StatusBadge>;
}
