import { SearchInputProps } from "@/homeworks/Homework6/dataGrid/types";
import { Search } from "lucide-react";

export default function SearchInput({ value, onChange }: SearchInputProps): React.JSX.Element {
  return (
    <label className="input-field 
    flex items-center gap-2 grow">
      <Search size={20}
      />
      <input
        className="border p-2 grow"
        aria-label="Search products"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        type="search" />
    </label>
  )
}
