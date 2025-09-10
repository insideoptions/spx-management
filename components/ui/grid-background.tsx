"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const GridBackground = ({ 
  gridSize = 40,
  dotSize = 2,
  dotColor = 'rgba(255, 255, 255, 0.3)',
  backgroundColor = '#000000',
  animated = true 
}) => {
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Always show grid - use system preference as fallback but don't wait for theme resolution
  const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = mounted ? resolvedTheme === 'dark' : systemPrefersDark;
  
  // Theme-aware dot colors with mobile enhancement - always visible
  const themeDotColor = isDarkMode 
    ? `rgba(255, 255, 255, ${isMobile ? 0.4 : 0.25})` // Enhanced for mobile
    : `rgba(0, 0, 0, ${isMobile ? 0.4 : 0.25})`; // Enhanced for mobile

  return (
    <div className="absolute inset-0 min-h-screen overflow-hidden" style={{ backgroundColor }}>
      {/* Animated Grid Pattern - Always visible */}
      <div 
        className={`absolute inset-0 ${isMobile ? 'opacity-80' : 'opacity-60'} ${animated ? 'animate-pulse' : ''}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, ${themeDotColor} ${dotSize}px, transparent ${dotSize}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: '0 0, 20px 20px'
        }}
      />
      
      {/* Secondary Grid Layer for Depth */}
      <div 
        className={`absolute inset-0 ${isMobile ? 'opacity-30' : 'opacity-20'}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, ${themeDotColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
          backgroundPosition: `${gridSize}px ${gridSize}px`
        }}
      />

      {/* Gradient Overlay for Visual Interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      {/* Animated Glow Effect */}
      {animated && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}
    </div>
  );
};

export default GridBackground;
