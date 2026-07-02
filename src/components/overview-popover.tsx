import { Activity } from 'lucide-react';
import { StandardButton } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { cn } from '../lib/utils';

/**
 * Compact "Overview" button that opens a popover of summary stats — the
 * streamlined alternative to a heavy grid of StatCards. Lifted out of the MCP
 * Logs page so every page presents its aggregates the same way: a single
 * unobtrusive trigger that keeps the numbers one click away instead of eating
 * a row of cards above the real content.
 *
 * Compose the body from OverviewSection + OverviewStatRow (plus any extra
 * content — a chart, a legend — as additional children).
 */

interface OverviewStatRowProps {
  label: string;
  value: React.ReactNode;
  /** Optional leading icon. */
  icon?: React.ComponentType<{ className?: string }>;
  /** Color class applied to the icon (e.g. a semantic accent). */
  accent?: string;
}

/** One label → value row inside an OverviewSection. */
export function OverviewStatRow({ label, value, icon: Icon, accent }: OverviewStatRowProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        {Icon !== undefined && <Icon className={cn('size-3.5 shrink-0', accent)} />}
        {label}
      </span>
      <span className="text-right text-sm font-semibold leading-tight tabular-nums">{value}</span>
    </div>
  );
}

/** A titled group of rows. Sections stack with dividers inside the popover. */
export function OverviewSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="space-y-2 border-b border-border p-3 last:border-b-0">
      {title !== undefined && <div className="text-sm uppercase tracking-wide text-muted-foreground">{title}</div>}
      {children}
    </div>
  );
}

interface OverviewPopoverProps {
  /** Trigger button text. Defaults to "Overview". */
  label?: string;
  /** Optional trailing value shown muted in the trigger (e.g. a headline total). */
  badge?: React.ReactNode;
  /** Trigger icon. Defaults to Activity. */
  icon?: React.ComponentType<{ className?: string }>;
  align?: 'start' | 'center' | 'end';
  /** Override the popover width (default w-72). */
  contentClassName?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function OverviewPopover({
  label = 'Overview',
  badge,
  icon: Icon = Activity,
  align = 'end',
  contentClassName,
  disabled,
  children,
}: OverviewPopoverProps): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <StandardButton size="sm" disabled={disabled}>
          <Icon className="size-3" />
          {label}
          {badge !== undefined && <span className="text-muted-foreground tabular-nums">{badge}</span>}
        </StandardButton>
      </PopoverTrigger>
      <PopoverContent align={align} className={cn('w-72 p-0', contentClassName)}>
        {children}
      </PopoverContent>
    </Popover>
  );
}
