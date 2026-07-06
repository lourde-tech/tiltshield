import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const ease = [0.32, 0.72, 0, 1] as const;

export function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
}: PropsWithChildren<{ className?: string; delay?: number; as?: "div" | "li" | "section" }>) {
  const reduce = useReducedMotion();
  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Comp>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] } },
};

export function StaggerGrid({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={staggerParent}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}
