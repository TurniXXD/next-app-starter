import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type TypographyAttributes = HTMLHeadingElement & HTMLQuoteElement & HTMLParagraphElement & HTMLAnchorElement & HTMLSpanElement;

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-tight",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      body1: "text-base leading-relaxed",
      body2: "text-sm leading-relaxed",
      caption: "text-xs text-muted-foreground",
      quote: "border-l-4 pl-4 italic text-muted-foreground",
      link: "text-primary underline hover:opacity-80",
    },
    color: {
      inherit: "text-inherit",
      primary: "text-primary",
      secondary: "text-secondary",
      error: "text-destructive",
      warning: "text-warning",
      success: "text-success",
      info: "text-info",
    },
    textAlign: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "inherit",
    textAlign: "left",
  },
});

export interface TypographyProps
  extends Omit<HTMLAttributes<TypographyAttributes>, "className" | "color">,
    VariantProps<typeof typographyVariants> {
  component?: "h1" | "h2" | "h3" | "h4" | "p" | "a" | "span";
  className?: string;
}

export const Typography = forwardRef<TypographyAttributes, TypographyProps>(
  ({ variant, color = "primary", component = "span", textAlign = "left", className, ...props }, ref) => {
    const Component = component;
    return <Component className={cn(typographyVariants({ variant, color, textAlign }), className)} ref={ref} {...props} />;
  }
);

Typography.displayName = "Typography";

export default Typography;
