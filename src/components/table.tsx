import * as React from 'react';
import { cn } from '../lib/utils';

type CellAlign = 'left' | 'right' | 'center';

const ALIGN_CLASS: Record<CellAlign, string> = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

/**
 * Flat, borderless-frame data table. Wraps the `<table>` in a horizontal-scroll
 * container so it never overflows its panel. Compose with the cell parts below.
 */
function Table({ className, wrapperClassName, ...props }: React.ComponentProps<'table'> & { wrapperClassName?: string }) {
  return (
    <div data-slot="table-wrapper" className={cn('w-full overflow-x-auto', wrapperClassName)}>
      <table data-slot="table" className={cn('w-full border-collapse text-sm', className)} {...props} />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={cn('[&_tr]:border-b [&_tr]:border-border', className)} {...props} />;
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
  return <td data-slot="table-cell" className={cn('px-3 py-2 align-top', ALIGN_CLASS[align], className)} {...props} />;
}

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell };
