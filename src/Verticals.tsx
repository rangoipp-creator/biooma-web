import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { toneBg, verticals } from "../data/content";
import { Marker, SectionHead } from "./ui";

export default function Verticals() {
  return (
    <section id="verticales" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        <SectionHead
          index="01"
          label="Catálogo mayorista"
          tone="lavender"
          title={
            <>
              Las verticales que tu mercado{" "}
              <span className="font-serif font-normal normal-case italic tracking-normal">
                <Marker tone="mint">ya está pidiendo</Marker>
              </span>
            </>
          }
          copy="Cada vertical tiene alternativas comerciales: marca blanca cuando esté disponible o un acuerdo para representar la marca del producto. Territorio, exclusividad y alcance se definen con cada partner."
        />

        <div className="border-t border-line">
          {verticals.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.04 }}
              className="group relative cursor-pointer overflow-hidden border-b border-line"
            >
              {/* pastel fill that rises on hover */}
              <span
                aria-hidden
                className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100 ${toneBg[v.tone]}`}
              />

              {/* main row */}
              <div className="relative flex items-center gap-3 px-1 py-5 md:gap-8 md:px-5 md:py-8">
                <span className="hidden font-mono text-xs font-medium tracking-[0.2em] text-muted md:block">
                  /{v.index}
                </span>

                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-ink transition-all duration-500 group-hover:-rotate-[8deg] group-hover:bg-paper md:h-14 md:w-14 md:rounded-2xl ${toneBg[v.tone]}`}
                >
                  <v.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />
                </span>

                <h3 className="min-w-0 flex-1 hyphens-auto font-display text-[1.3rem] font-bold uppercase leading-none tracking-[-0.03em] text-ink transition-transform duration-500 md:text-4xl md:group-hover:translate-x-3 lg:text-6xl 2xl:text-7xl">
                  {v.name}
                </h3>

                <span className="hidden w-56 text-right font-mono text-[11px] uppercase leading-snug tracking-[0.16em] text-muted transition-colors duration-500 group-hover:text-ink xl:block">
                  {v.tagline}
                </span>

                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 bg-paper transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink md:h-14 md:w-14">
                  <ArrowUpRight className="h-4 w-4 text-ink transition-colors duration-500 group-hover:text-cream md:h-5 md:w-5" />
                </span>
              </div>

              {/* expandable detail */}
              <div className="relative grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 px-1 pb-6 md:flex-row md:items-center md:justify-between md:px-5 md:pb-9 md:pl-[10.5rem]">
                    <p className="max-w-2xl text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-ink/80 md:text-base">
                      {v.detail}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {v.chips?.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-ink/15 bg-paper/80 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                        >
                          {c}
                        </span>
                      ))}
                      <span className="rounded-full bg-ink px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cream">
                        Modalidad según acuerdo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-muted"
        >
          ¿Necesitás otra vertical?{" "}
          <a
            href="#contacto"
            className="font-semibold text-ink underline decoration-lavender-deep decoration-2 underline-offset-4"
          >
            El catálogo crece todos los meses →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
