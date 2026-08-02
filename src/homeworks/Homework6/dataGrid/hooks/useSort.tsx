import { useState, useCallback } from "react";

type SortDirection = 'asc' | 'desc'

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export default function useSort<T>() {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  const handleSort = useCallback((key: keyof T): void => {
    // console.log(key);

    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction:
            prev.direction === 'asc' ? 'desc' : 'asc'
        }
      }
      return {
        key,
        direction: 'asc',
      }
    })
  }, [])

  return {
    sortConfig,
    handleSort,
  }
}