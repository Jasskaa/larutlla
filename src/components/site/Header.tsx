import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "./data";
import { Magnetic, Seal, Wordmark } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/content";
import { cn } from "@/lib/utils";

function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["ca", "es"];
  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={cn(
        "relative inline-flex items-center rounded-full border border-cream/20 p-0.5 text-[0.62rem] uppercase tracking-[0.2em]",
        className,
      )}
    >
      {options.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "relative rounded-full px-3 py-1.5 transition-colors duration-300",
            locale === l ? "bg-brass text-espresso" : "text-cream/60 hover:text-cream",
          )}
        >
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const navPrimary = t.nav.filter((n) => "primary" in n && n.primary);

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
      {/* Mobile / tablet: logo left · name centered · menu right — nothing else */}
      <div className="mx-auto grid grid-cols-3 items-center px-5 lg:hidden">
        <a href="#inicio" aria-label={t.common.home} className="justify-self-start">
          <Seal spin={false} className="w-9" />
        </a>
        <a
          href="#inicio"
          aria-label={t.common.home}
          className="justify-self-center font-display text-lg tracking-tight text-cream"
        >
          La Rutlla Cafè
        </a>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t.common.closeMenu : t.common.openMenu}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center justify-self-end rounded-full border border-cream/25 text-cream"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-10 lg:grid">
        <a href="#inicio" className="min-w-0" aria-label={t.common.home}>
          <Wordmark compact={scrolled} />
        </a>

        <nav className="flex items-center gap-9" aria-label="Nav">
          {navPrimary.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-[0.68rem] uppercase tracking-[0.28em] text-cream/70 transition-colors hover:text-cream"
            >
              {n.label}
            </a>
          ))}
          <LangSwitch className="ml-2" />
          <Magnetic>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brass/60 px-6 py-2.5 text-[0.66rem] uppercase tracking-[0.26em] text-brass transition-all duration-300 hover:bg-brass hover:text-espresso"
            >
              {t.common.directions}
              <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full border border-current text-[0.6rem]">
                →
              </span>
            </a>
          </Magnetic>
        </nav>
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
            aria-label="Nav"
          >
            <div className="mx-auto flex max-w-7xl justify-end px-5 pt-4">
              <LangSwitch />
            </div>
            <ul className="mx-auto max-w-7xl px-5 py-4">
              {t.nav.map((n, i) => (
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
                  {t.common.directions}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
