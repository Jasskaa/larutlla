import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { business } from "./data";
import { Reveal, SectionHeading } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

export function Location() {
  const { t } = useLanguage();

  const rows = [
    { icon: MapPin, label: t.location.address, value: business.address },
    { icon: Clock, label: t.location.hours, value: t.location.hoursValue },
    { icon: Phone, label: t.location.phone, value: business.phone, href: business.phoneHref },
    {
      icon: Mail,
      label: t.location.email,
      value: business.email,
      href: `mailto:${business.email}`,
    },
  ];

  return (
    <section id="ubicacion" className="bg-background py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} intro={t.location.intro} />

        <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-14">
          <Reveal>
            <ul className="space-y-4 md:space-y-8">
              {rows.map((row) => (
                <li
                  key={row.label}
                  className="group flex min-w-0 gap-3.5 border-b border-border pb-4 md:gap-5 md:pb-6"
                >
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-copper transition-colors duration-500 group-hover:border-brass md:h-10 md:w-10">
                    <row.icon className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground md:text-[0.6rem] md:tracking-[0.26em]">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="link-underline mt-1 inline-block font-display text-lg md:mt-1.5 md:text-2xl"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-lg leading-snug md:mt-1.5 md:text-2xl">
                        {row.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[0.7rem] leading-relaxed text-muted-foreground md:mt-6 md:text-xs">
              {t.location.note}
            </p>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-espresso px-6 py-3.5 text-[0.66rem] uppercase tracking-[0.24em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper md:mt-8 md:px-8 md:py-4 md:text-[0.72rem]"
            >
              {t.location.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-[240px] overflow-hidden rounded-sm border border-border md:h-full md:min-h-[520px]">
              <iframe
                title={t.location.mapTitle}
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
