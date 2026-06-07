import { StandardButton } from './button';
import { cn } from '../lib/utils';

interface PaginationProps {
  page: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
  showNumbers?: boolean;
  className?: string;
}

export function Pagination({
  page,
  totalPages,
  total,
  onPageChange,
  showNumbers = true,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      className={cn('flex items-center justify-center gap-3 py-2 border-t border-border flex-shrink-0', className)}
      aria-label="Pagination"
    >
      <StandardButton
        size="sm"
        onClick={() => {
          onPageChange(page - 1);
        }}
        disabled={page === 0}
        aria-label="Previous page"
      >
        Prev
      </StandardButton>
      {showNumbers && (
        <span className="text-sm text-muted-foreground tabular-nums">
          {page + 1} / {totalPages} ({total})
        </span>
      )}
      <StandardButton
        size="sm"
        onClick={() => {
          onPageChange(page + 1);
        }}
        disabled={page >= totalPages - 1}
        aria-label="Next page"
      >
        Next
      </StandardButton>
    </nav>
  );
}
