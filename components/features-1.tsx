import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Activity, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Our strategies are designed to deliver{" "}
            <span className="text-blue-600 dark:text-blue-400">non-correlated returns</span>{" "}
            while actively managing market risk, making them{" "}
            <span className="text-blue-600 dark:text-blue-400">well-suited for sophisticated investors</span>{" "}
            seeking alternatives to traditional active trading.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <Card className="group shadow-zinc-950/5 p-8">
            <CardHeader className="pb-6 text-center">
              <CardDecorator>
                <Activity className="size-8" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 text-xl font-semibold">Precision Risk Management</h3>
            </CardHeader>

            <CardContent className="text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                Each trade is selected with precision, using structured risk management to protect your capital in any market environment.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5 p-8">
            <CardHeader className="pb-6 text-center">
              <CardDecorator>
                <TrendingUp className="size-8" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 text-xl font-semibold">You invest — he executes.</h3>
            </CardHeader>

            <CardContent className="text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                David personally manages your capital using proven, non-directional strategies refined in live market conditions.
              </p>
            </CardContent>
          </Card>
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
