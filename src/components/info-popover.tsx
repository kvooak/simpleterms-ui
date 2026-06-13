import { Info } from 'lucide-react';
import { IconButton } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface InfoPopoverProps {
  /** Read-only content rendered inside the popover panel. */
  children: ReactNode;
  /** Tooltip + accessible label on the trigger button. */
  label?: string;
  /** Panel alignment against the trigger (forwarded to PopoverContent). */
  align?: ComponentProps<typeof PopoverContent>['align'];
  /** Extra classes for the panel; defaults to a fixed-width column. */
  className?: string;
}

/**
 * Ghost info icon button that reveals read-only details in a popover.
 * For surfacing metadata next to an action without spending toolbar space —
 * pass the panel body as children (e.g. a stack of MetadataRow).
 */
export function InfoPopover({ children, label = 'Info', align = 'end', className }: InfoPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton title={label} aria-label={label}>
          <Info className="size-4" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent align={align} className={cn('w-80', className)}>
        {children}
      </PopoverContent>
    </Popover>
  );
}
