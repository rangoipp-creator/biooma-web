import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { toneBg, type Tone } from "../data/content";
import { Marker, SpinBadge } from "./ui";

const stats: { k: string; v: string; tone: Tone }[] = [
  { k: "+22", v: "Soluciones SaaS para comercializar", tone: "lavender" },
  { k: "07", v: "Verticales de negocio en un solo catálogo", tone: "mint" },
  { k: "02", v: "Modalidades: marca blanca o partner de marca", tone: "peach" },
  { k: "A MEDIDA", v: "Alcance, inversión y exclusividad por acuerdo", tone: "sky" },
];

const stickers: { label: string; tone: Tone; rotate: number }[] = [
  { label: "CRM", tone: "lavender", rotate: -8 },
  { label: "ERP", tone: "mint", rotate: 6 },
  { label: "Pagos", tone: "peach", rotate: -4 },
];

function RevealLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* pastel aurora */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-blob absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-peach-deep/45 blur-[110px]" />
        <div className="animate-blob absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-lavender-deep/45 blur-[120px] [animation-delay:-6s]" />
        <div className="animate-blob absolute -bottom-48 left-[28%] h-[520px] w-[520px] rounded-full bg-mint-deep/35 blur-[120px] [animation-delay:-12s]" />
        <div className="absolute bottom-[12%] right-[10%] h-[320px] w-[320px] rounded-full bg-sky-deep/35 blur-[100px]" />
      </div>
      <div className="bg-dots mask-fade-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="mb-10 flex items-center justify-between gap-4 md:mb-14"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/80 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink shadow-[0_6px_18px_-10px_rgba(38,35,58,0.25)] backdrop-blur md:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-deep opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-deep" />
            </span>
            Biooma — Distribución mayorista de software
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.24em] text-muted md:block">
            Argentina → LATAM
          </span>
        </motion.div>

        {/* headline */}
        <div className="relative">
          <h1 className="font-display font-bold uppercase leading-[0.92] tracking-[-0.035em] text-ink">
            <RevealLine delay={0.45}>
              <span className="text-[clamp(2.5rem,8.4vw,8.8rem)]">Mayorista de</span>
            </RevealLine>
            <RevealLine delay={0.57}>
              <span className="font-serif text-[clamp(2.9rem,10.2vw,10.6rem)] font-normal normal-case italic tracking-[-0.01em]">
                <Marker tone="lavender" delay={1.15} onMount>
                  transformación
                </Marker>
              </span>
            </RevealLine>
            <RevealLine delay={0.69}>
              <span className="text-outline text-[clamp(2.5rem,8.4vw,8.8rem)]">digital</span>
              <span className="ml-8 hidden items-center gap-3 align-middle xl:inline-flex">
                {stickers.map((s, i) => (
                  <motion.span
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: s.rotate }}
                    transition={{ type: "spring", stiffness: 260, damping: 15, delay: 1.35 + i * 0.12 }}
                    className="inline-block"
                  >
                    <motion.span
                      animate={{ y: [0, -7, 0] }}
                      transition={{ duration: 3.4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className={`inline-block rounded-2xl border border-ink/10 px-5 py-2.5 font-display text-xl font-bold normal-case tracking-tight text-ink shadow-[0_10px_24px_-12px_rgba(38,35,58,0.4)] ${toneBg[s.tone]}`}
                    >
                      {s.label}
                    </motion.span>
                  </motion.span>
                ))}
              </span>
            </RevealLine>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 1.05 }}
            className="absolute right-0 top-0 hidden lg:block"
          >
            <SpinBadge text="MARCA BLANCA OPCIONAL • PARTNER DE MARCA • " className="h-32 w-32" />
          </motion.div>
        </div>

        {/* sub + ctas */}
        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.95 }}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            Biooma reúne soluciones SaaS para que armes tu propio negocio. Elegí la modalidad para
            cada vertical: <span className="font-semibold text-ink">marca blanca, si está disponible,</span>{" "}
            o un acuerdo para representar y desarrollar una marca con acompañamiento partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.05 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <a
              href="#partners"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-cream shadow-[0_14px_30px_-14px_rgba(38,35,58,0.6)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            >
              Quiero ser partner
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#verticales"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/70 px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-ink backdrop-blur transition-colors duration-300 hover:bg-lavender"
            >
              Explorar catálogo
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 + i * 0.08 }}
              className={`rounded-3xl border border-ink/5 p-5 transition-[translate] duration-500 hover:-translate-y-1.5 md:p-7 ${toneBg[s.tone]}`}
            >
              <p className="font-display text-4xl font-bold tracking-[-0.04em] text-ink md:text-6xl">
                {s.k}
              </p>
              <p className="mt-3 max-w-[220px] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink/70 md:text-[11px]">
                {s.v}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
