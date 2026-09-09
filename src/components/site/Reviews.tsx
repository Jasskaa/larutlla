import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { business } from "./data";
import { SectionHeading, Stagger, StaggerItem } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals).replace(".", ",")),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return <span ref={ref}>{display}</span>;
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-brass text-brass" style={{ opacity: i < n ? 1 : 0.3 }} />
      ))}
    </span>
  );
}

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="resenas" className="relative overflow-hidden bg-background py-20 md:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} intro={t.reviews.intro} />

        <div className="mt-12 flex flex-wrap items-end justify-center gap-x-12 gap-y-6 text-center">
          <div>
            <p className="font-display text-6xl leading-none md:text-7xl">
              <Counter value={business.rating} decimals={1} />
            </p>
            <div className="mt-3 flex justify-center">
              <Stars n={4} />
            </div>
            <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              {t.reviews.ratingLabel}
            </p>
          </div>
          <div>
            <p className="font-display text-6xl leading-none md:text-7xl">
              <Counter value={business.reviews} />
            </p>
            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
              {t.reviews.reviewsLabel}
            </p>
          </div>
        </div>

        {/* Mobile: swipeable cards / Desktop: grid */}
        <Stagger
          as="ul"
          gap={0.09}
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {t.reviews.items.map((r) => (
            <StaggerItem
              as="li"
              key={r.author}
              className="group relative w-[78vw] shrink-0 snap-center rounded-sm border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/50 md:w-auto"
            >
              <Quote className="h-5 w-5 text-brass/60" aria-hidden="true" />
              <p className="mt-4 font-display text-lg leading-snug">{r.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-espresso font-display text-base text-cream">
                  {r.author.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm">{r.author}</span>
                  <span className="mt-1 flex items-center gap-2">
                    <Stars />
                    <span className="text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {t.reviews.source}
                    </span>
                  </span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
