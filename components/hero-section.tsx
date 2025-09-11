import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Features from "@/components/features-1";
import VideoPlayer from "@/components/ui/video-player";
import { AnimatedSection, ScrollProgress } from "@/components/ui/scroll-animations";

export default function HeroSection() {
  return (
    <>
      <ScrollProgress />
      <HeroHeader />
      <main className="overflow-x-hidden">
        <AnimatedSection className="relative" delay={0}>
          <BackgroundPaths title="SPXMGMT" />
        </AnimatedSection>
        
        <AnimatedSection className="relative" delay={0.2} data-section="founder">
          <div className="relative z-20 pb-16 pt-4 md:pb-24 md:pt-8 lg:pb-32 lg:pt-12">
            <div className="relative mx-auto max-w-6xl px-6">
              {/* Header - centered on all devices */}
              <div className="mx-auto max-w-4xl text-center mb-12">
                <h1 className="mt-2 max-w-4xl text-balance text-3xl md:text-4xl lg:text-5xl font-bold lg:mt-4">
                  Meet Our Founder
                </h1>
                <p className="mt-3 text-lg md:text-xl font-medium text-muted-foreground">
                  David Chau &ldquo;aka&rdquo; Captain Condor
                </p>
              </div>

              {/* Desktop: Side by side layout, Mobile: Stacked */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Video Section - Left on desktop */}
                <div className="order-1 lg:order-1">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/5 dark:bg-white/5">
                    <iframe
                      src="https://fintech.tv/?p=33722&embed=1"
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title="David Chau Live Interview on FinTech TV"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                    🔴 LIVE Interview: David Chau on FinTech TV
                  </p>
                </div>

                {/* Text Content - Right on desktop */}
                <div className="order-2 lg:order-2">
                  <div className="prose prose-lg max-w-none text-left">
                    <p className="text-lg leading-relaxed mb-6">
                      David Chau is the Founder and Chief Investment Officer of SPX MGMT LLC, 
                      a boutique alternative investment firm specializing in non-directional 
                      options strategies. A serial entrepreneur, David has built and invested 
                      in multiple start-ups and emerging companies.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      He is also the founder of InsideOptions, an online options training 
                      community that has mentored more than 1,100 traders ranging from 
                      beginners to advanced professionals.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-8">
                      David&apos;s work and unique approach to SPX options have been featured in 
                      the Wall Street Journal and on FinTech TV, where he has shared insights 
                      into quantitative trading strategies and market efficiency.
                    </p>
                    
                    <div className="bg-muted/30 rounded-2xl p-6 lg:p-8">
                      <p className="text-base italic text-muted-foreground leading-relaxed">
                        &ldquo;Unlike most quant strategies optimized only in backtests, ours was 
                        forged and fine-tuned in live markets. As CIO of SPX MGMT LLC, I&apos;m 
                        responsible for all investment management and trading decisions, 
                        bringing a systematic, risk-managed approach to every aspect of 
                        our firm&apos;s strategy.&rdquo;
                      </p>
                      <div className="mt-4 text-sm font-medium">— David Chau</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Solutions Section */}
        <div id="solutions">
          <Features />
        </div>

        {/* Wall Street Journal Featured Section */}
        <AnimatedSection className="relative" delay={0.4} data-section="wsj">
          <div className="relative z-20 pb-16 pt-4 md:pb-24 md:pt-8 lg:pb-32 lg:pt-12">
            <div className="relative mx-auto max-w-6xl px-6">
              <div className="mt-16 max-w-6xl mx-auto">
                <a 
                  href="https://www.wsj.com/finance/investing/meet-captain-condor-the-options-trader-whose-crew-can-move-markets-71e4942d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-[1.01] duration-300"
                >
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 border border-slate-600/30 hover:border-slate-500/50 transition-colors cursor-pointer">
                    {/* Mobile: Stacked Layout */}
                    <div className="lg:hidden text-center text-white">
                      <div className="mb-8 flex justify-center">
                        <img 
                          src="/wsjlogo.png" 
                          alt="The Wall Street Journal Logo"
                          className="w-56 md:w-64 h-auto"
                        />
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Led by David Chau</h3>
                        <p className="text-base leading-relaxed text-slate-200 mb-6">
                          An options trading expert known as &apos;Captain Condor&apos; and featured in The Wall Street Journal — SPX MGMT combines deep expertise with a disciplined, adaptable approach honed through years of live market execution. David&apos;s real-world trading insight and dedication to transparency empower clients to navigate volatile markets with confidence and clarity.
                        </p>
                      </div>

                      {/* Mobile WSJ3 Image */}
                      <div className="flex justify-center">
                        <img 
                          src="/wsj3.png" 
                          alt="Wall Street Journal Article Feature"
                          className="w-full max-w-sm h-auto rounded-lg shadow-lg border border-slate-600/30"
                        />
                      </div>
                    </div>

                    {/* Desktop: Three Column Layout */}
                    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center text-white">
                      {/* Left Side - WSJ Logo */}
                      <div className="flex justify-center lg:justify-start items-center">
                        <img 
                          src="/wsjlogo.png" 
                          alt="The Wall Street Journal Logo"
                          className="w-60 xl:w-72 h-auto"
                        />
                      </div>

                      {/* Middle - Content */}
                      <div>
                        <h3 className="text-2xl xl:text-3xl font-bold mb-4">Led by David Chau</h3>
                        <p className="text-base xl:text-lg leading-relaxed text-slate-200">
                          An options trading expert known as &apos;Captain Condor&apos; and featured in The Wall Street Journal — SPX MGMT combines deep expertise with a disciplined, adaptable approach honed through years of live market execution.
                        </p>
                      </div>

                      {/* Right Side - WSJ3 Image */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/wsj3.png" 
                          alt="Wall Street Journal Article Feature"
                          className="w-full max-w-xs xl:max-w-sm h-auto rounded-lg shadow-xl border border-slate-600/30 hover:shadow-2xl transition-shadow duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mx-auto max-w-4xl text-center">
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row">
                  <Button 
                    size="lg" 
                    className="px-8 py-3 text-base font-semibold"
                    disabled
                  >
                    Learn More About Our Approach
                    <span className="ml-2 opacity-60">→</span>
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Form submission coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
      </main>
    </>
  );
}
