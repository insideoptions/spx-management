"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, useReducedMotion } from "motion/react";

export default function ScrollAnimations() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const controls = [];
    const targets = document.querySelectorAll("main section > h1, main section > h2, main section > p, main section > div:not(.article-grid), main .article, main .principle");
    // Content remains fully visible in server HTML and if JavaScript is unavailable.
    const stops = Array.from(targets).map((element, index) => inView(element, () => {
      const control = animate(element, { opacity: [0.35, 1], y: [22, 0] }, {
        duration: 0.65, delay: Math.min(index % 3 * 0.07, 0.14), ease: [0.22, 1, 0.36, 1],
      });
      controls.push(control);
    }, { amount: 0.08 }));
    return () => {
      stops.forEach((stop) => stop());
      controls.forEach((control) => control.complete());
    };
  }, [pathname, reducedMotion]);
  return null;
}
