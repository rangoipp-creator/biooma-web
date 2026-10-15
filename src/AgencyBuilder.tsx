import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../data/contact";
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

  function handleSaasSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("contactName") ?? "").trim();
    const saasName = String(formData.get("saasName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const subject = encodeURIComponent(`Quiero sumar ${saasName} al ecosistema Biooma`);
    const body = encodeURIComponent(
      [
        "Hola Biooma, quiero presentar mi SaaS para sumarlo al ecosistema.",
        "",
        `Nombre y apellido: ${name}`,
        `SaaS: ${saasName}`,
        `Email de contacto: ${email}`,
        `Sitio web: ${website || "No informado"}`,
        "",
        "Descripción de la solución:",
        description,
      ].join("\n")
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

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

        <div id="verticales" className="mb-12 scroll-mt-28">
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

        {/* SaaS partner intake form */}
        <motion.div
          id="saas-sumate"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 rounded-3xl border border-ink/5 bg-peach/70 p-6 sm:p-8 md:p-10"
        >
          <div className="mb-7 max-w-3xl">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-ink/60">
              ¿Tenés una solución propia?
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              ¿Sos un SaaS y querés formar parte? <span className="font-serif italic">Sumate.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Completá los datos y te contactamos para conversar sobre una posible alianza.
            </p>
          </div>
          <form onSubmit={handleSaasSubmit} className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Nombre y apellido
              <input
                name="contactName"
                type="text"
                autoComplete="name"
                required
                placeholder="Tu nombre"
                className="min-h-12 rounded-xl border border-ink/10 bg-paper px-4 text-sm font-normal outline-none transition-shadow placeholder:text-muted/60 focus:border-lavender-deep focus:ring-4 focus:ring-lavender/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Nombre del SaaS
              <input
                name="saasName"
                type="text"
                required
                placeholder="Nombre de tu solución"
                className="min-h-12 rounded-xl border border-ink/10 bg-paper px-4 text-sm font-normal outline-none transition-shadow placeholder:text-muted/60 focus:border-lavender-deep focus:ring-4 focus:ring-lavender/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Email de contacto
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nombre@empresa.com"
                className="min-h-12 rounded-xl border border-ink/10 bg-paper px-4 text-sm font-normal outline-none transition-shadow placeholder:text-muted/60 focus:border-lavender-deep focus:ring-4 focus:ring-lavender/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink">
              Sitio web <span className="font-normal text-muted">(opcional)</span>
              <input
                name="website"
                type="url"
                placeholder="https://"
                className="min-h-12 rounded-xl border border-ink/10 bg-paper px-4 text-sm font-normal outline-none transition-shadow placeholder:text-muted/60 focus:border-lavender-deep focus:ring-4 focus:ring-lavender/60"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
              Contanos brevemente qué hace tu solución
              <textarea
                name="description"
                required
                rows={3}
                placeholder="¿Qué problema resuelve y para quién?"
                className="resize-y rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm font-normal outline-none transition-shadow placeholder:text-muted/60 focus:border-lavender-deep focus:ring-4 focus:ring-lavender/60"
              />
            </label>
            <div className="flex flex-col items-start gap-3 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-xs leading-relaxed text-muted">
                Al enviar, se abrirá tu aplicación de correo con los datos listos para enviar a
                Biooma.
              </p>
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-cream transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                Enviar presentación
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}