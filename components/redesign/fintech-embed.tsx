"use client";
import { useEffect, useState } from "react";
const source = "https://cms.fintech.tv/understanding-market-efficiency-a-deep-dive-into-quantitative-trading-strategies/?embed=1";

export default function FintechEmbed() {
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    if (!attempt || loaded) return;
    const timer = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(timer);
  }, [attempt, loaded]);
  function load() {
    setLoaded(false);
    setSlow(false);
    setAttempt((value) => value + 1);
  }
  return <div className="interview-player">
    <div className="interview-frame">
      {attempt > 0 && <iframe key={attempt} scrolling="no" src={source} title="David Chau on FinTech TV: Understanding Market Efficiency" loading="eager" onLoad={() => setLoaded(true)} allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowFullScreen />}
      {!loaded && <div className="interview-poster">
        {!attempt ? <button type="button" onClick={load} className="interview-start"><span aria-hidden="true">▷</span>Watch interview<small>DAVID CHAU · FINTECH TV</small></button> : <div className="interview-loading" role="status"><p>{slow ? "The player is taking longer to load." : "Loading the interview…"}</p>{slow && <button type="button" className="text-link" onClick={load}>Retry player ↗</button>}</div>}
      </div>}
    </div>
    <div className="interview-caption"><p className="fineprint">FinTech TV · September 2, 2025 · 4:30</p>{attempt > 0 && <button type="button" onClick={load}>Reload player</button>}</div>
  </div>;
}
