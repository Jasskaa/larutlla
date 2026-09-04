import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "./data";
import { SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";

export function Gallery() {
  const { t } = useLanguage();
  const items = t.gallery.items.map((meta, i) => ({ ...meta, ...gallery[i]! }));
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" className="on-dark grain bg-espresso py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />

        {/* Mobile: carrusel horizontal */}
        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((g, i) => (
            <button
              type="button"
              key={"m" + g.tag + i}
              onClick={() => setOpen(i)}
              aria-label={t.gallery.enlarge(g.alt)}
              className="group relative h-52 w-[72vw] shrink-0 snap-center overflow-hidden rounded-sm bg-espresso-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent opacity-70" />
              <span className="absolute bottom-3 left-3 text-[0.6rem] uppercase tracking-[0.24em] text-cream">
                {g.tag}
              </span>
            </button>
          ))}
        </div>
        <p className="text-center text-[0.6rem] uppercase tracking-[0.22em] text-cream/45 md:hidden">
          {t.gallery.swipeHint}
        </p>

        {/* Desktop: grid */}
        <div className="mt-16 hidden auto-rows-[190px] grid-cols-2 gap-3 md:grid md:auto-rows-[230px] md:grid-cols-4 md:gap-4">
          {items.map((g, i) => (
            <motion.button
              type="button"
              key={g.tag + i}
              onClick={() => setOpen(i)}
              aria-label={t.gallery.enlarge(g.alt)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative block overflow-hidden rounded-sm bg-espresso-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brass",
                g.span === "tall" && "row-span-2",
                g.span === "wide" && "col-span-2",
              )}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-[0.62rem] uppercase tracking-[0.24em] text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.tag}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={items[open]!.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-espresso/95 p-5 backdrop-blur-md"
          >
            <button
              type="button"
              aria-label={t.gallery.closeImage}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream"
              onClick={() => setOpen(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={items[open]!.src}
                alt={items[open]!.alt}
                className="max-h-[75vh] w-full rounded-sm object-contain"
              />
              <figcaption className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.24em] text-brass">
                {items[open]!.tag}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
