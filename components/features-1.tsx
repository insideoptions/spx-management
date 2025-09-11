// Removed Card imports - using plain divs for better layout control
import { Activity, TrendingUp } from "lucide-react";
import { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/scroll-animations";

export default function Features() {
  return (
    <section id="solutions" className="py-20 sm:py-24 md:py-32">
        <div className="@container mx-auto max-w-6xl px-6">
          <div className="backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-8">
                What We Do
              </h2>
              <p className="text-balance text-lg md:text-xl lg:text-2xl leading-relaxed text-black dark:text-white max-w-4xl mx-auto">
                SPX MGMT LLC is an alternative investment firm established in 2023 to provide investors with a systematic, risk-managed approach to trading index options. Our strategies are grounded in non-directional frameworks and have been refined in live market environments, rather than relying solely on back-tested results.
              </p>
              <p className="text-balance text-lg md:text-xl lg:text-2xl leading-relaxed text-black dark:text-white max-w-4xl mx-auto mt-6">
                By focusing on statistical edge and disciplined execution, we seek to deliver consistent, risk-adjusted returns while preserving capital through varying market conditions. Our process emphasizes transparency, repeatability, and institutional-level risk controls, offering sophisticated investors an alternative to traditional active trading models.
              </p>
            </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div className="group shadow-zinc-950/5 p-8 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl">
                  <div className="pb-6 text-center">
                    <CardDecorator>
                      <Activity className="size-8 text-black dark:text-white" aria-hidden />
                    </CardDecorator>
                    <h3 className="mt-6 text-xl font-semibold text-black dark:text-white">Non-Correlated Returns</h3>
                  </div>

                  <div className="text-center">
                    <p className="text-base leading-relaxed text-black/70 dark:text-white/70">
                      Built to perform independently of market direction, the approach provides diversification benefits while managing exposure across varying conditions.
                    </p>
                  </div>
                </div>

                <div className="group shadow-zinc-950/5 p-8 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl">
                  <div className="pb-6 text-center">
                    <CardDecorator>
                      <TrendingUp className="size-8 text-black dark:text-white" aria-hidden />
                    </CardDecorator>
                    <h3 className="mt-6 text-xl font-semibold text-black dark:text-white">Structured for Consistency</h3>
                  </div>

                  <div className="text-center">
                    <p className="text-base leading-relaxed text-black/70 dark:text-white/70">
                      By targeting predictable money flows and option pricing dynamics, our objective is to generate high average monthly returns while maintaining balanced market risk.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)3%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)6%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)4%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)8%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
