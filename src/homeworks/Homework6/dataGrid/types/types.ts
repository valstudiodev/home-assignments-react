export type SortDirection = 'asc' | 'desc'

export interface Product {
  id: number;
  title: string;
  description?: string;
  category?: string;
  price?: number;
}

export type SortConfig<T> = {
  key: keyof T;
  direction: SortDirection;
}

export interface GridHeaderProps<T> {
  sortConfig: SortConfig<T> | null;
  onSort: (key: keyof T) => void
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface GridRowProps {
  product: Product
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

type ColumnKey = keyof Product

export interface Column {
  key: ColumnKey;
  label: string;
}