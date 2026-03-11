import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

interface NavbarProps {
  socialLinks?: { github: string; linkedin: string };
}

export function Navbar({ socialLinks }: NavbarProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-[20px]">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/" className="text-lg font-bold tracking-tight text-white">
            MW<span className="text-gradient">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {socialLinks && (
              <>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin size={18} />
                </a>
              </>
            )}
          </div>

          <button
            className="text-muted-foreground md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--glass-border)] md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {socialLinks && (
                <div className="flex gap-4 pt-2">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
