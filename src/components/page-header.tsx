interface PageHeaderProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: React.ReactNode;
  /** Inline navigation tabs rendered in the header band, after the title. */
  tabs?: React.ReactNode;
  /** Controls pushed to the far (right) end of the band — e.g. a search field or action button. */
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({ icon: Icon, title, subtitle, tabs, actions, children }: PageHeaderProps) {
  return (
    <div className="px-5 py-3 border-b border-border flex-shrink-0 flex items-center gap-3">
      {Icon !== undefined && <Icon className="size-6 text-muted-foreground" />}
      <h1 className="text-xl font-semibold">{title}</h1>
      {subtitle !== undefined && <span className="text-sm text-muted-foreground">{subtitle}</span>}
      {children}
      {tabs}
      {actions !== undefined && <div className="ml-auto">{actions}</div>}
    </div>
  );
}
