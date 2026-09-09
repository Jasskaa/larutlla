import { useEffect, useState } from "react";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { business } from "./data";
import { Magnetic, Reveal, SectionHeading, Stagger, StaggerItem } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

function useTodayIndex() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    // 0 = Monday … 6 = Sunday
    setToday((new Date().getDay() + 6) % 7);
  }, []);
  return today;
}

export function Location() {
  const { t } = useLanguage();
  const today = useTodayIndex();

  const rows = [
    { icon: MapPin, label: t.location.address, value: business.address },
    { icon: Clock, label: t.location.hours, value: t.hoursShort },
    { icon: Phone, label: t.location.phone, value: business.phone, href: business.phoneHref },
    { icon: Mail, label: t.location.email, value: business.email, href: `mailto:${business.email}` },
  ];

  return (
    <section id="ubicacion" className="bg-background py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} intro={t.location.intro} />

        {/* Prominent call / directions CTAs, high in the section */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-10">
          <Magnetic>
            <a
              href={business.phoneHref}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-espresso py-2.5 pl-6 pr-2 text-[0.66rem] uppercase tracking-[0.2em] text-cream transition-colors duration-300 hover:bg-copper sm:w-auto sm:gap-3 sm:py-2 sm:pl-7 sm:pr-2 sm:text-[0.7rem]"
            >
              {t.visit.call}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream/15 text-cream transition-transform duration-300 group-hover:rotate-12 sm:h-9 sm:w-9">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-espresso/25 py-2.5 pl-6 pr-2 text-[0.66rem] uppercase tracking-[0.2em] text-espresso transition-colors duration-300 hover:border-copper hover:text-copper sm:w-auto sm:gap-3 sm:py-2 sm:pl-7 sm:pr-2 sm:text-[0.7rem]"
            >
              {t.location.cta}
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-0.5 sm:h-9 sm:w-9">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-14">
          <Reveal>
            <Stagger as="ul" gap={0.07} className="space-y-4 md:space-y-8">
              {rows.map((row) => (
                <StaggerItem
                  as="li"
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
                </StaggerItem>
              ))}
            </Stagger>

            {/* Weekly schedule */}
            <div className="mt-6 rounded-sm border border-border bg-card p-4 md:mt-8 md:p-6">
              <p className="text-[0.55rem] uppercase tracking-[0.24em] text-muted-foreground md:text-[0.6rem]">
                {t.location.weekTitle}
              </p>
              <ul className="mt-3 divide-y divide-border">
                {t.location.days.map((day, i) => {
                  const slot = business.week[i];
                  const isToday = today === i;
                  return (
                    <li
                      key={day}
                      className={cn(
                        "flex items-center justify-between gap-3 py-2 text-[0.8rem] md:text-sm",
                        !slot && "text-muted-foreground/60",
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <span className={cn("truncate", isToday && "text-copper")}>{day}</span>
                        {isToday && (
                          <span className="shrink-0 rounded-full border border-brass/60 px-2 py-0.5 text-[0.5rem] uppercase tracking-[0.18em] text-copper">
                            {t.location.today}
                          </span>
                        )}
                      </span>
                      <span className={cn("shrink-0 tabular-nums", !slot && "italic")}>
                        {slot ? `${slot.open} – ${slot.close}` : t.location.closed}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-[0.68rem] leading-relaxed text-muted-foreground md:text-xs">
                {t.location.note}
              </p>
            </div>
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
