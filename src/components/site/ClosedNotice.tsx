import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarX, X } from "lucide-react";
import { business } from "./data";
import { useLanguage } from "@/i18n/LanguageContext";

/** Shows a dismissible badge only when the visitor's local day is Tuesday. */
export function ClosedNotice() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (new Date().getDay() === 2) setShow(true);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          role="status"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="on-dark fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-brass/40 bg-espresso/95 px-4 py-3.5 shadow-[0_20px_50px_-20px_rgba(21,9,7,0.8)] backdrop-blur-xl sm:left-auto sm:right-6 sm:mx-0"
        >
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-brass/50 text-brass">
            <CalendarX className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg leading-tight text-cream">{t.closedBanner.title}</p>
            <p className="mt-1 text-[0.78rem] leading-relaxed text-cream/65">{t.closedBanner.text}</p>
            <a
              href={business.phoneHref}
              className="mt-2 inline-block text-[0.68rem] uppercase tracking-[0.2em] text-brass"
            >
              {business.phone}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setShow(false)}
            aria-label={t.closedBanner.dismiss}
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-brass hover:text-brass"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
