import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { cn } from '../lib/utils';

const badgeVariants = cva(
  'gap-1 rounded-none border border-transparent font-medium [&>svg]:size-3! inline-flex items-center justify-start w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
        secondary: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
        destructive:
          'bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline: 'border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground',
        // Solid variants use fixed faded-Gruvbox fills + cream text — emphatic
        // and legible on either canvas. Soft variants use the flipping --gb-*
        // tint tokens (see index.css) so a single class works in both themes.
        success: 'bg-[#79740e] text-[#fbf1c7]',
        warning: 'bg-[#b57614] text-[#fbf1c7]',
        info: 'bg-[#076678] text-[#fbf1c7]',
        'error-soft': 'bg-gb-red/15 text-gb-red',
        'warning-soft': 'bg-gb-yellow/15 text-gb-yellow',
        'caution-soft': 'bg-gb-orange/15 text-gb-orange',
        'retry-soft': 'bg-gb-yellow/15 text-gb-yellow',
        'info-soft': 'bg-gb-blue/15 text-gb-blue',
        'success-soft': 'bg-gb-green/15 text-gb-green',
        'purple-soft': 'bg-gb-purple/15 text-gb-purple',
      },
      size: {
        default: 'text-base px-2 py-0.5',
        sm: 'text-sm px-1.5 py-0.5',
        xs: 'text-sm px-1 py-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Badge({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge };
