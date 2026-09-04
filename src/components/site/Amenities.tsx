import { motion } from "framer-motion";
import { Sun, Wifi, Baby, Bike, Tv, Music, Wheat } from "lucide-react";
import { amenities } from "./data";
import { Reveal, SectionHeading } from "./primitives";

const icons = { sun: Sun, wifi: Wifi, baby: Baby, bike: Bike, tv: Tv, music: Music, wheat: Wheat };

export function Amenities() {
  return (
    <section className="on-dark grain relative bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          eyebrow="En la casa"
          title="Lo que encontrarás"
          intro="Detalles pequeños que hacen que la gente vuelva cada día."
        />

        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-cream/10 bg-cream/10 md:grid-cols-4">
          {amenities.map((a, i) => {
            const Icon = icons[a.icon as keyof typeof icons];
            return (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-espresso p-6 transition-colors duration-500 hover:bg-espresso-soft md:p-8"
              >
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  className="inline-grid h-12 w-12 place-items-center rounded-full border border-brass/40 text-brass transition-colors duration-500 group-hover:border-brass"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </motion.span>
                <h3 className="mt-5 font-display text-xl text-cream">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{a.desc}</p>
              </motion.li>
            );
          })}
          <Reveal className="bg-espresso p-6 md:p-8">
            <p className="font-display text-xl italic text-brass">Comer allí o para llevar</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/60">
              Como te vaya mejor, cada día del año.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
