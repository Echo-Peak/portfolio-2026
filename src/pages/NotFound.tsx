import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-gradient text-8xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-foreground animate-fade-in">
        Page Not Found
      </h2>
      <p className="mt-2 text-muted-foreground animate-fade-in animate-delay-100">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className={cn(
          buttonVariants(),
          "mt-8 bg-primary text-primary-foreground hover:bg-primary/90 glow transition-all hover:scale-105 animate-fade-in-up animate-delay-200"
        )}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </section>
  );
}
