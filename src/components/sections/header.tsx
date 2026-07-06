import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/sections/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Product", href: "/#product" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Experience", href: "/#experience" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-graphite/70 bg-navy/85 shadow-[0_8px_32px_-12px_rgba(5,7,10,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-[72px] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-coolGray/80 transition-colors hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="/#contact">Get Pricing</a>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-graphite bg-white/[0.04] text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="border-b border-graphite bg-navy/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-coolGray hover:bg-white/[0.05] hover:text-cyan"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button asChild size="lg" className="mt-3 w-full">
                <a href="/#contact" onClick={() => setOpen(false)}>Get Pricing Now</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
