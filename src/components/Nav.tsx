import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toneBg, type Tone } from "../data/content";
import { Logo } from "./ui";

const links: { label: string; href: string; tone: Tone; hover: string }[] = [
  { label: "Catálogo", href: "#verticales", tone: "lavender", hover: "hover:bg-lavender" },
  { label: "Ecosistema", href: "#ecosistema", tone: "mint", hover: "hover:bg-mint" },
  { label: "Agencia", href: "#agencia", tone: "sky", hover: "hover:bg-sky" },
  { label: "Partners", href: "#partners", tone: "peach", hover: "hover:bg-peach" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/80 bg-cream/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3.5 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full border border-line bg-paper/70 p-1.5 backdrop-blur-md md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink/70 transition-colors duration-300 hover:text-ink ${l.hover}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#partners"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-3 font-display text-[13px] font-bold uppercase tracking-wide text-cream transition-transform duration-300 hover:scale-[1.04] active:scale-95 md:inline-flex"
            >
              Ser partner
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-ink md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-cream"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lavender-deep/40 blur-[90px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-mint-deep/40 blur-[90px]"
              aria-hidden
            />

            <div className="relative flex items-center justify-between px-5 py-3.5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center gap-2 px-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-4 border-b border-line py-5 font-display text-4xl font-bold uppercase tracking-tight text-ink"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl font-mono text-xs font-semibold ${toneBg[l.tone]}`}
                  >
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#partners"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5, ease: "easeOut" }}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-cream"
              >
                Ser partner
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
