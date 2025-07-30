import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Pop Art Variants
        comic: "bg-pop-orange text-comic-black border-4 border-comic-black font-comic text-lg shadow-comic hover:shadow-pop hover:scale-105 hover:-rotate-1 transition-all duration-200",
        hero: "bg-gradient-pop text-comic-black border-4 border-comic-black font-comic text-2xl shadow-pop hover:shadow-[8px_8px_0px_hsl(var(--comic-black))] hover:scale-110 hover:rotate-2 transition-all duration-300",
        spiritual: "bg-pop-yellow text-comic-black border-3 border-comic-black font-body font-bold shadow-comic hover:bg-secondary hover:shadow-pop transition-all duration-200",
        download: "bg-comic-white text-deep-blue border-4 border-deep-blue font-comic text-lg shadow-comic hover:bg-pop-yellow hover:shadow-pop hover:scale-105 transition-all duration-200"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        comic: "h-14 px-6 py-3",
        hero: "h-20 px-12 py-4"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
