import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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

/** Staggered children reveal: wrap items in <StaggerItem>. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  as?: "div" | "ul" | "dl";
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag className={className} variants={staggerItem}>
      {children}
    </MotionTag>
  );
}

/** Subtle magnetic hover for buttons and links. */
export function Magnetic({
  children,
  className,
  strength = 14,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      className={className}
      onPointerMove={(e) => {
        // Only apply the magnetic offset for mouse-like pointers. On touch
        // screens pointerleave doesn't fire reliably after a tap, which can
        // leave the button visually offset with its spring "stuck".
        if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
        my.set(((e.clientY - r.top) / r.height - 0.5) * strength);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Decorative dotted ring, echoing the "Since 1999" seal language. */
export function DottedRing({
  className,
  duration = 60,
  reverse = false,
}: {
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </motion.svg>
  );
}

/** Small floating decorative dot/bean with an infinite drift. */
export function FloatDecor({
  className,
  size = 10,
  delay = 0,
  distance = 14,
}: {
  className?: string;
  size?: number;
  delay?: number;
  distance?: number;
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full border border-current opacity-40", className)}
      style={{ width: size, height: size }}
      animate={{ y: [0, -distance, 0], opacity: [0.25, 0.55, 0.25] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
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
      <h2 className="mt-4 text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
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
