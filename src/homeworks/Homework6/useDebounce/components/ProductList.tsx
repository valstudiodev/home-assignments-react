import { ProductsProps } from "@/homeworks/Homework6/useDebounce/data/data";

export default function ProductList({ products }: ProductsProps): React.JSX.Element {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title}
        </li>
      ))}
    </ul>
  )
}