import { CheckCircle2, LoaderCircle, Upload } from "lucide-react";

export type FileDropzoneProps = { state?: "idle" | "drag" | "ready" | "extracting"; fileName?: string };

export function FileDropzone({ state = "idle", fileName }: FileDropzoneProps) {
  const copy = state === "extracting" ? "Reading text…" : state === "ready" ? "Ready for analysis" : "PDF or DOCX, up to 5 MB";
  return <div className={`ch-drop ch-drop--${state}`}>{state === "ready" ? <CheckCircle2 /> : state === "extracting" ? <LoaderCircle className="spin" /> : <Upload />}<b>{fileName || (state === "drag" ? "Drop the file" : "Drag your CV here or browse")}</b><span>{copy}</span></div>;
}
