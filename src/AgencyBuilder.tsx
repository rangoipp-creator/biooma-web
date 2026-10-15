import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { toneBg, verticals } from "../data/content";
import PartnerAds from "./PartnerAds";
import { Marker, SectionHead } from "./ui";

export default function AgencyBuilder() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function toggleVertical(id: string) {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  const saasSubject = encodeURIComponent("Quiero sumar mi SaaS al ecosistema Biooma");
  const saasBody = encodeURIComponent(
    "Hola, tengo una solución SaaS y quiero conocer cómo sumarla al catálogo de Biooma."
  );

  return (
    <section id="agencia" className="relative scroll-mt-20 overflow-hidden bg-lavender/35">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 top-20 h-[480px] w-[480px] rounded-full bg-mint-deep/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-peach-deep/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHead
          index="03"
          label="Agencia a medida"
          tone="sky"
          title={
            <>
              Montá tu agencia. <br className="hidden md:block" />
              <span className="font-serif font-normal normal-case italic tracking-normal">
                <Marker tone="mint">Elegí qué verticales</Marker>
              </span>{" "}
              comercializás.
            </>
          }
          copy="Seleccioná las verticales que mejor encajan con tu mercado y armá el catálogo de tu agencia. El alcance y las condiciones se definen a medida."
        />

        <PartnerAds />

        <div className="mb-12">
          {/* Interactive vertical selector */}
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted md:text-[11px]">
                Elegí una o varias verticales
              </p>
              <span className="rounded-full border border-line bg-paper/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                {selectedIds.length} seleccionadas
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {verticals.map((vertical, index) => {
                const active = selectedIds.includes(vertical.id);

                return (
                  <motion.button
                    key={vertical.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleVertical(vertical.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className={`group flex min-h-[106px] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                      active
                        ? `${toneBg[vertical.tone]} border-ink/15 shadow-[0_12px_28px_-20px_rgba(38,35,58,0.42)]`
                        : "border-line bg-paper/85 hover:border-ink/20 hover:bg-paper"
                    }`}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                        active ? "bg-paper text-ink" : `${toneBg[vertical.tone]} text-ink`
                      }`}
                    >
                      <vertical.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-bold text-ink sm:text-lg">
                        {vertical.name}
                      </span>
                      <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.1em] text-muted sm:text-[10px]">
                        {vertical.tagline}
                      </span>
                    </span>
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-all ${
                        active
                          ? "border-ink bg-ink text-cream"
                          : "border-ink/20 bg-paper text-transparent group-hover:border-ink/40"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Short SaaS intake */}
        <motion.div
          id="saas-sumate"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/5 bg-peach/70 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/60">
              ¿Tenés una solución propia?
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              ¿Sos un SaaS y querés formar parte? <span className="font-serif italic">Sumate.</span>
            </h3>
          </div>
          <a
            href={`mailto:rangoipp@gmail.com?subject=${saasSubject}&body=${saasBody}`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            Presentá tu SaaS
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}