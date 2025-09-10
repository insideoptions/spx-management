"use client";

import React, { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

// Individual animated section component
const AnimatedSection = ({ children, className = "", delay = 0, ...props }: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-20%" 
  });

  const sectionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0, 1],
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className={`min-h-screen flex items-center justify-center perspective-1000 ${className}`}
      style={{
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax background component
const ParallaxBackground = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-0 -z-10"
    >
      {children}
    </motion.div>
  );
};

// Progress bar component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

export { AnimatedSection, ParallaxBackground, ScrollProgress };
