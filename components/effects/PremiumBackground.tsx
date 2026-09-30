"use client";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  position?: "global" | "hero" | "section" | "footer";
  intensity?: "subtle" | "standard";
};

function ScrollDepth({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const depth = useTransform(scrollY, (y) => Math.min(48, Math.max(0, y * 0.055)));
  return <motion.div className="ambient-depth" style={{ y: depth }}>{children}</motion.div>;
}

// All lighting inherits the site's existing palette. No per-frame React updates.
export default function PremiumBackground({ position = "section", intensity = "subtle" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const updateDevice = () => setDesktop(media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateDevice();
    updateVisibility();
    media.addEventListener("change", updateDevice);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateDevice);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  const lights = <><div className="ambient-light ambient-light--a" /><div className="ambient-light ambient-light--b" /><div className="ambient-light ambient-light--c" /></>;
  return (
    <div ref={ref} aria-hidden="true" className={`premium-background premium-background--${position} premium-background--${intensity}`} data-running={visible && pageVisible && !reduced}>
      {desktop && !reduced && position === "hero" ? <ScrollDepth>{lights}</ScrollDepth> : <div className="ambient-depth">{lights}</div>}
      <div className="ambient-grid" />
      <div className="ambient-grain" />
      <div className="ambient-vignette" />
    </div>
  );
}
