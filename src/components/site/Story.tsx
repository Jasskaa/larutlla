import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "./data";
import { Reveal, Seal } from "./primitives";

const facts = [
  { k: "1999", v: "Sello original" },
  { k: "100+", v: "Años de piano" },
  { k: "7/7", v: "Días abiertos" },
];

export function Story() {
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
                alt="Interior de La Rutlla con su piano centenario y una guitarra acústica"
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
            <p className="eyebrow">Nuestra historia</p>
            <h2 className="mt-5 text-4xl leading-[1.03] tracking-tight sm:text-5xl md:text-6xl">
              Un negocio centenario en el <span className="italic text-copper">corazón de Anglès</span>
            </h2>
            <div className="hairline mt-7 max-w-[140px]" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              La Rutlla lleva más de cien años sirviendo en la emblemática Plaça de la Rutlla. Aquí se
              desayuna temprano, se hace el vermut al sol y se cierra el día con una copa de vino y
              música.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Dentro, un interior decorado con encanto: un piano de más de cien años, una guitarra
              acústica colgada de la pared y las mesas de madera de siempre. Fuera, una terraza soleada
              en la plaza donde el pueblo se encuentra.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="font-display text-3xl md:text-4xl">{f.k}</dt>
                  <dd className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
