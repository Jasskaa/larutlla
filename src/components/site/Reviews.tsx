import { AnimatePresence, motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { business, testimonials } from "./data";
import { Reveal, SectionHeading } from "./primitives";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals).replace(".", ",")),
    });
    return () => c.stop();
  }, [inView, value, decimals]);
  return <span ref={ref}>{display}</span>;
}

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="resenas" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow="Reseñas" title="Lo que dice la gente del pueblo" />

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <p className="font-display text-[clamp(4.5rem,16vw,10rem)] leading-none tracking-tight">
              <Counter value={business.rating} decimals={1} />
            </p>
            <span className="flex gap-1.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: i < 4 ? 1 : 0.35, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1, type: "spring", stiffness: 300 }}
                >
                  <Star className="h-5 w-5 fill-brass text-brass" />
                </motion.span>
              ))}
            </span>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <Counter value={business.reviews} /> reseñas en Google
            </p>
          </div>
        </Reveal>

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carrusel"
          aria-label="Testimonios de clientes"
        >
          <Quote className="mx-auto h-8 w-8 text-brass" aria-hidden="true" />
          <div className="relative mt-6 min-h-[230px] sm:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-2xl leading-snug italic sm:text-3xl md:text-4xl">
                  “{testimonials[index]!.quote}”
                </p>
                <footer className="mt-7 text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground">
                  {testimonials[index]!.author} · {testimonials[index]!.meta}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-brass hover:text-copper"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-copper" : "w-1.5 bg-border hover:bg-brass"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente testimonio"
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-brass hover:text-copper"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
