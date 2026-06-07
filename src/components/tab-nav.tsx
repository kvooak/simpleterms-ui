import { Link } from '@tanstack/react-router';
import { cn } from '../lib/utils';

// ── Shared styles ──

const wrapperClasses = cn(
  'bg-muted text-muted-foreground',
  'inline-flex w-fit items-center justify-center',
  'p-0.5 gap-0.5'
);

const baseClasses = cn(
  'inline-flex items-center justify-center gap-1.5',
  'px-3 py-2 h-9 text-sm font-medium whitespace-nowrap',
  'hover:text-foreground',
  'focus-visible:border-ring focus-visible:ring-ring/50',
  'focus-visible:ring-1 outline-none',
  '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  "[&_svg:not([class*='size-'])]:size-3.5"
);

const activeClasses = 'bg-background text-foreground';

// ── Route-based TabNav ──

interface TabNavItem {
  to: string;
  label: string;
  params?: Record<string, string>;
  children?: React.ReactNode;
  exact?: boolean;
}

interface TabNavProps {
  items: TabNavItem[];
  ariaLabel: string;
}

export function TabNav({ items, ariaLabel }: TabNavProps): React.JSX.Element {
  return (
    <nav aria-label={ariaLabel} className={wrapperClasses}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          params={item.params}
          activeOptions={{ exact: item.exact !== false }}
          activeProps={{ className: activeClasses }}
          inactiveProps={{ className: '' }}
          className={baseClasses}
        >
          {item.label}
          {item.children}
        </Link>
      ))}
    </nav>
  );
}

// ── Button-based TabNav (local state, not route-based) ──

interface ButtonTabNavItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ButtonTabNavProps {
  value: string;
  onValueChange: (value: string) => void;
  items: ButtonTabNavItem[];
  ariaLabel: string;
}

export function ButtonTabNav({ value, onValueChange, items, ariaLabel }: ButtonTabNavProps): React.JSX.Element {
  return (
    <div role="tablist" aria-label={ariaLabel} className={wrapperClasses}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          role="tab"
          aria-selected={value === item.value}
          className={cn(baseClasses, value === item.value && activeClasses)}
          onClick={() => {
            onValueChange(item.value);
          }}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}
