import { MapPin, Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContentData } from "@/types/content";

interface ContactProps {
  content: ContentData;
}

export function Contact({ content }: ContactProps) {
  const { contact } = content;

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center animate-fade-in">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Let's <span className="text-gradient">Work Together</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            {contact.description}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
            <MapPin size={14} />
            {contact.location}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6 animate-fade-in-up">
            <p className="leading-relaxed text-muted-foreground">
              Have a project in mind or want to discuss how I can help with your
              cloud infrastructure, security compliance, or desktop tooling?
              Drop me a message and I'll get back to you.
            </p>
            <div className="glass-card border-gradient rounded-xl p-5">
              <p className="text-sm font-bold text-foreground">
                What I can help with
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  AWS cloud architecture & optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  SOC 2 / HIPAA / PCI compliance alignment
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Desktop & cross-platform application development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  CI/CD pipeline design & automation
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card border-gradient rounded-xl p-6 animate-fade-in-up animate-delay-200 md:p-8">
            <form
              className="space-y-5"
              action="https://formspree.io/f/mqaydaoa"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-[var(--glass-border)] bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all hover:scale-[1.02]"
                )}
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
