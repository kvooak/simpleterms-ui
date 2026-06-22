import { ArrowDown, ArrowUp, ChevronRight, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { cn } from '../lib/utils';

type CellAlign = 'left' | 'right' | 'center';

type SortDirection = 'asc' | 'desc';

const ALIGN_CLASS: Record<CellAlign, string> = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

/**
 * Flat, borderless-frame data table. Wraps the `<table>` in a horizontal-scroll
 * container so it never overflows its panel. Compose with the cell parts below.
 */
function Table({
  className,
  wrapperClassName,
  ...props
}: React.ComponentProps<'table'> & { wrapperClassName?: string }) {
  return (
    <div data-slot="table-wrapper" className={cn('w-full overflow-x-auto', wrapperClassName)}>
      <table data-slot="table" className={cn('w-full border-collapse text-sm', className)} {...props} />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead data-slot="table-header" className={cn('[&_tr]:border-b [&_tr]:border-border', className)} {...props} />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={cn('[&_tr:last-child]:border-0', className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('border-t border-border font-semibold [&_tr]:border-0', className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn('border-b border-border/50 transition-colors hover:bg-muted/40', className)}
      {...props}
    />
  );
}

function TableHead({
  className,
  align = 'left',
  ...props
}: Omit<React.ComponentProps<'th'>, 'align'> & { align?: CellAlign }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'px-3 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap',
        ALIGN_CLASS[align],
        className
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  align = 'left',
  ...props
}: Omit<React.ComponentProps<'td'>, 'align'> & { align?: CellAlign }) {
  return (
    <td data-slot="table-cell" className={cn('px-3 py-2 align-top', ALIGN_CLASS[align], className)} {...props} />
  );
}

interface SortableTableHeadProps<K extends string> {
  label: React.ReactNode;
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
function SortableTableHead<K extends string>({
  label,
  sortKey,
  activeKey,
  direction,
  onSort,
  align = 'left',
  className,
}: SortableTableHeadProps<K>) {
  const isActive = activeKey === sortKey;
  return (
    <TableHead align={align} className={cn('p-0', className)}>
      <button
        type="button"
        onClick={() => {
          onSort(sortKey);
        }}
        className={cn(
          'inline-flex w-full items-center gap-1 px-3 py-2 transition-colors hover:text-foreground',
          align === 'right' && 'flex-row-reverse',
          align === 'center' && 'justify-center',
          isActive && 'text-foreground'
        )}
      >
        {label}
        {isActive ? (
          direction === 'asc' ? (
            <ArrowUp className="size-3" />
          ) : (
            <ArrowDown className="size-3" />
          )
        ) : (
          <ChevronsUpDown className="size-3 opacity-40" />
        )}
      </button>
    </TableHead>
  );
}

interface ExpandableRowProps {
  expanded: boolean;
  onToggle: () => void;
  /** Total column count INCLUDING the chevron column this adds, so the detail row spans the full width. */
  colSpan: number;
  /** Summary cells for the visible row (TableCell elements); the leading chevron cell is added for you. */
  children: React.ReactNode;
  /** Content revealed in the spanning detail row when expanded. */
  detail: React.ReactNode;
  className?: string;
  detailClassName?: string;
}

/**
 * Master-detail row: a clickable summary row with a rotating chevron, plus a
 * full-width detail row revealed when `expanded`. Expansion state is owned by
 * the caller (controlled), so several rows can stay open at once.
 */
function ExpandableRow({
  expanded,
  onToggle,
  colSpan,
  children,
  detail,
  className,
  detailClassName,
}: ExpandableRowProps) {
  return (
    <>
      <TableRow className={cn('cursor-pointer', className)} aria-expanded={expanded} onClick={onToggle}>
        <TableCell className="w-6 pr-0">
          <ChevronRight
            className={cn(
              'size-3.5 text-muted-foreground transition-transform',
              expanded && 'rotate-90 text-foreground'
            )}
          />
        </TableCell>
        {children}
      </TableRow>
      {expanded && (
        <TableRow className={cn('bg-muted/30 hover:bg-muted/30', detailClassName)}>
          <TableCell colSpan={colSpan}>{detail}</TableCell>
        </TableRow>
      )}
    </>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  SortableTableHead,
  ExpandableRow,
};
export type { CellAlign, SortDirection };
