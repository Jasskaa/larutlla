import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { business, images } from "./data";
import { DottedRing, FloatDecor, Magnetic, Seal } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

/** Slow, luxe crossfade between a few hero photos — cycles on its own. */
const heroBackdrops = [images.heroLatte, images.galTerrace, images.galCoffee];

function HeroBackdrop({ y, scale }: { y: MotionValue<string>; scale: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroBackdrops.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <motion.div style={{ y, scale }} className="absolute inset-0" aria-hidden="true">
      {heroBackdrops.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: reduceMotion ? (i === 0 ? 1 : 0) : active === i ? 1 : 0 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="on-dark grain relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <HeroBackdrop y={y} scale={scale} />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/75 to-espresso/60" />

      {/* decorative floating motifs */}
      <div className="pointer-events-none absolute inset-0 text-brass">
        <FloatDecor className="left-[8%] top-[22%]" size={12} delay={0.4} />
        <FloatDecor className="right-[14%] top-[34%]" size={7} delay={1.6} distance={20} />
        <FloatDecor className="left-[42%] top-[16%]" size={5} delay={2.4} distance={10} />
        <DottedRing className="-left-24 top-1/3 h-72 w-72 text-brass/25" duration={90} />
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-24"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="eyebrow"
            >
              {t.hero.eyebrow}
            </motion.p>

            <h1 className="mt-6 text-[clamp(3.75rem,15vw,11rem)] font-medium leading-[0.82] tracking-[-0.035em]">
              {t.hero.words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={i === 1 ? "block italic text-brass" : "block"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="mx-auto mt-8 max-w-md text-base leading-relaxed text-cream/75 lg:mx-0"
            >
              {t.hero.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9 }}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-6 lg:justify-start"
            >
              <Magnetic>
                <a
                  href="#carta"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-cream py-2 pl-6 pr-2 text-[0.68rem] uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:bg-brass sm:w-auto sm:gap-3 sm:pl-8 sm:text-[0.72rem] sm:tracking-[0.24em]"
                >
                  {t.hero.ctaMenu}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-espresso text-cream transition-transform duration-300 group-hover:rotate-45 sm:h-11 sm:w-11">
                    ↗
                  </span>
                </a>
              </Magnetic>
              <a
                href={business.phoneHref}
                className="group inline-flex items-center justify-center gap-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-brass sm:justify-start sm:gap-3 sm:text-[0.72rem] sm:tracking-[0.24em]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cream/30 transition-colors duration-300 group-hover:border-brass sm:h-10 sm:w-10">
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {business.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative hidden lg:block"
          >
            <DottedRing className="-inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] text-brass/50" duration={70} reverse />
            <Seal className="w-40 xl:w-52" />
          </motion.div>
        </div>

        <motion.a
          href="#nosotros"
          aria-label={t.hero.scrollAria}
          className="mx-auto mt-14 flex w-fit items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream/50 lg:mx-0"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block h-10 w-px bg-gradient-to-b from-brass to-transparent" />
          {t.hero.scroll}
        </motion.a>
      </motion.div>
    </section>
  );
}
