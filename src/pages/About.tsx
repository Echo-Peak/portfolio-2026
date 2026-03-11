import { ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContentData } from "@/types/content";

const BASE = import.meta.env.BASE_URL;

interface AboutProps {
  content: ContentData;
}

export function About({ content }: AboutProps) {
  const { about } = content;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex flex-col items-center text-center animate-fade-in">
          <div className="mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-primary/30 shadow-[0_0_24px_hsl(30_95%_55%/0.15)]">
            <img
              src={`${BASE}${about.profile.avatar}`}
              alt={about.profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Who I am
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">{about.profile.title}</p>
        </div>

        <div className="glass-card border-gradient rounded-xl p-8 animate-fade-in-up">
          <div className="space-y-6">
            {about.originStory.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 animate-fade-in-up animate-delay-200">
          <a
            href={about.profile.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 px-8 text-base glass-card text-foreground hover:border-primary/30 hover:text-primary transition-all hover:scale-105"
            )}
          >
            View Resume
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
          <a
            href={about.agency}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all hover:scale-105"
            )}
          >
            Echopeak Labs
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
