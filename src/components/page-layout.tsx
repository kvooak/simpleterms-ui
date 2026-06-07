import { PageHeader } from './page-header';

interface PageLayoutProps {
  icon?: React.ComponentType<{ className?: string }>;
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
export function PageLayout({
  icon,
  title,
  subtitle,
  headerActions,
  footer,
  children,
}: PageLayoutProps): React.JSX.Element {
  return (
    <div className="flex flex-col flex-1 overflow-hidden w-full">
      <PageHeader icon={icon} title={title} subtitle={subtitle}>
        {headerActions}
      </PageHeader>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-3 space-y-4">{children}</div>
      </div>

      {footer}
    </div>
  );
}
