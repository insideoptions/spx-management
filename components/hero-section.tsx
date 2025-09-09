import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="relative">
          <BackgroundPaths title="SPXMGMT" />
          <div className="absolute inset-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm"></div>
          <div className="relative z-20 pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto max-w-6xl px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Meet Our Founder
                </h1>
                <div className="mt-8 max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">
                    David Chau, Founder and Chief Investment Officer
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      David Chau is the Founder and Chief Investment Officer of SPX MGMT LLC, 
                      a boutique alternative investment firm specializing in non-directional 
                      options strategies. He is also the founder of InsideOptions, an online 
                      options training community that has mentored more than 1,100 traders 
                      ranging from beginners to advanced professionals.
                    </p>
                    
                    <p>
                      A serial entrepreneur, David has built and invested in multiple start-ups 
                      and emerging companies. His work and unique approach to SPX options have 
                      been featured in the Wall Street Journal and on FintechTV, where he has 
                      shared insights into quantitative trading strategies and market efficiency.
                    </p>
                    
                    <p>
                      As CIO of SPX MGMT LLC, David is responsible for all investment management 
                      and trading decisions, bringing his systematic, risk-managed approach to 
                      every aspect of the firm&apos;s strategy.
                    </p>
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
        <section className="bg-background pb-16 md:pb-32">
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
