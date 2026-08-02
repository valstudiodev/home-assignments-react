import { useMemo } from "react";
import { SortConfig } from "./useSort";

interface FilterOptions<T> {
  search?: string;
  searchField?: keyof T;
  sortConfig?: SortConfig<T> | null;
}

interface UseDataFilterProps<T> {
  data: T[];
  options: FilterOptions<T>;
}

export default function useDataFilter<T>({ data, options }: UseDataFilterProps<T>): T[] {
  console.log('Data filter');

  const { search, searchField, sortConfig } = options

  const processedData = useMemo(() => {
    let result = [...data]

    const query = search?.toLowerCase().trim()

    if (query && searchField) {
      result = result.filter((item) => {
        const value = item[searchField]

        return String(value)
          .toLowerCase()
          .includes(query)
      })
    }

    if (sortConfig) {
      result.sort((a, b) => {
        const firstValue = String(a[sortConfig.key] ?? '').toLowerCase();
        const secondValue = String(b[sortConfig.key] ?? '').toLowerCase();

        if (firstValue < secondValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }

        if (firstValue > secondValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }

        return 0
      })
    }

    return result
  }, [data, search, searchField, sortConfig]);

  return processedData
}