import { motion, useScroll, useSpring } from "framer-motion";
import AgencyBuilder from "./components/AgencyBuilder";
import Closing from "./components/Closing";
import Ecosystem from "./components/Ecosystem";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partners from "./components/Partners";
import { Marquee } from "./components/ui";
import { heroMarquee, perks } from "./data/content";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-linear-to-r from-lavender-deep via-peach-deep to-mint-deep"
        style={{ scaleX: progress }}
        aria-hidden
      />

      {/* soft paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-[90] opacity-[0.035] mix-blend-multiply"
        style={{ backgroundImage: NOISE }}
        aria-hidden
      />

      <Nav />

      <main>
        <Hero />

        {/* crossed pastel ribbons */}
        <div className="relative z-10 py-12 md:py-16">
          <div className="absolute inset-x-[-3%] top-1/2 -translate-y-1/2 rotate-[2.5deg]">
            <Marquee items={perks} tone="mint" reverse />
          </div>
          <div className="relative mx-[-3%] -rotate-2">
            <Marquee items={heroMarquee} tone="lavender" />
          </div>
        </div>

        <Ecosystem />

        <AgencyBuilder />

        <Partners />

        <Closing />
      </main>
    </div>
  );
}
