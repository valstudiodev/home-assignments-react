import { IconSearch } from "@/assets/icons/Icons";
import { cn } from "@/utils/class/cn";

import {
  ChangeEvent,
  useEffect,
  useId,
  useState,
  useRef
} from "react";
import { SearchProps } from "./SearchTypes";

export function Search({
  value = '',
  placeholder = 'Search...',
  debounceTime = 300,
  disabled = false,
  label = '',
  onChange,
  onClear,
  className = '',
  labelClassName = '',
  wrapperClassName = '',
  inputClassName = '',
  iconClassName = '',
  ...props
}: SearchProps): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>(value);
  const inputId = useId()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  useEffect(() => {
    setSearchTerm(value)
  }, [value]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchTerm !== value) {
        onChange(searchTerm)
      }
    }, debounceTime);

    return () => window.clearTimeout(timer)
  }, [searchTerm, debounceTime, onChange, value]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value)
  }

  function handleClear(): void {
    setSearchTerm('')
    onChange('')
    onClear?.()
  }

  return (
    <div className={cn('search', disabled && 'search--disabled', className)}>

      {label && (
        <label
          htmlFor={inputId}
          className={cn('search__label', labelClassName)}
          aria-hidden="true">
          {label}
        </label>
      )}


      <div className={cn('search__wrapper', wrapperClassName)}>
        <span
          className={cn('search__icon', iconClassName)}
          aria-hidden="true"
        >
          <IconSearch />
        </span>

        <input
          {...props}
          id={inputId}
          type="search"
          className={cn('search__input', inputClassName)}
          value={searchTerm}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
        />

        {searchTerm && !disabled && (
          <button
            type="button"
            className="search__btn-clear"
            aria-label="Clear search"
            onClick={handleClear}>
            {/* &times; */}
          </button>
        )}
      </div>
    </div>
  )
}