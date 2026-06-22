# simpleterms-ui

Brutalist Win2000/IBM-inspired flat UI kit. React 19 + Tailwind v4 + Radix primitives.
Sharp corners (`--radius: 0`), zero transitions, Gruvbox-tuned warm off-white light / charcoal dark
themes (with the `gb-*` accent palette that flips faded/bright per theme), IBM Plex Sans typography.

30 components: badge, button, checkbox, chip-input, collapsible, dialog, dropdown-menu,
empty-state, field, info-popover, input, label, log-board, metadata-row, overview-popover,
page-header, page-layout, pagination, panel, popover, select, separator, sheet, sidebar, skeleton,
stat-card, switch, tab-nav, table, tabs, textarea, tooltip, plus the `cn()` class-merge helper
and `useIsMobile()`.

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

- Single accent hue (Gruvbox aqua `#83a598`); status via `signal-success/warning/error` and the
  `gb-*` accent tokens (`gb-red`, `gb-green`, `gb-yellow`, `gb-blue`, `gb-purple`, `gb-aqua`,
  `gb-orange`, `gb-gray`), which flip to bright variants under `.dark`.
- `text-sm` body, section titles `text-sm uppercase tracking-wider text-foreground/70`.
- Spacing: page headers `px-5 py-3`, toolbars `px-5 py-2.5`, content `px-5 py-4`.
- No shadows (`card-elevated` is intentionally flat), no rounded corners, instant state changes.

## License

MIT
