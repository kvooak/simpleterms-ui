// Teach React's `CSSProperties` about CSS custom properties (`--foo`) so
// inline `style={{ '--sidebar-width': … }}` type-checks natively instead of
// needing an `as React.CSSProperties` cast at every call site.
//
// The empty type-only import makes this file a module so the augmentation
// merges into the real `react` declaration rather than shadowing it.
import type {} from 'react';

declare module 'react' {
  // An index signature (not a Record) is required to merge into the existing interface.
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number | undefined;
  }
}
