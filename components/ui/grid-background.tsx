import React from 'react';

const GridBackground = ({ 
  gridSize = 40,
  dotSize = 2,
  dotColor = 'rgba(255, 255, 255, 0.3)',
  backgroundColor = '#000000',
  animated = true 
}) => {
  return (
    <div className="absolute inset-0 min-h-screen overflow-hidden" style={{ backgroundColor }}>
      {/* Animated Grid Pattern */}
      <div 
        className={`absolute inset-0 opacity-60 ${animated ? 'animate-pulse' : ''}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, ${dotColor} ${dotSize}px, transparent ${dotSize}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: '0 0, 20px 20px'
        }}
      />
      
      {/* Secondary Grid Layer for Depth */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, ${dotColor} 1px, transparent 1px)
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
