import { useDeferredValue, useState } from "react";
import { useDebounce } from "@/homeworks/Homework6/dataGrid/hooks/useDebounce";

interface UseSearchOptions {
  delay?: number;
}

export default function useSearch({ delay = 500 }: UseSearchOptions) {
  const [search, setSearch] = useState<string>('');

  const deferredSearch = useDeferredValue(search)

  const debouncedSearch = useDebounce(search, delay);

  return {
    search,
    setSearch,
    deferredSearch,
    debouncedSearch,
  }
} 