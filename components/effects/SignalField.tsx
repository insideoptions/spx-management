"use client";
import { useEffect, useRef } from "react";

/** Decorative signal ribbons: pointer displacement and scroll-driven depth. */
export default function SignalField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let width = 1, height = 1, frame = 0, last = 0, phase = 0;
    let visible = true, disposed = false, depth = 0;
    const pointer = { x: .72, y: .48, strength: 0 };
    const target = { x: .72, y: .48, strength: 0 };
    const accent = getComputedStyle(host).getPropertyValue("--accent").trim() || "#c8e9ac";
    function draw(time: number) {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      const reduced = preference.matches;
      if (reduced || time - last >= 32) {
        phase += reduced ? 0 : Math.min((time - last) / 1000, .05) * .3;
        last = time;
        const bounds = host!.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -bounds.top / height));
        depth += ((reduced ? 0 : progress) - depth) * .08;
        pointer.x += (target.x - pointer.x) * .075;
        pointer.y += (target.y - pointer.y) * .075;
        pointer.strength += ((reduced ? 0 : target.strength) - pointer.strength) * .075;
        ctx!.clearRect(0, 0, width, height);
        const lines = width < 760 ? 24 : 42;
        const steps = width < 760 ? 70 : 110;
        const point = (u: number, row: number) => {
          const band = row / (lines - 1);
          const x = u * width;
          const base = .57 + Math.sin(u * 5.4 + phase + depth * 1.7) * .14 + Math.sin(u * 9 - phase * .7 + band * 1.8) * .065;
          let y = (base + (band - .5) * (.14 + .26 * Math.pow(Math.sin(u * 3 + phase * .2), 2))) * height;
          const dx = u - pointer.x, dy = y / height - pointer.y;
          const influence = Math.exp(-(dx * dx * 18 + dy * dy * 12));
          y += influence * pointer.strength * (dy * 150 + Math.sin(band * 3.14) * -45);
          return [x, y - depth * 65];
        };
        const glow = ctx!.createRadialGradient(width * .72, height * .56, 0, width * .72, height * .56, width * .5);
        glow.addColorStop(0, "rgba(200,233,172,.075)"); glow.addColorStop(1, "rgba(200,233,172,0)");
        ctx!.fillStyle = glow; ctx!.fillRect(0, 0, width, height);
        for (let row = 0; row < lines; row++) {
          ctx!.beginPath();
          for (let step = 0; step <= steps; step++) {
            const [x, y] = point(step / steps, row);
            if (step === 0) ctx!.moveTo(x, y); else ctx!.lineTo(x, y);
          }
          ctx!.strokeStyle = accent;
          ctx!.globalAlpha = row % 7 === 0 ? .52 : .13 + row / lines * .13;
          ctx!.lineWidth = row % 7 === 0 ? 1.2 : .65;
          ctx!.stroke();
          if (row % 5 === 0) {
            const u = ((row * .137 + phase * .055) % .95) + .025;
            const [x, y] = point(u, row);
            ctx!.beginPath(); ctx!.arc(x, y, 2, 0, Math.PI * 2);
            ctx!.globalAlpha = .8; ctx!.fillStyle = accent; ctx!.fill();
          }
        }
        ctx!.globalAlpha = 1;
      }
      if (!preference.matches) frame = requestAnimationFrame(draw);
    }
    function start() { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); }
    function resize() {
      width = host!.clientWidth; height = host!.clientHeight;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas!.width = width * ratio; canvas!.height = height * ratio;
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0); start();
    }
    function move(event: PointerEvent) {
      if (preference.matches || event.pointerType === "touch") return;
      const bounds = host!.getBoundingClientRect();
      target.x = (event.clientX - bounds.left) / width;
      target.y = (event.clientY - bounds.top) / height; target.strength = 1;
    }
    function leave() { target.strength = 0; }
    function reset() { cancelAnimationFrame(frame); frame = 0; start(); }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; reset(); });
    const resizeObserver = new ResizeObserver(resize);
    observer.observe(host); resizeObserver.observe(host);
    host.addEventListener("pointermove", move); host.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", reset); preference.addEventListener("change", reset);
    resize();
    return () => {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
      host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", reset); preference.removeEventListener("change", reset);
    };
  }, []);
  return <canvas ref={ref} className="signal-field" aria-hidden="true" />;
}
