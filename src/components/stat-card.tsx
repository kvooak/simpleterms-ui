interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
}

export function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <div className="border border-border bg-card px-5 py-4 card-elevated">
      <div className="text-sm text-muted-foreground uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {sub !== undefined && <div className="text-sm text-muted-foreground mt-0.5">{sub}</div>}
    </div>
  );
}
