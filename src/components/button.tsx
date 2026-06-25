import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-sm font-medium transition-colors focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 gap-1.5 px-2.5 py-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-9 gap-1 px-2.5 py-0.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1.5 px-2.5 py-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'h-11 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-10',
        'icon-xs': "size-9 [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-10',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

function Button({
  ref,
  className,
  variant = 'default',
  size = 'sm',
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled === true || isLoading}
      aria-busy={isLoading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

// ── Public wrappers (the only exported components) ──────────────────────────

interface ActionButtonProps
  extends React.ComponentProps<'button'>, Omit<VariantProps<typeof buttonVariants>, 'variant'> {
  asChild?: boolean;
  isLoading?: boolean;
}

/**
 * Primary action button. Navy background by default, red when destructive.
 * Examples: Create Ticket, Save, Start Agent, Approve, Delete.
 */
function ActionButton({
  ref,
  destructive = false,
  className,
  ...props
}: ActionButtonProps & { destructive?: boolean }) {
  return (
    <Button
      ref={ref}
      variant={destructive ? 'destructive' : 'default'}
      className={cn('font-semibold', className)}
      {...props}
    />
  );
}

/**
 * Standard app button: gray bordered, for secondary actions. The default
 * non-primary button across toolbars, dialogs, and forms.
 * Examples: Workspaces, Tags, Cancel, Close, Stop Agent.
 */
function StandardButton({ ref, disabled, className, ...props }: ActionButtonProps) {
  return (
    <Button
      ref={ref}
      variant="outline"
      disabled={disabled}
      aria-disabled={disabled === true ? true : undefined}
      className={cn(disabled === true && 'text-muted-foreground', className)}
      {...props}
    />
  );
}

/**
 * Ghost icon button for inline icon actions.
 * Matches the dialog close button style: transparent bg, muted icon, hover highlight.
 * Examples: Edit, Delete, Add sub-workspace, clear search.
 */
function IconButton({ ref, size = 'icon-sm', className, ...props }: ActionButtonProps) {
  return (
    <Button ref={ref} variant="ghost" size={size} className={cn('text-muted-foreground', className)} {...props} />
  );
}

const rowButtonVariants = cva(
  'w-full text-left transition-colors outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none',
  {
    variants: {
      // size is declared before variant so tile's own p-3 outranks the
      // size padding in tailwind-merge order (later class wins).
      size: {
        sm: 'px-2 py-1.5',
        md: 'px-3 py-2',
        lg: 'px-4 py-3',
      },
      variant: {
        /** Plain list row: subtle hover background. */
        row: 'hover:bg-muted/40 dark:hover:bg-accent',
        /** Dropdown / combobox option. */
        option: 'text-sm hover:bg-accent',
        /** Bordered settings tile / card. Carries its own p-3; size is moot. */
        tile: 'border border-border bg-muted/20 p-3 hover:bg-muted/40 dark:hover:bg-accent',
        /** No hover chrome — for rows whose hover styling is group-driven. */
        bare: '',
      },
    },
    defaultVariants: { variant: 'row', size: 'md' },
  }
);

interface RowButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof rowButtonVariants> {}

/**
 * Full-width, left-aligned clickable row, option, or tile. The structural
 * button for list rows, combobox options, expandable section headers, and
 * settings tiles. Visual style (hover, padding, borders, focus ring) is owned
 * by the variants — pick `variant` + `size` instead of injecting style
 * classes. `className` is for CONTENT LAYOUT ONLY (flex direction, gaps,
 * truncation); passing colors, padding, or hover styles through it is
 * discouraged. Deliberately not routed through the cva Button base: rows
 * wrap, stretch, and align-left, which the centered inline-flex base fights.
 * The `tile` variant ignores `size` — its p-3 wins via tailwind-merge order.
 */
function RowButton({ ref, className, variant, size, type = 'button', ...props }: RowButtonProps) {
  return (
    <button ref={ref} type={type} className={cn(rowButtonVariants({ variant, size }), className)} {...props} />
  );
}

/**
 * Inline text action styled as a link. For entity references, focus filters,
 * and other in-prose clickables that navigate or select rather than submit.
 */
function LinkButton({ ref, className, type = 'button', ...props }: React.ComponentProps<'button'>) {
  return <button ref={ref} type={type} className={cn('text-left hover:underline', className)} {...props} />;
}

export { ActionButton, IconButton, LinkButton, RowButton, StandardButton };
