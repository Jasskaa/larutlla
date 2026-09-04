import { motion, useScroll, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { business, images } from "./data";
import { Seal } from "./primitives";

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals).replace(".", ",")),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}</span>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
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
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={images.heroLatte}
          alt="Capuchino con latte art servido en La Rutlla Cafè"
          width={1600}
          height={1100}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/70 to-espresso/60" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-24"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="eyebrow"
            >
              Plaça de la Rutlla · Anglès · Girona
            </motion.p>

            <h1 className="mt-6 text-[clamp(3rem,11vw,8.5rem)] leading-[0.86] tracking-[-0.02em]">
              {["La Rutlla", "Cafè"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
              className="mt-8 max-w-md text-base leading-relaxed text-cream/75"
            >
              Un siglo de conversaciones, cafés bien tirados y música en la plaza. Terraza al sol,
              piano centenario dentro, y la puerta abierta cada día del año.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#carta"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cream px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-espresso transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brass"
              >
                Ver la carta
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/30 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                Cómo llegar
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <p className="flex items-baseline gap-2">
                <span className="font-display text-4xl text-cream">
                  <AnimatedNumber value={business.rating} decimals={1} />
                </span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-brass text-brass"
                      style={{ opacity: i < 4 ? 1 : 0.35 }}
                    />
                  ))}
                </span>
                <span className="sr-only">
                  Valoración {business.rating} sobre 5 en Google con {business.reviews} reseñas
                </span>
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-cream/60">
                <AnimatedNumber value={business.reviews} /> reseñas en Google
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden lg:block"
          >
            <Seal className="w-40 xl:w-52" />
          </motion.div>
        </div>

        <motion.a
          href="#nosotros"
          aria-label="Bajar a la siguiente sección"
          className="mt-14 flex w-fit items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block h-10 w-px bg-gradient-to-b from-brass to-transparent" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  );
}
