import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Landing } from "@/pages/Landing";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { useContent } from "@/hooks/useContent";

function App() {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout socialLinks={content.hero.socialLinks} />}>
          <Route index element={<Landing content={content} />} />
          <Route path="about" element={<About content={content} />} />
          <Route path="contact" element={<Contact content={content} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
