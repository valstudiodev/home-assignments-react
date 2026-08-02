import { Product, Column } from "@/homeworks/Homework6/dataGrid/types/types";

export const BASE_URL = 'https://dummyjson.com'

export const COLUMNS: Column<Product>[] = [
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: "price",
    label: 'Price',
  },
  {
    key: 'category',
    label: 'Category',
  },
] as const;