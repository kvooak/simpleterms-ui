import * as React from 'react';
import { Label } from './label';
import { cn } from '../lib/utils';

interface FieldProps {
  /** Visible label text. */
  label: React.ReactNode;
  /** id of the control this field wraps — wires label↔control for screen readers. */
  htmlFor?: string;
  /** Helper text rendered under the control. */
  hint?: React.ReactNode;
  /** Error text rendered under the control; takes precedence over `hint`. */
  error?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  /** The control (Input, Textarea, DropdownSelect, …). */
  children: React.ReactNode;
}

/**
 * A vertical labelled form field: label on top, control below, optional
 * hint/error underneath. Centralises the label↔control association so every
 * field is wired for assistive tech via a single `htmlFor`.
 */
function Field({ label, htmlFor, hint, error, className, labelClassName, children }: FieldProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <Label htmlFor={htmlFor} className={cn('text-sm font-medium', labelClassName)}>
        {label}
      </Label>
      {children}
      {error !== undefined && <p className="text-sm text-destructive">{error}</p>}
      {error === undefined && hint !== undefined && <p className="text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

export { Field };
export type { FieldProps };
