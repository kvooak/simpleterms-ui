# simpleterms-ui

Brutalist Win2000/IBM-inspired flat UI kit. React 19 + Tailwind v4 + Radix primitives.
Sharp corners (`--radius: 0`), zero transitions, oklch-tuned warm-cream light / charcoal dark themes,
IBM Plex Sans typography.

28 components: badge, button, checkbox, chip-input, collapsible, dialog, dropdown-menu,
empty-state, input, label, log-board, metadata-row, page-header, page-layout, pagination,
panel, popover, select, separator, sheet, sidebar, skeleton, stat-card, switch, tab-nav,
tabs, textarea, tooltip — plus the `cn()` class-merge helper and `useIsMobile()`.

## Install

```bash
npm i github:kvooak/simpleterms-ui
# peers
npm i react react-dom radix-ui lucide-react @tanstack/react-router
```

`@tanstack/react-router` is only exercised by `sidebar`, `tab-nav`, and `button` link variants —
install it even if unused so module resolution succeeds.

## Setup (Tailwind v4)

In your main CSS:

```css
@import 'tailwindcss';
@import 'simpleterms-ui/theme.css';
@source '../node_modules/simpleterms-ui/dist';
```

The `@source` directive lets Tailwind scan the kit's class names. Dark mode is class-based:
toggle `.dark` on `<html>`.

## Use

```tsx
import { Button, StatCard, PageHeader, cn } from 'simpleterms-ui';
```

## Design rules

- Single accent hue (teal-blue, oklch hue 250); status via `signal-success/warning/error` tokens.
- `text-sm` body, section titles `text-sm uppercase tracking-wider text-foreground/70`.
- Spacing: page headers `px-5 py-3`, toolbars `px-5 py-2.5`, content `px-5 py-4`.
- No shadows (`card-elevated` is intentionally flat), no rounded corners, instant state changes.

## License

MIT
