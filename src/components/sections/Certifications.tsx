import { Award } from "lucide-react";
import type { Certification } from "@/types/content";

interface CertificationsProps {
  data: Certification[];
}

export function Certifications({ data }: CertificationsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Credentials
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="glass-card border-gradient rounded-xl p-6">
            <div className="space-y-0 divide-y divide-[var(--glass-border)]">
              {data.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary/50 p-2">
                    <img
                      src={cert.imageUrl}
                      alt={cert.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">
                      {cert.name}
                    </p>
                  </div>
                  <Award className="h-4 w-4 shrink-0 text-accent opacity-40 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
