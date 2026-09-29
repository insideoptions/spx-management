"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// A conceptual Gaussian field, not a live market feed or investment performance.
function fieldPath(row, phase, cross = false) {
  const points = [];
  for (let step = 0; step <= 56; step++) {
    const a = -3 + (step * 6) / 56;
    const b = -3 + (row * 6) / 26;
    const x = cross ? b : a;
    const y = cross ? a : b;
    const shift = Math.sin(phase) * 0.28;
    const z = Math.exp(-((x - shift) ** 2 / 2.4 + y ** 2 / 3.1)) * 165;
    const sx = 300 + x * 57 + y * 29;
    const sy = 275 + y * 27 - x * 13 - z;
    points.push(`${step ? "L" : "M"}${sx.toFixed(2)},${sy.toFixed(2)}`);
  }
  return points.join(" ");
}
export default function QuantSurface() {
  const ref = useRef(null);
  const visible = useInView(ref, { amount: 0.15 });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!visible || reduced || paused) return;
    const timer = setInterval(() => {
      if (!document.hidden) setPhase((value) => value + 0.065);
    }, 90);
    return () => clearInterval(timer);
  }, [visible, reduced, paused]);
  return (
    <div className="quant-surface" ref={ref}>
      <div className="quant-top">
        <span>
          <i /> QUANTITATIVE PERSPECTIVE
        </span>
        <span>FIG. 001</span>
      </div>
      <motion.svg
        viewBox="0 0 600 420"
        role="img"
        aria-label="Animated conceptual probability surface, shown as a three-dimensional green wireframe"
        initial={false}
        animate={{ y: reduced || paused ? 0 : [0, -6, 0] }}
        transition={{
          duration: 9,
          repeat: reduced || paused ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="surface-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b5eeb0" />
            <stop offset="55%" stopColor="#6aab7d" />
            <stop offset="100%" stopColor="#315d47" />
          </linearGradient>
          <radialGradient id="surface-glow">
            <stop stopColor="#92d795" stopOpacity=".15" />
            <stop offset="1" stopColor="#92d795" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="300"
          cy="235"
          rx="270"
          ry="175"
          fill="url(#surface-glow)"
        />
        <g fill="none" stroke="#8cb39b" strokeOpacity=".12" strokeWidth=".6">
          {Array.from({ length: 13 }, (_, i) => (
            <path
              key={i}
              d={`M${70 + i * 28} ${355 - i * 7}l160 -155 M${70 + i * 28} ${355 - i * 7}l-55 -118`}
            />
          ))}
        </g>
        <g fill="none" stroke="url(#surface-line)" strokeWidth=".85">
          {Array.from({ length: 27 }, (_, i) => (
            <path
              key={`row${i}`}
              d={fieldPath(i, phase)}
              opacity={0.25 + i / 42}
            />
          ))}
          {Array.from({ length: 27 }, (_, i) => (
            <path
              key={`cross${i}`}
              d={fieldPath(i, phase, true)}
              opacity=".37"
            />
          ))}
        </g>
        <path
          d={fieldPath(13, phase)}
          stroke="#caf4ba"
          strokeWidth="1.7"
          fill="none"
        />
        <g
          fill="#80978b"
          fontFamily="monospace"
          fontSize="8"
          letterSpacing="1.5"
        >
          <text x="72" y="395">
            DISTRIBUTION
          </text>
          <text x="444" y="350">
            VOLATILITY
          </text>
          <text x="42" y="130">
            ρ
          </text>
        </g>
      </motion.svg>
      <div className="quant-axis">
        <span>OBSERVE</span>
        <span className="axis-line" />
        <span>MODEL</span>
        <span className="axis-line" />
        <span>ADAPT</span>
      </div>
      <div className="quant-bottom">
        <span>CONCEPTUAL VISUALIZATION · NOT MARKET DATA</span>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          disabled={!!reduced}
          aria-label={paused ? "Play visualization" : "Pause visualization"}
        >
          {reduced ? "STATIC" : paused ? "PLAY ▷" : "PAUSE Ⅱ"}
        </button>
      </div>
    </div>
  );
}
