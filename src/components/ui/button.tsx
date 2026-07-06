import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-navy disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-clinical text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(37,99,235,0.7)] hover:bg-electric hover:shadow-glowBlue",
        outline:
          "border border-graphite bg-white/[0.03] text-white backdrop-blur-sm hover:border-cyan/50 hover:bg-white/[0.06]",
        light:
          "bg-navy text-white hover:bg-shield",
        ghost:
          "text-slateSoft hover:text-navy",
      },
      size: {
        default: "h-11 px-6 text-[15px]",
        lg: "h-[52px] px-8 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
