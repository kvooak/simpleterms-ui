interface PageHeaderProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({ icon: Icon, title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="px-5 py-3 border-b border-border flex-shrink-0 flex items-center gap-3">
      {Icon !== undefined && <Icon className="size-6 text-muted-foreground" />}
      <h1 className="text-xl font-semibold">{title}</h1>
      {subtitle !== undefined && <span className="text-sm text-muted-foreground">{subtitle}</span>}
      {children}
    </div>
  );
}
