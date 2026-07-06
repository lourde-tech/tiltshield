/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        ink: "#05070A",       // Obsidian Black — footer, deepest surfaces
        navy: "#07111F",      // Deep Navy — hero, dark sections
        panel: "#0B1220",     // Charcoal Panel — dark cards
        graphite: "#1E293B",  // Graphite Border
        shield: "#0B3A75",    // Shield Blue
        clinical: "#2563EB",  // Clinical Blue — primary CTA
        electric: "#0A66FF",  // Electric Blue — CTA hover
        cyan: "#38BDF8",      // Trust Cyan — glow accents
        mist: "#F8FAFC",      // Mist Background
        slateSoft: "#64748B", // Soft Slate
        slateText: "#334155", // Slate Text
        lightBorder: "#D8E0EA",
        coolGray: "#E5E7EB",
        gold: "#D6A84F",      // Premium Gold — sparingly
        warning: "#DC2626",   // Warning Red — problem section only
        compliance: "#16A34A" // Compliance Green — savings/success
      },
      fontFamily: {
        display: ['"Archivo Variable"', "Archivo", "system-ui", "sans-serif"],
        sans: ['"Instrument Sans Variable"', '"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,17,31,0.04), 0 8px 24px -8px rgba(7,17,31,0.10)",
        cardHover: "0 2px 4px rgba(7,17,31,0.05), 0 16px 40px -12px rgba(7,17,31,0.16)",
        glowBlue: "0 0 0 1px rgba(56,189,248,0.25), 0 8px 40px -8px rgba(37,99,235,0.55)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
    },
  },
  plugins: [],
}
