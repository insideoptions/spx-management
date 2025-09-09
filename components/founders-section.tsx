import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FoundersSection() {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl mb-6">
            Meet Our Founder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leadership driven by expertise, innovation, and a proven track record in quantitative trading
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                {/* Placeholder for future photo */}
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-neutral-500 dark:text-neutral-400">
                      <div className="w-16 h-16 mx-auto mb-2 bg-neutral-300 dark:bg-neutral-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold">DC</span>
                      </div>
                      <p className="text-sm">Photo Coming Soon</p>
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      David Chau, Founder and Chief Investment Officer
                    </h3>
                    <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
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

                  <div className="pt-6">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
