import { ExternalLink, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/content";

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Featured work
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Flagship <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {data.map((project) => (
            <div
              key={project.title}
              className="group border-gradient glass-card hover-lift relative overflow-hidden rounded-xl transition-all hover:border-primary/30"
            >
              <div className="feature-card-gradient absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {project.company}
                      {project.industry && (
                        <span className="text-muted-foreground font-normal"> · {project.industry}</span>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[var(--glass-border)] p-2 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.videoLink && (
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[var(--glass-border)] p-2 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                      >
                        <Play size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="border border-[var(--glass-border)] bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
