import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface EmptyStateProps {
  children: ReactNode;
  className?: string;
}

export function EmptyState({ children, className }: EmptyStateProps) {
  return (
    <div className={cn('text-center py-16', className)}>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
