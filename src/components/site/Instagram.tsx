import { motion } from "framer-motion";
import { Instagram as IgIcon } from "lucide-react";
import { business, gallery } from "./data";
import { Magnetic, Reveal } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

export function Instagram() {
  const { t } = useLanguage();
  const feed = gallery.slice(0, 6).map((g, i) => ({ ...g, ...t.gallery.items[i]! }));

  return (
    <section className="on-dark grain bg-espresso-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Reveal className="min-w-0">
            <p className="eyebrow">{t.instagram.eyebrow}</p>
            <h2 className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">@cafeterialarutlla</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/65">{t.instagram.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic>
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-brass/70 px-6 py-3 text-[0.64rem] uppercase tracking-[0.18em] text-brass transition-all duration-300 hover:bg-brass hover:text-espresso sm:gap-3 sm:px-7 sm:py-4 sm:text-[0.7rem] sm:tracking-[0.22em]"
              >
                <IgIcon className="h-4 w-4" aria-hidden="true" />
                {t.instagram.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {feed.map((g, i) => (
            <motion.a
              key={i}
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={t.instagram.viewOn(g.tag)}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <span className="absolute inset-0 grid place-items-center bg-espresso/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <IgIcon className="h-5 w-5 text-cream" aria-hidden="true" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
