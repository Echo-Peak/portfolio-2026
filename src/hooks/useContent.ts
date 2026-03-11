import { useState, useEffect } from "react";
import type { ContentData } from "@/types/content";

const BASE = import.meta.env.BASE_URL;

export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}content.json`)
      .then((res) => res.json())
      .then((data: ContentData) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { content, loading };
}
