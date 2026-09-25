import React from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  FileText,
  LoaderCircle,
  Sparkles,
  Upload,
} from "lucide-react";

export type Tone = "primary" | "neutral" | "success" | "warning" | "danger";

export function Button({ children, variant = "primary", disabled = false }: { children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; disabled?: boolean }) {
  return <button className={`ch-button ch-button--${variant}`} disabled={disabled}>{children}</button>;
}

export function SectionCard({ title, icon, action, children }: { title: string; icon?: React.ReactNode; action?: React.ReactNode; children: React.ReactNode }) {
  return <section className="ch-card"><header className="ch-card__head"><div className="ch-card__title">{icon}<h3>{title}</h3></div>{action}</header>{children}</section>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="ch-pill">{children}</span>;
}

export function StatusBadge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: Tone }) {
  return <span className={`ch-status ch-status--${tone}`}><i />{children}</span>;
}

export function FitBadge({ value }: { value: number }) {
  const tone: Tone = value >= 85 ? "success" : value >= 70 ? "warning" : "neutral";
  return <StatusBadge tone={tone}>AI fit {value}%</StatusBadge>;
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const bounded = Math.min(100, Math.max(0, value));
  return <div className="ch-progress-wrap">{label && <div className="ch-progress-label"><span>{label}</span><b>{bounded}%</b></div>}<div className="ch-progress"><span style={{ width: `${bounded}%` }} /></div></div>;
}

export function EmptyState({ title = "Здесь пока ничего нет", text = "Новые элементы появятся после первого действия.", action }: { title?: string; text?: string; action?: React.ReactNode }) {
  return <div className="ch-empty"><Sparkles /><b>{title}</b><p>{text}</p>{action}</div>;
}

export function LoadingState({ label = "Загружаем данные…" }: { label?: string }) {
  return <div className="ch-loading"><LoaderCircle className="spin" /><span>{label}</span></div>;
}

export function AlertBanner({ tone = "warning", title, children }: { tone?: "warning" | "danger" | "success"; title: string; children: React.ReactNode }) {
  const Icon = tone === "success" ? CheckCircle2 : AlertTriangle;
  return <div className={`ch-alert ch-alert--${tone}`}><Icon /><div><b>{title}</b><p>{children}</p></div></div>;
}

export function FileDropzone({ state = "idle", fileName }: { state?: "idle" | "drag" | "ready" | "extracting"; fileName?: string }) {
  return <div className={`ch-drop ch-drop--${state}`}>{state === "ready" ? <CheckCircle2 /> : state === "extracting" ? <LoaderCircle className="spin" /> : <Upload />}<b>{fileName || (state === "drag" ? "Отпустите файл" : "Перетащите CV сюда или нажмите")}</b><span>{state === "extracting" ? "Читаем текст…" : state === "ready" ? "Готово к анализу" : "PDF или DOCX, до 5 МБ"}</span></div>;
}

export function NavigationItem({ label, active = false, icon }: { label: string; active?: boolean; icon?: React.ReactNode }) {
  return <button className={`ch-nav ${active ? "is-active" : ""}`}>{icon}<span>{label}</span><ChevronRight /></button>;
}

export function AIResultPanel({ state = "empty" }: { state?: "empty" | "loading" | "partial" | "refusal" | "success" }) {
  if (state === "empty") return <EmptyState title="Готовы к разбору" text="Загрузите резюме, чтобы получить рекомендации." />;
  if (state === "loading") return <div className="ai-panel"><LoadingState label="Claude читает CV и формирует приоритеты…" /><div className="ai-skeleton"><i /><i /><i /><i /></div></div>;
  if (state === "refusal") return <div className="ai-panel"><AlertBanner tone="danger" title="Анализ не выполнен">Модель не смогла безопасно обработать содержимое. Файл не изменён — попробуйте другой документ или обратитесь к консультанту.</AlertBanner><Button variant="secondary">Загрузить другой файл</Button></div>;
  if (state === "partial") return <div className="ai-panel"><AlertBanner tone="warning" title="Получен частичный результат">Доступны рекомендации по структуре и ATS, но раздел опыта не был обработан. Уже полученные данные сохранены.</AlertBanner><ResultContent compact /><Button variant="secondary">Повторить недостающий раздел</Button></div>;
  return <div className="ai-panel"><AlertBanner tone="success" title="Анализ готов">Рекомендации сформированы. Авторский текст не переписывался.</AlertBanner><ResultContent /></div>;
}

function ResultContent({ compact = false }: { compact?: boolean }) {
  return <div className="result-content"><div><FileText /><span>Objective / Summary</span></div><p>Добавьте конкретный целевой профиль и одну измеримую сильную сторону.</p>{!compact && <><div><FileText /><span>Опыт / Проекты</span></div><p>Два проекта описывают задачи, но не показывают результат. Добавьте масштаб или метрику.</p></>}<div><Sparkles /><span>Топ-приоритет</span></div><p>Сначала усилите доказательства результата — это повлияет и на человека, и на ATS.</p></div>;
}
