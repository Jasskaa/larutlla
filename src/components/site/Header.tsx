import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, navPrimary, business } from "./data";
import { Wordmark } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "on-dark fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500",
        scrolled
          ? "border-b border-border bg-espresso/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5",
      )}
      style={{ backgroundColor: scrolled ? undefined : "transparent" }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-10">
        <a href="#inicio" className="min-w-0" aria-label="La Rutlla Cafè, ir al inicio">
          <Wordmark compact={scrolled} />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegación principal">
          {navPrimary.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-[0.68rem] uppercase tracking-[0.28em] text-cream/70 transition-colors hover:text-cream"
            >
              {n.label}
            </a>
          ))}
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 rounded-full border border-brass/60 px-6 py-2.5 text-[0.66rem] uppercase tracking-[0.26em] text-brass transition-all duration-300 hover:bg-brass hover:text-espresso"
          >
            Cómo llegar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/25 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-espresso/95 backdrop-blur-xl lg:hidden"
            aria-label="Navegación móvil"
          >
            <ul className="mx-auto max-w-7xl px-5 py-4">
              {nav.map((n, i) => (
                <motion.li
                  key={n.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-cream/10 last:border-0"
                >
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 font-display text-2xl text-cream"
                  >
                    {n.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-brass px-5 py-3 text-center text-[0.72rem] uppercase tracking-[0.22em] text-espresso"
                >
                  Cómo llegar
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
