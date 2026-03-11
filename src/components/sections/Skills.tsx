import { Cloud, Server, Database } from "lucide-react";
import type { Skill } from "@/types/content";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="h-6 w-6 text-primary" />,
  Backend: <Server className="h-6 w-6 text-accent" />,
  Database: <Database className="h-6 w-6 text-primary" />,
};

interface SkillsProps {
  data: Skill[];
}

export function Skills({ data }: SkillsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            What I work with
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Skills <span className="text-gradient">&</span> Domains
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {data.map((skill, i) => (
            <div
              key={skill.category}
              className={`group glass-card hover-lift rounded-xl p-6 transition-all hover:border-primary/30 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
            >
              <div className="mb-4 flex items-center gap-3">
                {iconMap[skill.category] ?? iconMap.Cloud}
                <h3 className="text-lg font-bold text-foreground">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--glass-border)] bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
