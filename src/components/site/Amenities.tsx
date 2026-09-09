import { motion } from "framer-motion";
import { Sun, Wifi, Baby, Bike, Tv, Music, Wheat } from "lucide-react";
import { SectionHeading, Stagger, StaggerItem } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = { sun: Sun, wifi: Wifi, baby: Baby, bike: Bike, tv: Tv, music: Music, wheat: Wheat };

export function Amenities() {
  const { t } = useLanguage();

  return (
    <section className="on-dark grain relative bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.amenities.eyebrow} title={t.amenities.title} intro={t.amenities.intro} />

        <Stagger
          as="ul"
          gap={0.07}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-cream/10 bg-cream/10 md:grid-cols-4"
        >
          {t.amenities.items.map((a) => {
            const Icon = icons[a.icon as keyof typeof icons];
            return (
              <StaggerItem
                as="li"
                key={a.title}
                className="group relative bg-espresso p-6 transition-colors duration-500 hover:bg-espresso-soft md:p-8"
              >
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  className="inline-grid h-12 w-12 place-items-center rounded-full border border-brass/40 text-brass transition-colors duration-500 group-hover:border-brass"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </motion.span>
                <h3 className="mt-5 font-display text-xl text-cream">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{a.desc}</p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-brass transition-all duration-700 group-hover:w-full" />
              </StaggerItem>
            );
          })}
          <StaggerItem as="li" className="bg-espresso p-6 md:p-8">
            <p className="font-display text-xl italic text-brass">{t.amenities.extraTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/60">{t.amenities.extraDesc}</p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
