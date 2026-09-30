"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];
export default function ScrollAnimations() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = [];
    const stops = [];
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const reveal = (element, delay = 0, heading = false) => {
      const control = animate(element, {
        opacity: [0, 1],
        y: [mobile ? 16 : 28, 0],
        ...(heading ? { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"] } : {}),
      }, { duration: heading ? 0.95 : 0.8, delay, ease });
      controls.push(control);
      // Release inline transforms so CSS hover/focus states remain in control.
      control.then(() => {
        element.style.removeProperty("transform");
        element.style.removeProperty("opacity");
        element.style.removeProperty("clip-path");
      });
    };
    // Progressive enhancement: server HTML is readable even without JavaScript.
    // Do not replay the hero when following a deep link further down the page.
    const hero = document.querySelector(".hero");
    if (hero && hero.getBoundingClientRect().bottom > 0 && !window.location.hash) {
      [".hero-copy > .eyebrow", ".hero-copy h1", ".hero-copy > p:not(.eyebrow)", ".hero-copy > .button", ".quant-surface", ".hero-note"].forEach((selector, index) => {
        const element = hero.querySelector(selector);
        if (element) reveal(element, index * 0.12);
      });
    }
    // Animate chosen headings and composed visuals, never every paragraph or iframe.
    const groups = [
      ["main h2, .page-hero h1", true],
      ["main .principle, main .article, .founder-photo, .bio-image, .framework", false],
    ];
    groups.forEach(([selector, heading]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const index = Array.from(element.parentElement.children).indexOf(element);
        stops.push(inView(element, () => reveal(element, heading ? 0 : Math.min(index * 0.08, 0.16), heading), { amount: 0.15 }));
      });
    });
    return () => {
      stops.forEach((stop) => stop());
      controls.forEach((control) => control.complete());
    };
  }, [pathname, reducedMotion]);
  return null;
}
