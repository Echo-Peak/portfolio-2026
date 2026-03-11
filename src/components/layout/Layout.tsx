import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { SocialLinks } from "@/types/content";

const BASE = import.meta.env.BASE_URL;

interface LayoutProps {
  socialLinks?: SocialLinks;
}

export function Layout({ socialLinks }: LayoutProps) {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-cover bg-fixed bg-left-top bg-no-repeat"
      style={{ backgroundImage: `url(${BASE}background-v1.png)` }}
    >
      <div className="pointer-events-none fixed inset-0 bg-black/50" />
      <div className="relative flex min-h-screen flex-col">
        <Navbar socialLinks={socialLinks} />
        <main className="flex-1 pt-[88px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
