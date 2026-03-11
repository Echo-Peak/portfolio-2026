import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import type { Hero as HeroType, Certification } from "@/types/content";

interface HeroProps {
  data: HeroType;
  certifications?: Certification[];
}

function CtaLink({
  url,
  className,
  children,
}: {
  url: string;
  className: string;
  children: React.ReactNode;
}) {
  if (url.startsWith("#")) {
    return (
      <a
        href={url}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(url)?.scrollIntoView({ behavior: "smooth" });
        }}
        className={className}
      >
        {children}
      </a>
    );
  }

  if (url.startsWith("/")) {
    return (
      <Link to={url} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function Hero({ data, certifications }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 animate-fade-in text-lg font-medium tracking-wide text-muted-foreground md:text-xl">
            Mike Wheeler
          </p>
          <Badge
            variant="secondary"
            className="mb-6 animate-fade-in border border-primary/20 bg-primary/10 text-primary backdrop-blur-sm"
          >
            {data.badge}
          </Badge>

          <h1 className="max-w-4xl animate-fade-in-up text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-5xl">
            <span className="text-foreground">I design and build </span>
            <span className="text-gradient">secure cloud</span>
            <span className="text-foreground">, </span>
            <span className="text-gradient">backend</span>
            <span className="text-foreground">, and </span>
            <span className="text-gradient">AI</span>
            <span className="text-foreground">
              {" "}
              systems for modern products.
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-in-up text-lg font-medium text-muted-foreground animate-delay-200">
            {data.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 animate-fade-in-up animate-delay-300">
            <CtaLink
              url={data.primaryCta.url}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all hover:scale-105",
              )}
            >
              {data.primaryCta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </CtaLink>

            {data.secondaryCtas.map((cta) => (
              <CtaLink
                key={cta.label}
                url={cta.url}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 px-8 text-base glass-card text-foreground hover:border-primary/30 hover:text-primary transition-all hover:scale-105",
                )}
              >
                {cta.label}
                <ArrowDown className="ml-2 h-5 w-5" />
              </CtaLink>
            ))}
          </div>

          {data.stats && data.stats.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animate-delay-400">
              {data.stats.map((stat, i) => (
                <span key={stat.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <span className="glass-card rounded-full px-4 py-1.5">
                    <span className="font-bold text-primary">{stat.value}</span>
                    <span className="ml-1.5 text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </span>
                </span>
              ))}
            </div>
          )}

          {certifications && certifications.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 animate-fade-in-up animate-delay-500">
              {certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="inline-flex items-center rounded-full border border-[var(--glass-border)] bg-secondary/30 px-3 py-1 text-xs text-muted-foreground"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
