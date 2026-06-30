import { useCallback, useState } from 'react';

export interface UsePaginationOptions {
  initialPage?: number;
  initialPageSize?: number;
}

export interface UsePaginationResult {
  page: number;
  pageSize: number;
  offset: number;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  reset: () => void;
  /** Total page count for a given row total (never below 1). */
  pageCount: (total: number) => number;
}

/**
 * Headless pagination state. Changing the page size resets to the first page.
 * Pair with the `Pagination` component (display) and `PageSizeSelect` (size control).
 */
export function usePagination(options: UsePaginationOptions = {}): UsePaginationResult {
  const { initialPage = 0, initialPageSize = 10 } = options;
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const setPageSize = useCallback((size: number): void => {
    setPageSizeState(size);
    setPage(0);
  }, []);

  const reset = useCallback((): void => {
    setPage(0);
  }, []);

  const pageCount = useCallback(
    (total: number): number => Math.max(1, Math.ceil(total / pageSize)),
    [pageSize],
  );

  return { page, pageSize, offset: page * pageSize, setPage, setPageSize, reset, pageCount };
}
