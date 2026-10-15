import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MessageCircle, Sparkles } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "../data/contact";
import { products, verticals } from "../data/content";
import { Logo, Marker } from "./ui";

export default function Closing() {
  return (
    <>
      {/* ------------------------------- big CTA ------------------------------ */}
      <section id="contacto" className="relative scroll-mt-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mesh-pastel relative overflow-hidden rounded-[2rem] border border-ink/5 px-6 py-16 md:rounded-[3rem] md:px-20 md:py-24"
          >
            {/* deco rings */}
            <svg
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] md:h-[560px] md:w-[560px]"
              aria-hidden
            >
              <circle cx="200" cy="200" r="150" fill="none" stroke="#ffffff" strokeWidth="26" opacity="0.6" />
              <circle cx="260" cy="200" r="150" fill="none" stroke="#ffffff" strokeWidth="26" opacity="0.35" />
            </svg>

            {/* floating toasts */}
            <div
              className="pointer-events-none absolute bottom-14 right-14 hidden w-[280px] flex-col gap-3 xl:flex"
              aria-hidden
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="-rotate-3 rounded-2xl border border-ink/5 bg-paper p-4 shadow-[0_20px_40px_-20px_rgba(38,35,58,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-ink">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">Nuevo partner activado</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      CRM · modalidad acordada
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="ml-10 rotate-2 rounded-2xl border border-ink/5 bg-paper p-4 shadow-[0_20px_40px_-20px_rgba(38,35,58,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lavender text-ink">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">Plan de desarrollo listo</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      marca partner · activo
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <p className="inline-flex rounded-full bg-paper/70 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur md:text-[11px]">
                Último paso — Programa de Partners Biooma
              </p>
              <h2 className="mt-7 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-[-0.035em] text-ink md:text-8xl">
                Empezás hoy.
                <br />
                <span className="font-serif font-normal normal-case italic tracking-normal">
                  <Marker tone="butter">Vendés esta</Marker>
                </span>
                <br />
                semana.
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
                Contanos qué vertical te interesa y qué modalidad buscás. Diseñamos una propuesta a
                medida para vender con marca blanca o desarrollar una marca como partner.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 md:gap-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hola Biooma, quiero sumarme como partner")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-cream shadow-[0_14px_30px_-14px_rgba(38,35,58,0.6)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hablar por WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------- footer ------------------------------ */}
      <footer className="relative mt-24 overflow-hidden border-t border-line bg-paper md:mt-32">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                Mayorista de transformación digital. Conectamos soluciones SaaS con agencias y
                partners mediante marca blanca opcional o programas para desarrollar una marca.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted/80">
                Buenos Aires, Argentina → LATAM
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="inline-flex rounded-full bg-lavender px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Catálogo
              </p>
              <ul className="mt-5 space-y-3">
                {verticals.map((v) => (
                  <li key={v.id}>
                    <a
                      href="#verticales"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {v.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="inline-flex rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Ecosistema
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {products.map((p) => (
                  <li key={p.code}>
                    <a
                      href="#ecosistema"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="inline-flex rounded-full bg-peach px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Partners
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#agencia" className="text-muted transition-colors hover:text-ink">
                    Montá tu agencia a medida
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-muted transition-colors hover:text-ink">
                    Programa y beneficios
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-muted transition-colors hover:text-ink">
                    Planes de suscripción
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    WhatsApp comercial · {WHATSAPP_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* giant pastel wordmark */}
          <div
            className="pointer-events-none relative mt-16 select-none overflow-hidden md:mt-20"
            aria-hidden
          >
            <p className="bg-linear-to-r from-lavender-deep via-peach-deep to-mint-deep bg-clip-text text-center font-display text-[20vw] font-extrabold uppercase leading-[0.8] tracking-[-0.05em] text-transparent">
              biooma
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-paper to-transparent" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 md:flex-row">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              © 2026 Biooma — Mayorista de transformación digital
            </p>
            <p className="max-w-xl text-center font-mono text-[10px] leading-relaxed tracking-[0.06em] text-muted/80 md:text-right">
              La marca blanca es opcional y depende de cada solución. Los acuerdos de marca,
              distribución y exclusividad se definen con cada partner.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
