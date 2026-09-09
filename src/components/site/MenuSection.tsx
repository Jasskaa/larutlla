import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Star, X } from "lucide-react";
import { Magnetic, Reveal, SectionHeading } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Content } from "@/i18n/content";
import { cn } from "@/lib/utils";

type Category = Content["menu"]["categories"][number];
type Item = Category["items"][number];

function MenuItems({ items, featured }: { items: readonly Item[]; featured: string }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group relative bg-card p-5 transition-colors duration-500 hover:bg-secondary sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl leading-tight sm:text-2xl">{item.name}</h3>
            {"star" in item && item.star && (
              <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-full border border-brass/60 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-copper">
                <Star className="h-2.5 w-2.5 fill-current" aria-hidden="true" />
                {featured}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          <span className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-500 group-hover:w-full" />
        </motion.li>
      ))}
    </ul>
  );
}

function MobileMenuSheet({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const categories = t.menu.categories;
  const [open, setOpen] = useState<string>(categories[0]!.id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={t.menu.sheetAria}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] bg-espresso/60 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-x-0 bottom-0 top-6 flex flex-col overflow-hidden rounded-t-3xl bg-background"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <div className="min-w-0">
            <p className="eyebrow">{t.menu.eyebrow}</p>
            <p className="truncate font-display text-2xl">La Rutlla Cafè</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.close}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-10 pt-2">
          {categories.map((cat) => {
            const isOpen = open === cat.id;
            return (
              <div key={cat.id} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-display text-2xl">{cat.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-copper transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 font-display text-base italic text-copper">{cat.note}</p>
                      <div className="pb-5">
                        <MenuItems items={cat.items} featured={t.menu.featured} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <p className="mt-6 text-center text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            {t.menu.footnote}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MenuSection() {
  const { t } = useLanguage();
  const categories = t.menu.categories;
  const [active, setActive] = useState(categories[0]!.id);
  const [sheet, setSheet] = useState(false);
  const current = categories.find((m) => m.id === active) ?? categories[0]!;

  return (
    <section id="carta" className="relative bg-background py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} intro={t.menu.intro} />

        {/* Mobile: CTA + bottom sheet */}
        <div className="mt-10 lg:hidden">
          <motion.button
            type="button"
            onClick={() => setSheet(true)}
            whileTap={{ scale: 0.97 }}
            className="group flex w-full items-center justify-between gap-4 rounded-full bg-espresso py-2 pl-6 pr-2 text-cream sm:pl-7"
          >
            <span className="text-[0.66rem] uppercase tracking-[0.2em] sm:text-[0.72rem] sm:tracking-[0.26em]">
              {t.menu.mobileCta}
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brass text-espresso sm:h-11 sm:w-11">
              →
            </span>
          </motion.button>
          <p className="mt-4 text-center text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            {t.menu.mobileHint(categories.length)}
          </p>
        </div>

        <AnimatePresence>{sheet && <MobileMenuSheet onClose={() => setSheet(false)} />}</AnimatePresence>

        {/* Desktop: chip filters + panel */}
        <div className="hidden lg:block">
          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label={t.menu.tablist}
              className="mt-14 flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <Magnetic key={cat.id} strength={6}>
                  <button
                    role="tab"
                    aria-selected={active === cat.id}
                    aria-controls={`panel-${cat.id}`}
                    id={`tab-${cat.id}`}
                    onClick={() => setActive(cat.id)}
                    className={cn(
                      "relative rounded-full border px-6 py-3 text-[0.68rem] uppercase tracking-[0.2em] transition-colors duration-300",
                      active === cat.id
                        ? "border-transparent text-cream"
                        : "border-border text-muted-foreground hover:border-brass/60 hover:text-foreground",
                    )}
                  >
                    {active === cat.id && (
                      <motion.span
                        layoutId="menu-pill"
                        className="absolute inset-0 rounded-full bg-espresso"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{cat.label}</span>
                  </button>
                </Magnetic>
              ))}
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + t.localeLabel}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <p className="text-center font-display text-xl italic text-copper">{current.note}</p>
              <div className="mt-10">
                <MenuItems items={current.items} featured={t.menu.featured} />
              </div>
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.menu.footnote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
