"use client";

import { motion } from "framer-motion";

function StockTickerPaths({ position }: { position: number }) {
    // Generate stock ticker-style paths following diagonal flow pattern
    const paths = Array.from({ length: 24 }, (_, i) => {
        // Create diagonal flow from upper-left to lower-right
        const startX = -400 - i * 20 * position;
        const startY = -100 + i * 25;
        
        // Generate realistic stock movement points following diagonal direction
        let pathD = `M${startX} ${startY}`;
        let currentX = startX;
        let currentY = startY;
        
        // Create segments that flow diagonally across screen
        for (let j = 0; j < 12; j++) {
            const deltaX = 140 + Math.random() * 60; // Move right
            const deltaY = 80 + Math.random() * 40; // Move down (diagonal flow)
            
            // Add stock-like volatility to the diagonal flow
            const volatility = (Math.random() - 0.5) * 60;
            currentX += deltaX;
            currentY += deltaY + volatility;
            
            // Add smooth curves between points
            const controlX1 = currentX - deltaX * 0.6;
            const controlY1 = currentY - deltaY * 0.3;
            const controlX2 = currentX - deltaX * 0.3;
            const controlY2 = currentY + deltaY * 0.2;
            
            pathD += ` C${controlX1} ${controlY1} ${controlX2} ${controlY2} ${currentX} ${currentY}`;
        }

        return {
            id: i,
            d: pathD,
            color: Math.random() > 0.5 ? '#10b981' : '#ef4444',
            width: 1 + i * 0.04,
            opacity: 0.15 + i * 0.015,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 1920 1080"
                fill="none"
            >
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ 
                            pathLength: 0, 
                            opacity: 0,
                            x: position > 0 ? -400 : 400
                        }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, path.opacity, path.opacity, 0],
                            x: [
                                position > 0 ? -400 : 400,
                                0,
                                0,
                                position > 0 ? 400 : -400
                            ]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: path.id * 0.5,
                            times: [0, 0.2, 0.8, 1]
                        }}
                    />
                ))}
                
                {/* Glow effects */}
                {paths.slice(0, 12).map((path) => (
                    <motion.path
                        key={`glow-${path.id}`}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width * 3}
                        strokeOpacity={path.opacity * 0.3}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="blur(2px)"
                        initial={{ 
                            pathLength: 0, 
                            opacity: 0,
                            x: position > 0 ? -400 : 400
                        }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, path.opacity * 0.4, path.opacity * 0.4, 0],
                            x: [
                                position > 0 ? -400 : 400,
                                0,
                                0,
                                position > 0 ? 400 : -400
                            ]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: path.id * 0.5,
                            times: [0, 0.2, 0.8, 1]
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function StockTickerBackground() {
    return (
        <div className="absolute inset-0">
            <StockTickerPaths position={1} />
            <StockTickerPaths position={-1} />
        </div>
    );
}
