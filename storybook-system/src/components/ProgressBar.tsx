export type ProgressBarProps = { value: number; label?: string };

export function ProgressBar({ value, label }: ProgressBarProps) {
  const bounded = Math.min(100, Math.max(0, value));
  return <div className="ch-progress-wrap">{label && <div className="ch-progress-label"><span>{label}</span><b>{bounded}%</b></div>}<div className="ch-progress"><span style={{ width: `${bounded}%` }} /></div></div>;
}
