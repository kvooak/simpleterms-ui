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
        success: 'bg-green-700 text-white dark:bg-green-600',
        warning: 'bg-amber-600 text-white dark:bg-amber-500',
        info: 'bg-blue-600 text-white dark:bg-blue-500',
        'error-soft': 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        'warning-soft': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        'caution-soft': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
        'retry-soft': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        'info-soft': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        'success-soft': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        'purple-soft': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
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
