import { Instagram as IgIcon, Phone, Mail } from "lucide-react";
import { business } from "./data";
import { Reveal, Seal, Wordmark } from "./primitives";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="on-dark grain bg-espresso pb-6 pt-14 md:pb-10 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <Wordmark />
            <p className="mt-4 max-w-sm text-[0.8rem] leading-relaxed text-cream/60 md:mt-6 md:text-sm">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 md:mt-7 md:gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={t.footer.instagramAria}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 md:h-11 md:w-11 text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                <IgIcon className="h-4 w-4" />
              </a>
              <a
                href={business.phoneHref}
                aria-label={`${t.common.call} ${business.phone}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 md:h-11 md:w-11 text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${business.email}`}
                aria-label={`${t.common.writeTo} ${business.email}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 md:h-11 md:w-11 text-cream transition-colors duration-300 hover:border-brass hover:text-brass"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label={t.footer.navAria} className="min-w-0">
            <p className="eyebrow hidden md:block">{t.footer.navTitle}</p>
            <ul className="mt-3 hidden grid-cols-2 gap-x-6 gap-y-2 md:mt-5 md:grid md:gap-y-3">
              {t.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-underline text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="eyebrow md:mt-9">{t.footer.hoursTitle}</p>
            <p className="mt-2 font-display text-xl text-cream md:mt-4 md:text-2xl">
              {t.footer.hoursMain}
            </p>
            <p className="text-[0.78rem] text-cream/60 md:text-sm">{t.footer.hoursSub}</p>
            <address className="mt-3 text-[0.78rem] not-italic leading-relaxed text-cream/60 md:mt-5 md:text-sm">
              {business.address}
              <br />
              <a href={business.phoneHref} className="link-underline text-cream/80">
                {business.phone}
              </a>
            </address>
          </nav>

          <div className="hidden md:block md:justify-self-end">
            <Seal className="w-28 md:w-36" />
          </div>
        </Reveal>

        <div className="hairline mt-8 md:mt-16" />
        <div className="flex flex-col gap-2 pt-4 md:gap-3 md:pt-6 text-[0.62rem] uppercase tracking-[0.22em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} La Rutlla Cafè {t.footer.rights}
          </p>
          <p>{t.footer.service}</p>
        </div>
      </div>
    </footer>
  );
}
