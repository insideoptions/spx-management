import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BackgroundPaths } from "@/components/ui/background-paths";
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
                <h1 className="mt-2 max-w-4xl text-balance text-3xl font-medium md:text-4xl lg:mt-4 xl:text-5xl">
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
                      <div className="mb-8">
                        <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">
                          AS FEATURED IN
                        </p>
                        <div className="mb-6">
                          <h2 className="wsj-font text-4xl md:text-5xl font-bold mb-2">WSJ</h2>
                          <p className="text-sm text-slate-300">THE WALL STREET JOURNAL</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Led by David Chau</h3>
                        <p className="text-base leading-relaxed text-slate-200">
                          An options trading expert known as &apos;Captain Condor&apos; and featured in The Wall Street Journal — SPX MGMT combines deep expertise with a disciplined, adaptable approach honed through years of live market execution. David&apos;s real-world trading insight and dedication to transparency empower clients to navigate volatile markets with confidence and clarity.
                        </p>
                      </div>
                    </div>

                    {/* Desktop: Side by Side Layout */}
                    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center text-white">
                      {/* Left Side - WSJ Logo */}
                      <div className="text-center lg:text-left">
                        <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-6">
                          AS FEATURED IN
                        </p>
                        <div>
                          <h2 className="wsj-font text-6xl xl:text-7xl font-bold mb-3">WSJ</h2>
                          <p className="text-sm text-slate-300 tracking-wide">THE WALL STREET JOURNAL</p>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <h3 className="text-3xl xl:text-4xl font-bold mb-6">Led by David Chau</h3>
                        <p className="text-lg leading-relaxed text-slate-200">
                          An options trading expert known as &apos;Captain Condor&apos; and featured in The Wall Street Journal — SPX MGMT combines deep expertise with a disciplined, adaptable approach honed through years of live market execution. David&apos;s real-world trading insight and dedication to transparency empower clients to navigate volatile markets with confidence and clarity.
                        </p>
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
        
        <AnimatedSection className="pb-16 md:pb-32" delay={0.6}>
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}
