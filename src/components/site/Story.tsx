import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "./data";
import { Reveal, Seal } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

export function Story() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="nosotros" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div ref={ref} className="relative">
          <Reveal>
            <div className="relative overflow-hidden rounded-sm">
              <motion.img
                style={{ y }}
                src={images.interiorPiano}
                alt={t.story.imageAlt}
                width={1200}
                height={1400}
                loading="lazy"
                className="h-[420px] w-full scale-110 object-cover md:h-[620px]"
              />
            </div>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-8 -right-2 w-24 md:-right-8 md:w-32"
          >
            <Seal />
          </motion.div>
        </div>

        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">{t.story.eyebrow}</p>
            <h2 className="mt-5 text-4xl leading-[1.03] tracking-tight sm:text-5xl md:text-6xl">
              {t.story.titlePrefix} <span className="italic text-copper">{t.story.titleHighlight}</span>
            </h2>
            <div className="hairline mt-7 max-w-[140px]" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{t.story.p1}</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{t.story.p2}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
