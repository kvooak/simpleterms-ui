import { Search, X } from 'lucide-react';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { IconButton } from './button';
import { Input } from './input';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  /** Fires on every keystroke even when debouncing. Use for UI that needs instant feedback (e.g. popover visibility). */
  onChangeImmediate?: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
  /** When set, debounces the onChange callback by this many ms. Input stays responsive. */
  debounceMs?: number;
}

/**
 * Standard search box: search icon, clearable input, optional debounce. The
 * canonical filter/search control across toolbars and list views.
 */
function SearchInput({
  ref,
  value,
  onChange,
  onChangeImmediate,
  onSubmit,
  placeholder,
  className,
  debounceMs,
}: SearchInputProps & { ref?: React.Ref<HTMLInputElement> }) {
  const debounced = debounceMs !== undefined && debounceMs > 0;

  // Local state only used when debouncing - keeps typing responsive
  const [localValue, setLocalValue] = useState(value);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Sync external value to local (e.g. parent resets the field)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current !== undefined) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = useCallback(
    (v: string) => {
      onChangeImmediate?.(v);
      if (!debounced) {
        onChange(v);
        return;
      }
      setLocalValue(v);
      if (timerRef.current !== undefined) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onChange(v);
      }, debounceMs);
    },
    [onChange, onChangeImmediate, debounced, debounceMs]
  );

  const handleClear = useCallback(() => {
    if (timerRef.current !== undefined) clearTimeout(timerRef.current);
    onChangeImmediate?.('');
    setLocalValue('');
    onChange('');
  }, [onChange, onChangeImmediate]);

  const displayValue = debounced ? localValue : value;

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
      <Input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={displayValue}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onKeyDown={
          onSubmit !== undefined
            ? (e) => {
                if (e.key === 'Enter') onSubmit();
              }
            : undefined
        }
        className="pl-8 pr-8"
      />
      {displayValue !== '' && (
        <IconButton onClick={handleClear} size="icon-sm" className="absolute right-1 top-1/2 -translate-y-1/2">
          <X />
        </IconButton>
      )}
    </div>
  );
}

export { SearchInput };
export type { SearchInputProps };
