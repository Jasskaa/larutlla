import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, business } from "./data";
import { Wordmark } from "./primitives";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";

function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["ca", "es"];

  return (
    <div
      role="group"
      aria-label={t.header.langLabel}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-cream/25 p-0.5",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setLocale(opt)}
          aria-pressed={locale === opt}
          className={cn(
            "rounded-full px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] transition-colors duration-300",
            locale === opt ? "bg-brass text-espresso" : "text-cream/70 hover:text-cream",
          )}
        >
          {opt}
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

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const navPrimary = nav.filter((n) => n.primary);

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
        <a href="#inicio" className="min-w-0" aria-label={t.header.goHome}>
          <Wordmark compact={scrolled} />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label={t.header.mainNav}>
          {navPrimary.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-[0.68rem] uppercase tracking-[0.28em] text-cream/70 transition-colors hover:text-cream"
            >
              {t.nav[n.key]}
            </a>
          ))}
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-4 rounded-full border border-brass/60 px-6 py-2.5 text-[0.66rem] uppercase tracking-[0.26em] text-brass transition-all duration-300 hover:bg-brass hover:text-espresso"
          >
            {t.header.cta}
          </a>
          <LanguageToggle />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t.header.closeMenu : t.header.openMenu}
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
            aria-label={t.header.mobileNav}
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
                    {t.nav[n.key]}
                  </a>
                </motion.li>
              ))}
              <li className="flex items-center justify-between gap-4 pt-4">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-brass px-5 py-3 text-center text-[0.72rem] uppercase tracking-[0.22em] text-espresso"
                >
                  {t.header.cta}
                </a>
                <LanguageToggle />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
