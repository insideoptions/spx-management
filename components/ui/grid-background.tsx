"use client";

import React, { useEffect, useState } from 'react';

const GridBackground = ({ 
  gridSize = 40,
  dotSize = 2,
  dotColor = 'rgba(255, 255, 255, 0.3)',
  backgroundColor = '#000000',
  animated = true 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile optimizations - keep grid but reduce effects
  const mobileGridSize = isMobile ? gridSize * 1.2 : gridSize;
  const mobileOpacity = isMobile ? 0.4 : 0.6;
  const showSecondaryGrid = true; // Keep on mobile but lighter
  const showGlowEffects = !isMobile && animated;

  return (
    <div className="absolute inset-0 min-h-screen overflow-hidden" style={{ backgroundColor }}>
      {/* Primary Grid Pattern */}
      <div 
        className={`absolute inset-0 ${animated && !isMobile ? 'animate-pulse' : ''}`}
        style={{
          opacity: mobileOpacity,
          backgroundImage: `
            radial-gradient(circle at center, ${dotColor} ${dotSize}px, transparent ${dotSize}px)
          `,
          backgroundSize: `${mobileGridSize}px ${mobileGridSize}px`,
          backgroundPosition: '0 0, 20px 20px'
        }}
      />
      
      {/* Secondary Grid Layer for Depth */}
      {showSecondaryGrid && (
        <div 
          className={`absolute inset-0 ${isMobile ? 'opacity-10' : 'opacity-20'}`}
          style={{
            backgroundImage: `
              radial-gradient(circle at center, ${dotColor} 1px, transparent 1px)
            `,
            backgroundSize: `${mobileGridSize * 2}px ${mobileGridSize * 2}px`,
            backgroundPosition: `${mobileGridSize}px ${mobileGridSize}px`
          }}
        />
      )}

      {/* Gradient Overlay for Visual Interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      {/* Animated Glow Effect - Desktop Only */}
      {showGlowEffects && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}
    </div>
  );
};

export default GridBackground;
