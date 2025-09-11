"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Waves } from "./waves";
import { useTheme } from "next-themes";

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const [isMobile, setIsMobile] = useState(false);
    const { theme } = useTheme();
    const words = title.split(" ");
    
    // Get wave color based on theme
    const getWaveColor = () => {
        if (theme === 'dark') {
            return "rgba(255, 255, 255, 0.3)"; // White for dark mode
        }
        return "rgba(59, 130, 246, 0.3)"; // Blue for light mode
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative min-h-screen md:min-h-screen h-screen md:h-auto w-full flex items-center justify-center overflow-hidden">
            {/* Only show waves on desktop to prevent mobile scrolling issues */}
            {!isMobile && (
                <div className="absolute inset-0">
                    <Waves 
                        lineColor={getWaveColor()}
                        backgroundColor="transparent"
                        waveSpeedX={0.0125}
                        waveSpeedY={0.005}
                        waveAmpX={32}
                        waveAmpY={16}
                        xGap={10}
                        yGap={32}
                        friction={0.925}
                        tension={0.005}
                        maxCursorMove={100}
                        className="animate-wave-pulse"
                    />
                </div>
            )}

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center transform translate-y-[-2vh] md:translate-y-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 sm:mb-10 md:mb-12 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: isMobile ? 250 : 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={
                            isMobile
                                ? {
                                      delay: wordIndex * 0.05 + letterIndex * 0.01,
                                      duration: 0.6,
                                      ease: "easeOut",
                                  }
                                : {
                                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                                      type: "spring",
                                      stiffness: 150,
                                      damping: 25,
                                  }
                        }
                                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: isMobile ? 100 : 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={
                            isMobile
                                ? { delay: 0.6, duration: 0.8 }
                                : { delay: 1.5, duration: 0.8 }
                        }
                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-neutral-600 dark:text-white max-w-4xl mx-auto leading-relaxed"
                    >
                        Unlike most quant strategies optimized only in backtests, ours was forged and<br />fine-tuned in live markets, adapting to real-world dynamics to deliver a distinct performance edge.
                    </motion.p>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("=== Discover Excellence Button Clicked ===");
                                const solutionsSection = document.querySelector('#solutions') as HTMLElement;
                                if (solutionsSection) {
                                    const targetY = solutionsSection.offsetTop - 120;
                                    console.log(`Discover Excellence - Element found at offsetTop: ${solutionsSection.offsetTop}px`);
                                    console.log(`Discover Excellence - Target scroll position: ${targetY}px (offsetTop - 120)`);
                                    window.scrollTo({ top: targetY, behavior: 'smooth' });
                                } else {
                                    console.log("Discover Excellence - Solutions section not found!");
                                }
                            }}
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
