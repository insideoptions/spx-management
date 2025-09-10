import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Activity, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section id="solutions" className="py-16 md:py-32">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="bg-white/5 dark:bg-black/10 backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12 md:mb-20">
            <p className="text-balance text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-black dark:text-white max-w-4xl mx-auto">
              SPX MGMT LLC is an alternative investment firm formed in 2023 to provide sophisticated investors with an alternative to traditional active trading. Our strategies were developed and refined in live markets, not just back-tests, with the goal of delivering consistent returns while managing market risk.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <Card className="group shadow-zinc-950/5 p-8 bg-white/20 dark:bg-black/15 border-white/15 dark:border-white/10">
              <CardHeader className="pb-6 text-center">
                <CardDecorator>
                  <Activity className="size-8 text-black dark:text-white" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 text-xl font-semibold text-black dark:text-white">Non-Correlated Returns</h3>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-base leading-relaxed text-black/70 dark:text-white/70">
                  Built to perform independently of market direction, the approach provides diversification benefits while managing exposure across varying conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="group shadow-zinc-950/5 p-8 bg-white/20 dark:bg-black/15 border-white/15 dark:border-white/10">
              <CardHeader className="pb-6 text-center">
                <CardDecorator>
                  <TrendingUp className="size-8 text-black dark:text-white" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 text-xl font-semibold text-black dark:text-white">Structured for Consistency</h3>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-base leading-relaxed text-black/70 dark:text-white/70">
                  By targeting predictable money flows and option pricing dynamics, our objective is to generate high average monthly returns while maintaining balanced market risk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
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
