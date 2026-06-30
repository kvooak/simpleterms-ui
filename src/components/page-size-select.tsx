import { DropdownSelect } from './select';

export interface PageSizeSelectProps {
  value: number;
  onChange: (size: number) => void;
  /** Selectable page sizes. Default: [20, 50, 100, 200, 500]. */
  options?: number[];
  /** Accessible label for the control. Default: "Rows per page". */
  label?: string;
  className?: string;
}

const DEFAULT_PAGE_SIZES: number[] = [20, 50, 100, 200, 500];

export function PageSizeSelect({
  value,
  onChange,
  options = DEFAULT_PAGE_SIZES,
  label = 'Rows per page',
  className,
}: PageSizeSelectProps) {
  return (
    <DropdownSelect<string>
      value={String(value)}
      onValueChange={(next) => {
        onChange(Number(next));
      }}
      options={options.map((size) => ({ value: String(size), label: String(size) }))}
      aria-label={label}
      className={className}
    />
  );
}
