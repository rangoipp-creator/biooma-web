import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import type { ReactNode } from "react";
import { toneBg, toneDeep, type Tone } from "../data/content";

/* ---------------------------------- logo ---------------------------------- */

export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 34" className={className} aria-hidden>
      <circle cx="13" cy="17" r="9.5" fill="#bba9f8" />
      <circle cx="21" cy="17" r="9.5" fill="#8fdcb7" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Biooma — inicio">
      <span className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-paper shadow-[0_6px_16px_-8px_rgba(38,35,58,0.3)] transition-transform duration-500 group-hover:-rotate-12">
        <LogoMark className="h-6 w-6" />
      </span>
      <span className="font-display text-[1.4rem] font-bold tracking-[-0.03em] text-ink">
        biooma<span className="text-lavender-deep">.</span>
      </span>
    </a>
  );
}

/* --------------------------------- marker --------------------------------- */

const markerTone: Record<Tone, string> = {
  lavender: "bg-lavender-deep/60",
  mint: "bg-mint-deep/65",
  peach: "bg-peach-deep/60",
  sky: "bg-sky-deep/60",
  butter: "bg-butter-deep/80",
  rose: "bg-rose-deep/60",
  aqua: "bg-aqua-deep/65",
};

/** Pastel highlighter swash that draws itself behind the text. */
export function Marker({
  children,
  tone = "lavender",
  delay = 0.35,
  onMount = false,
}: {
  children: ReactNode;
  tone?: Tone;
  delay?: number;
  onMount?: boolean;
}) {
  return (
    <span className="relative isolate inline-block">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={onMount ? { scaleX: 1 } : undefined}
        whileInView={onMount ? undefined : { scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay }}
        className={`absolute -inset-x-[0.08em] bottom-[0.06em] -z-10 h-[0.4em] origin-left rounded-full ${markerTone[tone]}`}
      />
      {children}
    </span>
  );
}

/* ------------------------------ section header ----------------------------- */

export function SectionHead({
  index,
  label,
  title,
  copy,
  align = "left",
  tone = "lavender",
}: {
  index: string;
  label: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  tone?: Tone;
}) {
  const center = align === "center";
  return (
    <div className={`mb-14 md:mb-20 ${center ? "text-center" : ""}`}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink md:text-[11px] ${toneBg[tone]}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        {index} — {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        className={`max-w-5xl font-display text-[2.4rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-ink md:text-6xl lg:text-[4.4rem] ${
          center ? "mx-auto" : ""
        }`}
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          className={`mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {copy}
        </motion.p>
      )}
    </div>
  );
}

/* --------------------------------- marquee -------------------------------- */

export function Marquee({
  items,
  tone,
  reverse = false,
  slow = false,
}: {
  items: string[];
  tone?: Tone;
  reverse?: boolean;
  slow?: boolean;
}) {
  const row = (key: string) => (
    <div
      key={key}
      className="flex w-max shrink-0 items-center"
      aria-hidden={key === "b" ? true : undefined}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-base font-bold uppercase tracking-[0.08em] md:px-10 md:text-xl ${
              tone ? "text-ink" : "text-muted"
            }`}
          >
            {item}
          </span>
          <Asterisk
            className={`h-5 w-5 shrink-0 ${tone ? "text-ink/60" : "text-lavender-deep"}`}
            strokeWidth={2.5}
          />
        </span>
      ))}
    </div>
  );

  const anim = reverse
    ? "animate-marquee-reverse"
    : slow
      ? "animate-marquee-slow"
      : "animate-marquee";

  return (
    <div
      className={`relative overflow-hidden py-4 md:py-5 ${
        tone
          ? `${toneDeep[tone]} shadow-[0_18px_40px_-22px_rgba(38,35,58,0.35)]`
          : "border-y border-line bg-paper"
      }`}
    >
      <div className={`flex w-max ${anim}`}>
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ------------------------------ rotating badge ----------------------------- */

export function SpinBadge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div
      className={`relative grid place-items-center rounded-full border border-line bg-paper/75 shadow-[0_12px_30px_-16px_rgba(38,35,58,0.3)] backdrop-blur ${className}`}
    >
      <svg viewBox="0 0 120 120" className="animate-spin-slower h-full w-full">
        <defs>
          <path id="circ" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-ink font-mono text-[8.5px] font-medium uppercase tracking-[0.3em]">
          <textPath href="#circ">{text}</textPath>
        </text>
      </svg>
      <LogoMark className="absolute h-9 w-9" />
    </div>
  );
}
