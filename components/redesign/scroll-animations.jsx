"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, scroll, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];
export default function ScrollAnimations() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controls = [];
    const stops = [];
    const restoredStyles = new Map();
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const reveal = (element, delay = 0, heading = false, variant = "rise") => {
      if (!restoredStyles.has(element)) restoredStyles.set(element, element.getAttribute("style"));
      const control = animate(element, {
        opacity: [0, 1],
        y: [mobile ? 16 : variant === "card" ? 48 : 28, 0],
        ...(variant === "card" ? { scale: [0.96, 1] } : {}),
        ...(variant === "slide" ? { x: [mobile ? 0 : -32, 0] } : {}),
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
      ["main .principle, main .article", false, "card"],
      [".founder-photo, .bio-image, .framework", false, "rise"],
      [".process-row", false, "slide"],
      [".press-strip > *, .section-intro > .eyebrow, .section-top .eyebrow, .founder-copy > .eyebrow, .bio-fact, .statement blockquote, .invitation > .button, .founder-copy > .button, .footer-top > *", false, "rise"],
    ];
    groups.forEach(([selector, heading, variant]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const index = Array.from(element.parentElement.children).indexOf(element);
        stops.push(inView(element, () => reveal(element, heading ? 0 : Math.min(index * 0.12, 0.24), heading, variant), { amount: 0.15 }));
      });
    });
    // Scrub only the image inside its clipped frame; captions and video stay stable.
    if (!mobile) {
      document.querySelectorAll(".founder-photo img, .bio-image img").forEach((image) => {
        restoredStyles.set(image, image.getAttribute("style"));
        const animation = animate(image, { y: [-14, 14], scale: [1.08, 1.08] }, { ease: "linear" });
        stops.push(scroll(animation, { target: image.parentElement, offset: ["start end", "end start"] }));
        stops.push(() => animation.cancel());
      });
    }
    // Borders draw across as each section enters, without moving its contents.
    document.querySelectorAll(".press-strip, .invitation, .process-row").forEach((section) => {
      restoredStyles.set(section, section.getAttribute("style"));
      stops.push(inView(section, () => {
        controls.push(animate(section, { "--rule-progress": [0, 1] }, { duration: 1.2, ease }));
      }, { amount: 0.2 }));
    });
    return () => {
      stops.forEach((stop) => stop());
      controls.forEach((control) => control.cancel());
      restoredStyles.forEach((style, element) => {
        if (style === null) element.removeAttribute("style");
        else element.setAttribute("style", style);
      });
    };
  }, [pathname, reducedMotion]);
  return null;
}
