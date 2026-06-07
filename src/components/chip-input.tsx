import { XIcon } from 'lucide-react';
import * as React from 'react';
import { cn } from '../lib/utils';

export interface ChipInputProps {
  /** Current list of values, rendered as removable chips. */
  values: string[];
  /** Called with the new list whenever a chip is added or removed. */
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  /** ARIA label for the text field (chips have their own remove labels). */
  inputAriaLabel?: string;
}

/**
 * Multi-value text input: type a value and press Enter (or comma) to commit it
 * as a chip; click a chip's × to remove it. Mirrors the ticket-tag entry UX.
 * Duplicates and blank entries are ignored. Pasting a comma/newline-separated
 * string commits each token as its own chip.
 */
export function ChipInput({
  values,
  onChange,
  placeholder,
  disabled = false,
  className,
  inputAriaLabel,
}: ChipInputProps) {
  const [draft, setDraft] = React.useState('');

  const commit = (raw: string): void => {
    const tokens = raw
      .split(/[\n,]/)
      .map((t) => t.trim())
      .filter((t) => t !== '');
    if (tokens.length === 0) return;
    const next = [...values];
    for (const token of tokens) {
      if (!next.includes(token)) next.push(token);
    }
    onChange(next);
    setDraft('');
  };

  const removeAt = (index: number): void => {
    onChange(values.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      commit(draft);
    } else if (e.key === 'Backspace' && draft === '' && values.length > 0) {
      removeAt(values.length - 1);
    }
  };

  return (
    <div
      className={cn(
        'border-border bg-white dark:bg-input/30 flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-none border px-2 py-1.5 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-1',
        disabled && 'pointer-events-none cursor-not-allowed opacity-50',
        className
      )}
    >
      {values.map((value, index) => (
        <span
          key={value}
          className="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-none px-1.5 py-0.5 text-sm font-medium"
        >
          <span className="break-all">{value}</span>
          <button
            type="button"
            disabled={disabled}
            onClick={() => {
              removeAt(index);
            }}
            className="text-muted-foreground hover:text-foreground shrink-0"
            aria-label={`Remove ${value}`}
          >
            <XIcon className="size-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={draft}
        disabled={disabled}
        aria-label={inputAriaLabel}
        onChange={(e) => {
          setDraft(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          commit(draft);
        }}
        placeholder={values.length === 0 ? placeholder : undefined}
        className="placeholder:text-muted-foreground flex-1 bg-transparent text-base outline-none min-w-[8rem]"
      />
    </div>
  );
}
