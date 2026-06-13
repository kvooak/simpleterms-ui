import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as React$1 from 'react';
import { ReactNode, ComponentProps } from 'react';
import { Checkbox as Checkbox$1, Collapsible as Collapsible$1, Dialog as Dialog$1, DropdownMenu as DropdownMenu$1, Popover as Popover$1, Label as Label$1, Separator as Separator$1, Tooltip as Tooltip$1, Switch as Switch$1, Tabs as Tabs$1 } from 'radix-ui';

/** Merge Tailwind CSS classes with clsx, resolving conflicts via tailwind-merge. */
declare function cn(...inputs: ClassValue[]): string;

declare function useIsMobile(): boolean;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info" | "error-soft" | "warning-soft" | "caution-soft" | "retry-soft" | "info-soft" | "success-soft" | "purple-soft" | null | undefined;
    size?: "default" | "sm" | "xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, size, asChild, ...props }: React$1.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "link" | "ghost" | null | undefined;
    size?: "default" | "sm" | "xs" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ActionButtonProps extends React$1.ComponentProps<'button'>, Omit<VariantProps<typeof buttonVariants>, 'variant'> {
    asChild?: boolean;
    isLoading?: boolean;
}
/**
 * Primary action button. Navy background by default, red when destructive.
 * Examples: Create Ticket, Save, Start Agent, Approve, Delete.
 */
declare function ActionButton({ ref, destructive, className, ...props }: ActionButtonProps & {
    destructive?: boolean;
}): React$1.JSX.Element;
/**
 * Standard app button: gray bordered, for secondary actions. The default
 * non-primary button across toolbars, dialogs, and forms.
 * Examples: Workspaces, Tags, Cancel, Close, Stop Agent.
 */
declare function StandardButton({ ref, disabled, className, ...props }: ActionButtonProps): React$1.JSX.Element;
/**
 * Ghost icon button for inline icon actions.
 * Matches the dialog close button style: transparent bg, muted icon, hover highlight.
 * Examples: Edit, Delete, Add sub-workspace, clear search.
 */
declare function IconButton({ ref, size, className, ...props }: ActionButtonProps): React$1.JSX.Element;
declare const rowButtonVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    variant?: "option" | "row" | "tile" | "bare" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface RowButtonProps extends React$1.ComponentProps<'button'>, VariantProps<typeof rowButtonVariants> {
}
/**
 * Full-width, left-aligned clickable row, option, or tile. The structural
 * button for list rows, combobox options, expandable section headers, and
 * settings tiles. Visual style (hover, padding, borders, focus ring) is owned
 * by the variants — pick `variant` + `size` instead of injecting style
 * classes. `className` is for CONTENT LAYOUT ONLY (flex direction, gaps,
 * truncation); passing colors, padding, or hover styles through it is
 * discouraged. Deliberately not routed through the cva Button base: rows
 * wrap, stretch, and align-left, which the centered inline-flex base fights.
 * The `tile` variant ignores `size` — its p-3 wins via tailwind-merge order.
 */
declare function RowButton({ ref, className, variant, size, type, ...props }: RowButtonProps): React$1.JSX.Element;
/**
 * Inline text action styled as a link. For entity references, focus filters,
 * and other in-prose clickables that navigate or select rather than submit.
 */
declare function LinkButton({ ref, className, type, ...props }: React$1.ComponentProps<'button'>): React$1.JSX.Element;

declare function Checkbox({ className, checked, ...props }: React$1.ComponentProps<typeof Checkbox$1.Root>): React$1.JSX.Element;

interface ChipInputProps {
    /** Current list of values, rendered as removable chips. */
    values: string[];
    /** Called with the new list whenever a chip is added or removed. */
    onChange: (values: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    /** ARIA label for the text field (chips have their own remove labels). */
    inputAriaLabel?: string;
}
/**
 * Multi-value text input: type a value and press Enter (or comma) to commit it
 * as a chip; click a chip's × to remove it. Mirrors the ticket-tag entry UX.
 * Duplicates and blank entries are ignored. Pasting a comma/newline-separated
 * string commits each token as its own chip.
 */
declare function ChipInput({ values, onChange, placeholder, disabled, className, inputAriaLabel, }: ChipInputProps): React$1.JSX.Element;

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
declare function CollapsibleSection({ title, trailing, open, onOpenChange, defaultOpen, triggerClassName, contentClassName, className, children, }: CollapsibleSectionProps): React.JSX.Element;
declare const Collapsible: React$1.ForwardRefExoticComponent<Collapsible$1.CollapsibleProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<Collapsible$1.CollapsibleTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsibleContent: React$1.ForwardRefExoticComponent<Collapsible$1.CollapsibleContentProps & React$1.RefAttributes<HTMLDivElement>>;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof Dialog$1.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React$1.ComponentProps<'div'> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Root>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Content>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Item> & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Separator>): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Label>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenu$1.Group>): React$1.JSX.Element;

interface EmptyStateProps {
    children: ReactNode;
    className?: string;
}
declare function EmptyState({ children, className }: EmptyStateProps): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof Popover$1.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof Popover$1.Trigger>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof Popover$1.Anchor>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof Popover$1.Content>): React$1.JSX.Element;
declare function PopoverClose({ ...props }: React$1.ComponentProps<typeof Popover$1.Close>): React$1.JSX.Element;

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
declare function InfoPopover({ children, label, align, className }: InfoPopoverProps): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<'input'>): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof Label$1.Root>): React$1.JSX.Element;

/**
 * Column definition for {@link LogBoard}. Provide `header` for custom header
 * content (e.g. a sortable button); otherwise `label` renders as plain text.
 */
interface LogBoardColumn {
    key: string;
    label?: string;
    align?: 'left' | 'right';
    className?: string;
    header?: React.ReactNode;
}
interface LogBoardRowContext {
    /** 0-based index of the row within the current page. */
    index: number;
    expanded: boolean;
    onToggle: () => void;
}
interface LogBoardPaging {
    page: number;
    totalPages: number;
    total: number;
    onPageChange: (page: number) => void;
}
interface LogBoardProps<T> {
    columns: LogBoardColumn[];
    rows: T[];
    rowKey: (row: T) => string;
    /**
     * Render one row — a `<tr>` (plus its expanded detail `<tr>` when
     * `ctx.expanded`). The board owns the single-expanded-row state; rows
     * receive `ctx.onToggle` to flip it.
     */
    renderRow: (row: T, ctx: LogBoardRowContext) => React.ReactNode;
    isLoading?: boolean;
    loadingMessage?: string;
    emptyMessage?: string;
    /** Omit for unpaginated boards — no footer renders. */
    paging?: LogBoardPaging;
    tableClassName?: string;
}
/**
 * Shared log/table board: header row from column defs, expandable data rows,
 * loading/empty states, optional pagination footer. The chrome extracted from
 * the MCP Logs board so every log-shaped table renders identically.
 */
declare function LogBoard<T>({ columns, rows, rowKey, renderRow, isLoading, loadingMessage, emptyMessage, paging, tableClassName, }: LogBoardProps<T>): React.JSX.Element;

interface MetadataRowProps {
    label: string;
    children: ReactNode;
    noBorder?: boolean;
}
declare function MetadataRow({ label, children, noBorder }: MetadataRowProps): React$1.JSX.Element;

interface PageHeaderProps {
    icon?: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}
declare function PageHeader({ icon: Icon, title, subtitle, children }: PageHeaderProps): React$1.JSX.Element;

interface PageLayoutProps {
    icon?: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    subtitle?: React.ReactNode;
    /** Right-aligned controls rendered inside the header row (e.g. a dropdown). */
    headerActions?: React.ReactNode;
    /** Bar pinned below the scrollable body (e.g. auto-refresh hints). */
    footer?: React.ReactNode;
    children: React.ReactNode;
}
/**
 * Standard inner-page shell: page header + a single scrollable content
 * column, styled to match the Knowledge Graph page (full-width body,
 * `px-4 py-3` padding, `space-y-4` between sections). Every routed page
 * under AppLayout should use this so the page chrome stays consistent.
 */
declare function PageLayout({ icon, title, subtitle, headerActions, footer, children, }: PageLayoutProps): React.JSX.Element;

interface PaginationProps {
    page: number;
    totalPages: number;
    total: number;
    onPageChange: (page: number) => void;
    showNumbers?: boolean;
    className?: string;
}
declare function Pagination({ page, totalPages, total, onPageChange, showNumbers, className, }: PaginationProps): React$1.JSX.Element | null;

interface PanelProps {
    children: ReactNode;
    className?: string;
}
declare function Panel({ children, className }: PanelProps): React$1.JSX.Element;

interface DropdownSelectOption<T extends string = string> {
    value: T;
    label: string | React$1.ReactNode;
    className?: string;
}
interface DropdownSelectGroup<T extends string = string> {
    label: string;
    options: DropdownSelectOption<T>[];
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
    style?: React$1.CSSProperties;
    contentClassName?: string;
    'aria-label'?: string;
}
declare function DropdownSelect<T extends string = string>({ value, onValueChange, options, placeholder, showChevron, disabled, className, style, contentClassName, 'aria-label': ariaLabel, }: DropdownSelectProps<T>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof Separator$1.Root>): React$1.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof Dialog$1.Root>): React$1.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof Dialog$1.Trigger>): React$1.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof Dialog$1.Close>): React$1.JSX.Element;
declare function SheetContent({ className, children, side, showCloseButton, ...props }: React$1.ComponentProps<typeof Dialog$1.Content> & {
    side?: 'top' | 'right' | 'bottom' | 'left';
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Title>): React$1.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof Dialog$1.Description>): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof Tooltip$1.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof Tooltip$1.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof Tooltip$1.Content>): React$1.JSX.Element;

interface SidebarStateContextProps {
    state: 'expanded' | 'collapsed';
    open: boolean;
    openMobile: boolean;
    isMobile: boolean;
}
interface SidebarActionsContextProps {
    setOpen: (open: boolean) => void;
    setOpenMobile: (open: boolean) => void;
    toggleSidebar: () => void;
}
type SidebarContextProps = SidebarStateContextProps & SidebarActionsContextProps;
declare function useSidebarActions(): SidebarActionsContextProps;
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React$1.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
}): React$1.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof IconButton>): React$1.JSX.Element;
declare function SidebarRail({ className, ...props }: React$1.ComponentProps<typeof IconButton>): React$1.JSX.Element;
declare function SidebarInset({ className, ...props }: React$1.ComponentProps<'main'>): React$1.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<'div'> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<'ul'>): React$1.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<'li'>): React$1.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): React$1.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<'button'> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<'div'>): React$1.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<'div'> & {
    showIcon?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<'ul'>): React$1.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<'li'>): React$1.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<'a'> & {
    asChild?: boolean;
    size?: 'sm' | 'md';
    isActive?: boolean;
}): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<'div'>): React$1.JSX.Element;

interface StatCardProps {
    label: string;
    value: string;
    sub?: string;
}
declare function StatCard({ label, value, sub }: StatCardProps): React$1.JSX.Element;

declare function Switch({ className, ...props }: React$1.ComponentProps<typeof Switch$1.Root>): React$1.JSX.Element;

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
declare function TabNav({ items, ariaLabel }: TabNavProps): React.JSX.Element;
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
declare function ButtonTabNav({ value, onValueChange, items, ariaLabel }: ButtonTabNavProps): React.JSX.Element;

type CellAlign = 'left' | 'right' | 'center';
type SortDirection = 'asc' | 'desc';
/**
 * Flat, borderless-frame data table. Wraps the `<table>` in a horizontal-scroll
 * container so it never overflows its panel. Compose with the cell parts below.
 */
declare function Table({ className, wrapperClassName, ...props }: React$1.ComponentProps<'table'> & {
    wrapperClassName?: string;
}): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<'thead'>): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<'tbody'>): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<'tfoot'>): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<'tr'>): React$1.JSX.Element;
declare function TableHead({ className, align, ...props }: Omit<React$1.ComponentProps<'th'>, 'align'> & {
    align?: CellAlign;
}): React$1.JSX.Element;
declare function TableCell({ className, align, ...props }: Omit<React$1.ComponentProps<'td'>, 'align'> & {
    align?: CellAlign;
}): React$1.JSX.Element;
interface SortableTableHeadProps<K extends string> {
    label: React$1.ReactNode;
    /** The column this header sorts by. */
    sortKey: K;
    /** Currently sorted column, or undefined when nothing is sorted. */
    activeKey: K | undefined;
    direction: SortDirection;
    onSort: (key: K) => void;
    align?: CellAlign;
    className?: string;
}
/**
 * Clickable column header that toggles sort direction. The whole cell is the
 * hit target; an arrow shows the active direction, a faint up/down hints the
 * rest are sortable. Generic over the caller's sort-key union.
 */
declare function SortableTableHead<K extends string>({ label, sortKey, activeKey, direction, onSort, align, className, }: SortableTableHeadProps<K>): React$1.JSX.Element;
interface ExpandableRowProps {
    expanded: boolean;
    onToggle: () => void;
    /** Total column count INCLUDING the chevron column this adds, so the detail row spans the full width. */
    colSpan: number;
    /** Summary cells for the visible row (TableCell elements); the leading chevron cell is added for you. */
    children: React$1.ReactNode;
    /** Content revealed in the spanning detail row when expanded. */
    detail: React$1.ReactNode;
    className?: string;
    detailClassName?: string;
}
/**
 * Master-detail row: a clickable summary row with a rotating chevron, plus a
 * full-width detail row revealed when `expanded`. Expansion state is owned by
 * the caller (controlled), so several rows can stay open at once.
 */
declare function ExpandableRow({ expanded, onToggle, colSpan, children, detail, className, detailClassName }: ExpandableRowProps): React$1.JSX.Element;

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Root>): React$1.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.List>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof Tabs$1.Content>): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<'textarea'>): React$1.JSX.Element;

export { ActionButton, Badge, ButtonTabNav, type CellAlign, Checkbox, ChipInput, type ChipInputProps, Collapsible, CollapsibleContent, CollapsibleSection, type CollapsibleSectionProps, CollapsibleTrigger, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownSelect, type DropdownSelectGroup, type DropdownSelectOption, type DropdownSelectProps, EmptyState, ExpandableRow, IconButton, InfoPopover, Input, Label, LinkButton, LogBoard, type LogBoardColumn, type LogBoardPaging, type LogBoardRowContext, MetadataRow, PageHeader, PageLayout, Pagination, Panel, Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger, RowButton, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, type SortDirection, SortableTableHead, StandardButton, StatCard, Switch, TabNav, Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, cn, useIsMobile, useSidebar, useSidebarActions };
