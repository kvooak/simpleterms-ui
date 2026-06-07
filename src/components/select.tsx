import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import * as React from 'react';
import { cn } from '../lib/utils';

// ── Internal primitives (not exported) ──────────────────────────────────────

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" className={cn('scroll-my-1', className)} {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

// One canonical trigger style — height, padding, and font are fixed here so
// every dropdown in the app reads identically. Call sites may only adjust
// width (and other layout) via `className`; they cannot change the size or
// font. This mirrors the workspace switcher, the reference dropdown.
function SelectTrigger({
  className,
  showChevron = true,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  showChevron?: boolean;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "border-border bg-white dark:bg-input/30 data-placeholder:text-muted-foreground dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border h-10 py-2 pr-2 pl-2.5 text-sm select-none focus-visible:ring-1 aria-invalid:ring-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      {showChevron && (
        <SelectPrimitive.Icon asChild>
          <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" />
        </SelectPrimitive.Icon>
      )}
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'end',
  sideOffset = 2,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground rounded-none shadow-none relative z-50 min-w-[var(--radix-select-trigger-width)] w-max max-w-80 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto',
          'border border-border',
          className
        )}
        position={position}
        align={align}
        sideOffset={sideOffset}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)] py-0.5">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-primary focus:text-primary-foreground not-data-[variant=destructive]:focus:**:text-primary-foreground gap-2 rounded-none py-1 pr-7 pl-2 text-sm mx-0.5 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-auto cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-1.5 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none size-3" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-0.5 border-b border-border [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-0.5 border-t border-border [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
}

// ── Public wrapper (the only exported component) ────────────────────────────

// Radix Select.Item forbids empty-string values, so we swap them for a sentinel.
const EMPTY_SENTINEL = '__empty__';

interface DropdownSelectOption<T extends string = string> {
  value: T;
  label: string | React.ReactNode;
  className?: string;
}

interface DropdownSelectGroup<T extends string = string> {
  label: string;
  options: DropdownSelectOption<T>[];
}

function isGroup<T extends string>(
  item: DropdownSelectOption<T> | DropdownSelectGroup<T>
): item is DropdownSelectGroup<T> {
  return 'options' in item;
}

function toInternalValue(v: string): string {
  return v === '' ? EMPTY_SENTINEL : v;
}

function toExternalValue(v: string): string {
  return v === EMPTY_SENTINEL ? '' : v;
}

interface DropdownSelectProps<T extends string = string> {
  value: T;
  onValueChange: (value: T) => void;
  /** Flat options or mixed array of options and groups. */
  options: (DropdownSelectOption<T> | DropdownSelectGroup<T>)[];
  placeholder?: string;
  showChevron?: boolean;
  disabled?: boolean;
  /** Layout only (e.g. width). Height and font are fixed by the component. */
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
  'aria-label'?: string;
}

function renderOption<T extends string>(option: DropdownSelectOption<T>): React.JSX.Element {
  const itemValue = toInternalValue(option.value);
  return (
    <SelectItem key={itemValue} value={itemValue} className={option.className}>
      {option.label}
    </SelectItem>
  );
}

function DropdownSelect<T extends string = string>({
  value,
  onValueChange,
  options,
  placeholder,
  showChevron = true,
  disabled,
  className,
  style,
  contentClassName,
  'aria-label': ariaLabel,
}: DropdownSelectProps<T>) {
  const internalValue = toInternalValue(value);

  function handleChange(v: string): void {
    // Safe cast: Radix Select only returns values from the options array,
    // which are typed as T in the options prop.
    onValueChange(toExternalValue(v) as T);
  }

  return (
    <Select value={internalValue} onValueChange={handleChange} disabled={disabled}>
      <SelectTrigger showChevron={showChevron} className={className} style={style} aria-label={ariaLabel}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {options.map((item, index) => {
          if (isGroup(item)) {
            return (
              <SelectGroup key={item.label !== '' ? item.label : String(index)}>
                {item.options.map(renderOption)}
              </SelectGroup>
            );
          }
          return renderOption(item);
        })}
      </SelectContent>
    </Select>
  );
}

export { DropdownSelect };
export type { DropdownSelectGroup, DropdownSelectOption, DropdownSelectProps };
