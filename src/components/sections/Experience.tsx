import {
  ChevronRight,
  ChevronDown,
  MapPin,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useState, useId } from "react";
import { Badge } from "@/components/ui/badge";
import type { Experience as ExperienceEntry } from "@/types/content";

interface ExperienceProps {
  data: ExperienceEntry[];
}

function StatusBadge({ status }: { status: string }) {
  if (status === "current") {
    return (
      <Badge className="border border-primary/30 bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider">
        Current
      </Badge>
    );
  }
  return null;
}

function TimelineItem({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const isCurrent = entry.status === "current";
  const dateLabel = entry.endDate ? `${entry.startDate} — ${entry.endDate}` : `${entry.startDate} — Present`;
  const maxCollapsedTags = 5;

  return (
    <li className="relative flex gap-5 md:gap-8">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
            isCurrent
              ? "border-primary bg-primary shadow-[0_0_12px_hsl(30_95%_55%/0.5)]"
              : "border-[var(--glass-border)] bg-muted"
          }`}
        >
          {isCurrent && <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[var(--glass-border)] to-transparent" />
        )}
      </div>

      <article
        className={`group mb-8 flex-1 rounded-xl transition-all ${
          isCurrent
            ? "glass-card border-primary/20 shadow-[0_0_24px_hsl(30_95%_55%/0.08)]"
            : "glass-card"
        }`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="w-full cursor-pointer p-5 text-left md:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex-1">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {entry.role}
                </h3>
                <StatusBadge status={entry.status} />
                {entry.featured && (
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                )}
              </div>

              <p className="text-sm font-medium text-primary">
                {entry.company}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <time className="font-medium">{dateLabel}</time>
            {entry.workMode && (
              <span className="capitalize">{entry.workMode}</span>
            )}
            {entry.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {entry.location}
              </span>
            )}
            {entry.employmentType && (
              <span className="capitalize">{entry.employmentType.replace("-", " ")}</span>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {entry.summary}
          </p>

          {entry.highlights && entry.highlights.length > 0 && (
            <ul className="mt-3 flex flex-col gap-1.5">
              {entry.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {entry.stack && entry.stack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.stack.slice(0, maxCollapsedTags).map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full border border-[var(--glass-border)] bg-secondary/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {tag.label}
                </span>
              ))}
              {entry.stack.length > maxCollapsedTags && (
                <span className="rounded-full border border-[var(--glass-border)] bg-secondary/50 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  +{entry.stack.length - maxCollapsedTags} more
                </span>
              )}
            </div>
          )}
        </button>

        <div
          id={panelId}
          role="region"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[var(--glass-border)] px-5 pb-5 pt-4 md:px-6 md:pb-6">
            {entry.achievements && entry.achievements.length > 0 && (
              <div className="mb-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Key Achievements
                </p>
                <ul className="space-y-2.5">
                  {entry.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.stack && entry.stack.length > maxCollapsedTags && (
              <div className="mb-5">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Full Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {entry.stack.map((tag) => (
                    <span
                      key={tag.label}
                      className="rounded-full border border-[var(--glass-border)] bg-secondary/50 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {entry.links && entry.links.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export function Experience({ data }: ExperienceProps) {
  if (!data || data.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-muted-foreground">No timeline items available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="experience">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Career path
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Roles, impact, and technical progression over time.
          </p>
        </div>

        <ol className="relative list-none pl-0">
          {data.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isLast={i === data.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
