import { useEffect } from "react";

/**
 * Tawk.to live-chat loader.
 *
 * Activate by setting the embed URL, either:
 *  1. Env var (preferred for Vercel): VITE_TAWK_EMBED_URL
 *  2. Or paste it into TAWK_EMBED_URL below.
 *
 * Find the URL in the tawk.to dashboard: Administration → Channels →
 * Chat Widget → copy the `src` from the embed code. It looks like
 * https://embed.tawk.to/<propertyId>/<widgetId>
 *
 * While the URL is empty this component renders and loads nothing.
 */
const TAWK_EMBED_URL: string = import.meta.env.VITE_TAWK_EMBED_URL ?? "";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export function TawkChat() {
  useEffect(() => {
    if (!TAWK_EMBED_URL || document.getElementById("tawk-embed")) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    script.id = "tawk-embed";
    script.async = true;
    script.src = TAWK_EMBED_URL;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);
  }, []);

  return null;
}
