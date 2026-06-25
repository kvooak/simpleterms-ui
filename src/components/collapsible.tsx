import { ChevronRight } from 'lucide-react';
import { Collapsible as CollapsiblePrimitive } from 'radix-ui';
import { cn } from '../lib/utils';

interface CollapsibleSectionProps {
  /** The heading text or ReactNode rendered in the trigger. */
  title: React.ReactNode;
  /** Optional trailing element rendered to the right of the title (e.g. badge, count). */
  trailing?: React.ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Callback when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether the section starts open. Only used when uncontrolled. */
  defaultOpen?: boolean;
  /** Class name applied to the trigger button. */
  triggerClassName?: string;
  /** Class name applied to the content wrapper. */
  contentClassName?: string;
  /** Class name applied to the root element. */
  className?: string;
  children: React.ReactNode;
}

function CollapsibleSection({
  title,
  trailing,
  open,
  onOpenChange,
  defaultOpen = false,
  triggerClassName,
  contentClassName,
  className,
  children,
}: CollapsibleSectionProps): React.JSX.Element {
  return (
    <CollapsiblePrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      className={cn('group/collapsible', className)}
    >
      <CollapsiblePrimitive.CollapsibleTrigger asChild>
        <div
          role="button"
          tabIndex={0}
          className={cn(
            'flex items-center gap-1.5 w-full text-left',
            'cursor-pointer hover:bg-muted/50 dark:hover:bg-accent transition-colors',
            'px-3 py-2',
            triggerClassName
          )}
        >
          <ChevronRight
            className={cn(
              'size-3.5 text-muted-foreground shrink-0',
              'transition-transform duration-150',
              'group-data-[state=open]/collapsible:rotate-90'
            )}
            aria-hidden="true"
          />
          <span className="text-base font-medium flex-1">{title}</span>
          {trailing !== undefined && <span className="shrink-0">{trailing}</span>}
        </div>
      </CollapsiblePrimitive.CollapsibleTrigger>

      <CollapsiblePrimitive.CollapsibleContent className={contentClassName}>
        {children}
      </CollapsiblePrimitive.CollapsibleContent>
    </CollapsiblePrimitive.Root>
  );
}

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleSection };
export type { CollapsibleSectionProps };
