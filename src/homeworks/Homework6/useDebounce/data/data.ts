interface Product {
  id: number;
  title: string;
}

export interface ProductsProps {
  products: Product[];
}

export const products: Product[] = Array.from(
  { length: 1000 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`
  })
)

