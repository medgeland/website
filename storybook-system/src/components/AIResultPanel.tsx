import { FileText, Sparkles } from "lucide-react";
import { AlertBanner } from "./AlertBanner";
import { Button } from "./Button";
import { EmptyState } from "./EmptyState";
import { LoadingState } from "./LoadingState";

export type AIResultState = "empty" | "loading" | "partial" | "refusal" | "error" | "success";

export function AIResultPanel({ state = "empty" }: { state?: AIResultState }) {
  if (state === "empty") return <EmptyState title="Ready to review" text="Upload a CV to receive bounded recommendations." />;
  if (state === "loading") return <div className="ai-panel"><LoadingState label="Reading the CV and identifying priorities…" /><div className="ai-skeleton"><i /><i /><i /><i /></div></div>;
  if (state === "error") return <div className="ai-panel"><AlertBanner tone="danger" title="We could not finish the analysis">Your document is unchanged. Retry the analysis or upload a new file.</AlertBanner><Button variant="secondary">Try again</Button></div>;
  if (state === "refusal") return <div className="ai-panel"><AlertBanner tone="danger" title="Analysis paused">The model could not evaluate this document safely. Try another file or request human review.</AlertBanner><Button variant="secondary">Upload another file</Button></div>;
  if (state === "partial") return <div className="ai-panel"><AlertBanner tone="warning" title="Partial result available">Structure and ATS feedback are ready, but experience evidence could not be evaluated. Completed findings are preserved.</AlertBanner><ResultContent compact /><Button variant="secondary">Retry missing section</Button></div>;
  return <div className="ai-panel"><AlertBanner tone="success" title="Analysis complete">Recommendations are ready. The student’s original text was not rewritten.</AlertBanner><ResultContent /></div>;
}

function ResultContent({ compact = false }: { compact?: boolean }) {
  return <div className="result-content"><div><FileText /><span>Objective / Summary</span></div><p>Add a specific target role and one measurable strength.</p>{!compact && <><div><FileText /><span>Experience / Projects</span></div><p>Two projects describe tasks but not outcomes. Add scale or a metric.</p></>}<div><Sparkles /><span>Top priority</span></div><p>Strengthen evidence of impact first—it helps both reviewers and ATS.</p></div>;
}
