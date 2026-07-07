import { SearchInputProps } from "./types";

export function SearchInput({ ref, value, onChange }: SearchInputProps): React.JSX.Element {
  return (
    <div className="search-input-wrapper
    mb-5">
      <input type="text"
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter a name to search for..."
        className="search-input border-bg-dark 
        py-3 px-2 rounded w-75 border-2"
      />
    </div>
  )
}