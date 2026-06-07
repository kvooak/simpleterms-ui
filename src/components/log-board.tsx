import { Fragment, useState } from 'react';
import { Pagination } from './pagination';
import { cn } from '../lib/utils';

/**
 * Column definition for {@link LogBoard}. Provide `header` for custom header
 * content (e.g. a sortable button); otherwise `label` renders as plain text.
 */
export interface LogBoardColumn {
  key: string;
  label?: string;
  align?: 'left' | 'right';
  className?: string;
  header?: React.ReactNode;
}

export interface LogBoardRowContext {
  /** 0-based index of the row within the current page. */
  index: number;
  expanded: boolean;
  onToggle: () => void;
}

export interface LogBoardPaging {
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
export function LogBoard<T>({
  columns,
  rows,
  rowKey,
  renderRow,
  isLoading = false,
  loadingMessage = 'Loading...',
  emptyMessage = 'Nothing recorded yet.',
  paging,
  tableClassName,
}: LogBoardProps<T>): React.JSX.Element {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  if (isLoading) {
    return <div className="text-sm text-muted-foreground py-8 text-center">{loadingMessage}</div>;
  }
  if (rows.length === 0) {
    return <div className="text-sm text-muted-foreground py-8 text-center">{emptyMessage}</div>;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className={cn('w-full text-left', tableClassName)}>
          <thead>
            <tr className="border-b border-border">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-3 py-2 text-xs font-medium text-muted-foreground uppercase',
                    col.align === 'right' && 'text-right',
                    col.className
                  )}
                >
                  {col.header ?? col.label ?? ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => {
              const key = rowKey(row);
              return (
                <Fragment key={key}>
                  {renderRow(row, {
                    index,
                    expanded: expandedKey === key,
                    onToggle: () => {
                      setExpandedKey(expandedKey === key ? null : key);
                    },
                  })}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      {paging !== undefined && (
        <Pagination
          page={paging.page}
          totalPages={paging.totalPages}
          total={paging.total}
          onPageChange={paging.onPageChange}
        />
      )}
    </>
  );
}
