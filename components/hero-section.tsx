import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BackgroundPaths } from "@/components/ui/background-paths";
import VideoPlayer from "@/components/ui/video-player";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative">
          <BackgroundPaths title="SPXMGMT" />
          <div className="relative z-20 pb-16 pt-4 md:pb-24 md:pt-8 lg:pb-32 lg:pt-12">
            <div className="relative mx-auto max-w-6xl px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mt-2 max-w-4xl text-balance text-3xl font-medium md:text-4xl lg:mt-4 xl:text-5xl">
                  Meet Our Founder
                </h1>
                <p className="mt-3 text-lg md:text-xl font-medium text-muted-foreground">
                  David Chau &ldquo;aka&rdquo; Captain Condor
                </p>
                
                {/* Video Interview Centerpiece */}
                <div className="mt-8 max-w-4xl mx-auto">
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

                <div className="mt-12 max-w-4xl mx-auto">
                  {/* Modern founder bio layout */}
                  <div className="prose prose-lg mx-auto text-center max-w-3xl">
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
                    
                    <div className="bg-muted/30 rounded-2xl p-8 mt-8">
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

                {/* Wall Street Journal Featured Section */}
                <div className="mt-16 max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-3xl p-8 md:p-12 border border-amber-200/50 dark:border-amber-800/30">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L3.09 8.26L12 22L20.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                          As Featured In
                        </span>
                      </div>
                      <h2 className="wsj-font text-4xl md:text-5xl lg:text-6xl text-amber-900 dark:text-amber-100 mb-4">
                        The Wall Street Journal
                      </h2>
                      <p className="text-lg text-amber-800 dark:text-amber-200 max-w-2xl mx-auto leading-relaxed mb-8">
                        &ldquo;Meet &apos;Captain Condor,&apos; the Options Trader Whose Crew Can Move Markets&rdquo;
                      </p>
                    </div>
                    
                    {/* Article Screenshot */}
                    <div className="mb-8">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <img
                          src="/Screenshot 2025-09-09 at 4.34.25 PM.png"
                          alt="Wall Street Journal article featuring David Chau as Captain Condor"
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 dark:bg-black/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-amber-200/30 dark:border-amber-700/30">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">&ldquo;</span>
                        </div>
                        <div>
                          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                            &ldquo;An options trader&apos;s gutsy bets have drawn followers, and a few nicknames&rdquo;
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="wsj-font text-lg font-bold text-amber-900 dark:text-amber-100">
                              The Wall Street Journal
                            </div>
                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                            <span className="text-sm text-amber-700 dark:text-amber-300">
                              Markets & Finance | Investing
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
        </section>
        <section className="pb-16 md:pb-32">
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
        </section>
      </main>
    </>
  );
}
