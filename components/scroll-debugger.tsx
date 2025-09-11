"use client";

import { useEffect, useState } from "react";

export const ScrollDebugger = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle debugger with 'D' key
      if (e.key === 'd' || e.key === 'D') {
        setIsVisible(!isVisible);
        console.log(`Scroll debugger ${!isVisible ? 'enabled' : 'disabled'}`);
      }
      // Log current position with 'L' key
      if (e.key === 'l' || e.key === 'L') {
        console.log(`Current scroll position: ${window.scrollY}px`);
        console.log(`Window height: ${window.innerHeight}px`);
        console.log(`Document height: ${document.documentElement.scrollHeight}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    // Initial scroll position
    setScrollY(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg border border-white/20 backdrop-blur-sm">
      <div className="space-y-2 text-sm font-mono">
        <div className="font-semibold text-green-400">Scroll Debugger</div>
        <div>Scroll Y: <span className="text-blue-300">{scrollY}px</span></div>
        <div>Window H: <span className="text-yellow-300">{typeof window !== 'undefined' ? window.innerHeight : 0}px</span></div>
        <div className="text-xs text-gray-400 mt-2">
          Press 'D' to toggle<br/>
          Press 'L' to log position
        </div>
      </div>
    </div>
  );
};
