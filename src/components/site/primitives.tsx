import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      <div className={cn("hairline mt-6", align === "center" ? "mx-auto max-w-[120px]" : "max-w-[120px]")} />
      {intro ? <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p> : null}
    </Reveal>
  );
}

export function Seal({ className, spin = true }: { className?: string; spin?: boolean }) {
  return (
    <motion.div
      className={cn("relative aspect-square select-none", className)}
      animate={spin ? { rotate: 360 } : {}}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path id="sealArc" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="var(--espresso)" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="var(--cream)" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="var(--brass)" strokeWidth="0.75" />
        <text fill="var(--cream)" fontSize="13.5" letterSpacing="4.4" fontFamily="var(--font-sans)">
          <textPath href="#sealArc" startOffset="2%">
            CAFETERIA LA RUTLLA · SINCE 1999 · ORIGINAL ·
          </textPath>
        </text>
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill="var(--cream)"
          fontFamily="var(--font-display)"
          fontStyle="italic"
          fontSize="30"
        >
          La Rutlla
        </text>
        <line x1="62" y1="106" x2="138" y2="106" stroke="var(--brass)" strokeWidth="0.75" />
        <text
          x="100"
          y="126"
          textAnchor="middle"
          fill="var(--brass)"
          fontFamily="var(--font-sans)"
          fontSize="11"
          letterSpacing="5"
        >
          ANGLÈS
        </text>
      </svg>
    </motion.div>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-current/30">
        <span className="font-display text-lg italic leading-none">R</span>
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-xl tracking-tight sm:text-2xl">La Rutlla Cafè</span>
        {!compact && (
          <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.3em] opacity-70">
            Anglès · Since 1999
          </span>
        )}
      </span>
    </span>
  );
}
