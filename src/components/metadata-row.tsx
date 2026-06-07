import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface MetadataRowProps {
  label: string;
  children: ReactNode;
  noBorder?: boolean;
}

export function MetadataRow({ label, children, noBorder = false }: MetadataRowProps) {
  return (
    <div className={cn('flex items-center justify-between py-1.5', !noBorder && 'border-b border-border')}>
      <span className="text-sm text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}
