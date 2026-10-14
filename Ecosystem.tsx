import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { useMemo, useState } from "react";
import {
  filterGroups,
  groupTone,
  products,
  toneBg,
  type FilterGroup,
} from "../data/content";
import { Marker, SectionHead } from "./ui";

export default function Ecosystem() {
  const [filter, setFilter] = useState<FilterGroup | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.group === filter)),
    [filter]
  );

  return (
    <section id="ecosistema" className="relative scroll-mt-20 px-3 md:px-6">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem] border border-line bg-paper md:rounded-[3rem]">
        {/* soft pastel corners */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-lavender-deep/30 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-peach-deep/30 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-32">
          <SectionHead
            index="02"
            label="Ecosistema de partners"
            tone="mint"
            title={
              <>
                22 soluciones reales.{" "}
                <span className="font-serif font-normal normal-case italic tracking-normal">
                  <Marker tone="peach">Tu modelo</Marker>
                </span>{" "}
                de partnership.
              </>
            }
            copy="Software latinoamericano en producción. Para cada solución podés acordar marca blanca, cuando esté disponible, o representar y desarrollar la marca del producto como partner. No hace falta que todo el catálogo use el mismo modelo."
          />

          {/* filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="-mt-4 mb-10 flex flex-wrap gap-2 md:mb-12"
          >
            {filterGroups.map((g) => {
              const active = filter === g.id;
              const count =
                g.id === "all" ? products.length : products.filter((p) => p.group === g.id).length;
              return (
                <button
                  key={g.id}
                  onClick={() => setFilter(g.id)}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
                    active
                      ? "border-ink bg-ink text-cream"
                      : "border-line bg-cream text-ink/70 hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {g.label}{" "}
                  <span className={active ? "text-cream/60" : "text-ink/40"}>({count})</span>
                </button>
              );
            })}
          </motion.div>

          {/* grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.article
                  layout
                  key={p.code}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 p-6 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-26px_rgba(38,35,58,0.4)] ${toneBg[groupTone[p.group]]}`}
                  >
                    {/* top */}
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-ink shadow-[0_6px_14px_-8px_rgba(38,35,58,0.35)] transition-transform duration-500 group-hover:-rotate-6">
                        <p.icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="rounded-full border border-ink/10 bg-paper/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                        {p.code}
                      </span>
                    </div>

                    {/* body */}
                    <div className="mt-6 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                        {p.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                        {p.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.description}</p>
                    </div>

                    {/* footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                      <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Modalidad según acuerdo
                      </span>
                      <a
                        href="#contacto"
                        className="group/link flex items-center gap-1 rounded-full bg-paper/70 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
                      >
                        Consultar
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 max-w-3xl text-sm leading-relaxed text-muted"
          >
            En la vertical de pagos, además, integramos{" "}
            <span className="font-semibold text-ink">gateways de pago líderes del mercado</span> —
            links de pago, QR, tarjetas y transferencias — con posibilidad de marca blanca o de
            desarrollar la marca del producto como partner, según disponibilidad y acuerdo.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
