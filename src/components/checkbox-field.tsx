import * as React from 'react';
import { Checkbox } from './checkbox';
import { Label } from './label';
import { cn } from '../lib/utils';

type CheckboxFieldVariant = 'row' | 'card';

interface CheckboxFieldProps extends Omit<React.ComponentProps<typeof Checkbox>, 'className'> {
  /** Primary label text; also the checkbox's accessible name. */
  label: React.ReactNode;
  /** Optional secondary line under the label. Reads best with `variant="card"`. */
  description?: React.ReactNode;
  /** 'row' (default) is an inline single line; 'card' is a bordered tile with title + description. */
  variant?: CheckboxFieldVariant;
  /** Class applied to the clickable wrapper (the whole row). */
  className?: string;
  /** Class applied to the checkbox itself. */
  checkboxClassName?: string;
}

/**
 * A checkbox paired with its label as a single accessible, clickable target.
 *
 * The whole row is a `<label>` wrapping the checkbox, so clicking anywhere on it
 * toggles the box (native label-to-control forwarding, no `htmlFor` plumbing) and
 * the label text becomes the checkbox's accessible name. The row carries the
 * pointer cursor, a `transition-colors` hover state, and (for cards) a checked
 * accent so it visibly reads as interactive.
 */
function CheckboxField({
  label,
  description,
  variant = 'row',
  className,
  checkboxClassName,
  ...checkboxProps
}: CheckboxFieldProps) {
  const isCard = variant === 'card';

  return (
    <Label
      data-slot="checkbox-field"
      className={cn(
        'cursor-pointer gap-2.5 font-normal transition-colors',
        'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-60',
        isCard
          ? cn(
              'min-h-11 items-start border border-border bg-muted/20 p-3',
              'hover:bg-muted/40 hover:border-foreground/25 dark:hover:bg-accent',
              'has-[:focus-visible]:border-foreground/25 has-[:focus-visible]:bg-muted/40',
              'dark:has-[:focus-visible]:bg-accent',
              'has-[[data-checked]]:border-primary/70 has-[[data-checked]]:bg-primary/5'
            )
          : cn(
              'min-h-9 items-center -mx-2 px-2 py-1.5',
              'hover:bg-muted/50 has-[:focus-visible]:bg-muted/50',
              'dark:hover:bg-accent dark:has-[:focus-visible]:bg-accent'
            ),
        className
      )}
    >
      <Checkbox {...checkboxProps} className={cn(isCard && 'mt-0.5', checkboxClassName)} />
      {isCard && description !== undefined ? (
        <span className="min-w-0 space-y-0.5">
          <span className="block text-sm font-medium leading-snug">{label}</span>
          <span className="block text-sm font-normal leading-snug text-muted-foreground">{description}</span>
        </span>
      ) : (
        <span className="min-w-0 text-sm font-normal leading-snug">{label}</span>
      )}
    </Label>
  );
}

export { CheckboxField };
export type { CheckboxFieldProps, CheckboxFieldVariant };
