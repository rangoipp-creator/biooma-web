import { motion } from "framer-motion";
import { ArrowUpRight, Megaphone } from "lucide-react";

function GoniaLogo() {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="gonIA">
      <svg viewBox="0 0 26 22" className="h-11 w-12 shrink-0" aria-hidden>
        <path d="M1.5 19.5 9.6 7.4 11.6 4.4h2.8l2 3 8.1 12.1z" fill="#4C6176" />
        <path d="M9.6 7.4 11.6 4.4h2.8l2 3-1.4-.5-1 1.3-1.1-1.1-1.1 1.1-1-1.3z" fill="#fff" />
        <path d="M.5 21h25" stroke="#B8792B" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[2.15rem] font-extrabold tracking-[-0.08em] text-[#4C6176]">
          gon<span className="font-serif font-normal italic text-[#B8792B]">IA</span>
        </span>
        <span className="mt-1 font-mono text-[8px] font-medium uppercase tracking-[0.16em] text-[#4C6176]/75">
          Finanzas en Telegram
        </span>
      </span>
    </span>
  );
}

function KuboLogo() {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Kubo">
      <svg viewBox="0 0 360 360" className="h-10 w-10 shrink-0" aria-hidden>
        <path
          d="M180 180 310 50M180 180l130 130M180 180H50"
          stroke="#b45309"
          strokeWidth="42"
          strokeLinecap="round"
        />
        <rect x="0" y="0" width="100" height="100" rx="18" fill="#b45309" />
        <rect x="0" y="130" width="100" height="100" rx="18" fill="#b45309" />
        <rect x="0" y="260" width="100" height="100" rx="18" fill="#b45309" />
        <rect x="130" y="130" width="100" height="100" rx="18" fill="#b45309" />
        <rect x="260" y="0" width="100" height="100" rx="18" fill="#b45309" />
        <rect x="260" y="260" width="100" height="100" rx="18" fill="#b45309" />
      </svg>
      <span className="font-display text-[2.15rem] font-extrabold tracking-[-0.075em] text-[#855122]">
        Kubo
      </span>
    </span>
  );
}

function LightSweep({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-[-18deg] bg-linear-to-r from-transparent via-white/45 to-transparent"
      animate={{ x: ["-150%", "450%"] }}
      transition={{ duration: 5.5, ease: "linear", repeat: Infinity, delay }}
    />
  );
}

const tickerItems = [
  { name: "gonIA", copy: "anotá tu plata conversando" },
  { name: "Kubo", copy: "tu comercio, sincronizado" },
];

function TickerRun({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex w-max shrink-0 items-center" aria-hidden={duplicate || undefined}>
      {tickerItems.map((item) => (
        <span key={item.name} className="flex items-center gap-3 px-5 sm:px-8">
          <span className="h-1.5 w-1.5 rounded-full bg-butter-deep shadow-[0_0_10px_rgba(255,223,115,0.9)]" />
          <span className="font-display text-xs font-extrabold uppercase tracking-[0.08em] text-cream sm:text-sm">
            {item.name}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/65 sm:text-[10px]">
            {item.copy}
          </span>
          <span className="ml-2 font-mono text-xs text-lavender-deep">///</span>
        </span>
      ))}
    </div>
  );
}

export default function PartnerAds() {
  return (
    <motion.aside
      aria-label="Publicidad de gonIA y Kubo"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-5xl"
    >
      <div className="mb-3 flex items-center justify-between gap-3 px-1">
        <p className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[10px]">
          <Megaphone className="h-3.5 w-3.5" strokeWidth={1.8} />
          Cartelera de partners
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper/70 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-muted">
          <motion.span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-rose-deep"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          En vivo
        </span>
      </div>

      {/* Matte frame and pastel LED-style sponsor signs */}
      <div className="overflow-hidden rounded-[1.65rem] border border-ink/10 bg-ink p-1.5 shadow-[0_24px_48px_-28px_rgba(38,35,58,0.45)] sm:rounded-[2rem] sm:p-2">
        <div className="grid gap-1.5 sm:grid-cols-2">
          <motion.a
            href="https://gon-ia.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="group relative isolate flex min-h-[184px] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-white/60 bg-lavender px-5 py-5 sm:px-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:repeating-linear-gradient(0deg,rgba(38,35,58,0.07)_0px,rgba(38,35,58,0.07)_1px,transparent_1px,transparent_4px)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-12 -z-10 h-44 w-44 rounded-full bg-white/40 blur-2xl"
            />
            <LightSweep />
            <span className="relative flex items-center justify-between gap-3">
              <GoniaLogo />
              <span className="rounded-full border border-ink/10 bg-white/55 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.13em] text-ink/70">
                Fintech personal
              </span>
            </span>
            <span className="relative mt-5 flex items-end justify-between gap-4">
              <span className="max-w-[300px] text-sm font-medium leading-snug text-ink/80">
                Registrá ingresos y gastos por chat, audio o foto. Consultá tus reportes y ordená
                también tu trabajo.
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </motion.a>

          <motion.a
            href="https://kubo.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="group relative isolate flex min-h-[184px] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-white/60 bg-mint px-5 py-5 sm:px-6"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background-image:repeating-linear-gradient(0deg,rgba(38,35,58,0.07)_0px,rgba(38,35,58,0.07)_1px,transparent_1px,transparent_4px)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-12 -z-10 h-44 w-44 rounded-full bg-white/45 blur-2xl"
            />
            <LightSweep delay={1.1} />
            <span className="relative flex items-center justify-between gap-3">
              <KuboLogo />
              <span className="rounded-full border border-ink/10 bg-white/55 px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.13em] text-ink/70">
                Gestión comercial
              </span>
            </span>
            <span className="relative mt-5 flex items-end justify-between gap-4">
              <span className="max-w-[300px] text-sm font-medium leading-snug text-ink/80">
                Sincronizá precios y stock entre mayorista, depósito y local. Una sola carga para
                todo el comercio.
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </motion.a>
        </div>

        {/* Moving LED ribbon, duplicated for a seamless loop. */}
        <div className="relative mt-1.5 overflow-hidden rounded-b-[1rem] border-t border-white/10 bg-ink py-2.5">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          >
            <TickerRun />
            <TickerRun duplicate />
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
}