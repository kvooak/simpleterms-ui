import * as React from 'react';
import { cn } from '../lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'dark:bg-input/30 border-border bg-white focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-10 rounded-none border px-2.5 py-1.5 text-base focus-visible:ring-1 aria-invalid:ring-1 placeholder:text-muted-foreground w-full min-w-0 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:h-8 file:text-sm file:font-medium file:text-foreground file:inline-flex file:items-center file:rounded file:border-0 file:bg-muted file:px-2.5 file:mr-3 file:cursor-pointer',
        className
      )}
      {...props}
    />
  );
}

export { Input };
