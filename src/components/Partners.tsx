import { motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../data/contact";
import { steps, tiers, toneBg, type Tone } from "../data/content";
import { Marker, SectionHead } from "./ui";

const stepTones: Tone[] = ["lavender", "mint", "peach", "sky"];
const tierSurface = ["border border-line bg-paper", "bg-lavender", "bg-mint"];

export default function Partners() {
  return (
    <section id="partners" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-peach-deep/25 blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHead
          index="04"
          label="Programa de partners"
          tone="peach"
          align="center"
          title={
            <>
              Una suscripción mensual.{" "}
              <span className="font-serif font-normal normal-case italic tracking-normal">
                <Marker tone="lavender">Todo un negocio</Marker>
              </span>{" "}
              de software.
            </>
          }
          copy="Una suscripción mensual te da acceso al programa partner. En cada solución elegís, según disponibilidad y acuerdo, operar con marca blanca o representar y desarrollar la marca del producto."
        />

        {/* steps */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-28 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="group relative rounded-3xl border border-line bg-paper p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-26px_rgba(38,35,58,0.35)] md:p-8"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl font-mono text-sm font-semibold text-ink transition-transform duration-500 group-hover:-rotate-6 ${toneBg[stepTones[i]]}`}
              >
                {s.index}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.copy}</p>
            </motion.div>
          ))}
        </div>

        {/* tiers */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className={`relative flex flex-col rounded-[2rem] p-8 md:p-10 ${tierSurface[i]} ${
                t.featured
                  ? "shadow-[0_34px_70px_-34px_rgba(38,35,58,0.5)] ring-1 ring-ink/10 lg:-translate-y-4"
                  : ""
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cream">
                  ★ Más elegido
                </span>
              )}

              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                {t.tagline}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.02em] text-ink">
                {t.name}
              </h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold tracking-[-0.04em] text-ink md:text-6xl">
                  {t.price}
                </span>
                {t.period && (
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
                    {t.period}
                  </span>
                )}
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
                Suscripción mensual · Cancelás cuando quieras
              </p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {t.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-ink ${
                        i === 0 ? "bg-lavender" : "bg-paper"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink/80">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`group mt-10 inline-flex items-center justify-center gap-2 rounded-full py-4 font-display text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                  t.featured
                    ? "bg-ink text-cream"
                    : "border border-ink/20 bg-paper/60 text-ink hover:bg-ink hover:text-cream"
                }`}
              >
                {t.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-3xl font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
            La marca blanca es opcional. Modalidad, alcance y posibles acuerdos de exclusividad se
            definen por solución, vertical y territorio.
          </p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola Biooma, tengo una consulta sobre el programa de partners")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-mint-deep"
          >
            <MessageCircle className="h-4 w-4" />
            ¿Dudas? Hablamos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
