import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "./data";
import { DottedRing, FloatDecor, Reveal, Seal, Stagger, StaggerItem } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["9%", "-9%"]);

  return (
    <section id="nosotros" className="relative overflow-hidden bg-background py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 text-copper">
        <FloatDecor className="right-[6%] top-[12%]" size={10} delay={0.8} />
        <FloatDecor className="left-[4%] bottom-[18%]" size={6} delay={2} distance={18} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-20 px-5 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
        {/* Collage */}
        <div ref={ref} className="relative pb-20 pr-12 sm:pb-24 sm:pr-24">
          <Reveal>
            <motion.div
              style={{ y: yBack }}
              className="relative w-[82%] overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(21,9,7,0.5)]"
            >
              <img
                src={images.galCoffee}
                alt={t.story.imgInterior}
                width={1200}
                height={1400}
                loading="lazy"
                className="h-[340px] w-full object-cover md:h-[520px]"
              />
            </motion.div>
          </Reveal>

          <motion.div
            style={{ y: yFront }}
            initial={{ opacity: 0, y: 60, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 right-0 w-[56%] overflow-hidden rounded-sm border-4 border-background shadow-[0_30px_60px_-25px_rgba(21,9,7,0.55)]"
          >
            <img
              src={images.galTerrace}
              alt={t.story.imgTerrace}
              width={900}
              height={900}
              loading="lazy"
              className="h-[190px] w-full object-cover md:h-[280px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -top-4 right-2 w-20 sm:right-8 sm:w-28"
          >
            <DottedRing className="-inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-copper/50" duration={80} />
            <Seal />
          </motion.div>
        </div>

        <div className="min-w-0">
          <Reveal>
            <p className="eyebrow">{t.story.eyebrow}</p>
            <h2 className="mt-5 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t.story.titleA} <span className="italic text-copper">{t.story.titleB}</span>
            </h2>
            <div className="hairline mt-7 max-w-[140px]" />
          </Reveal>

          <Stagger className="mt-8 space-y-5" gap={0.12}>
            {t.story.paragraphs.map((p) => (
              <StaggerItem key={p.slice(0, 24)}>
                <p className="text-base leading-relaxed text-muted-foreground">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
