import { ProductListProps } from "./ProductCard.types";
import { ProductItem } from "./ProductItem";

export function ProductList({ products, renderActions }: ProductListProps): React.JSX.Element {
  return (
    <ul className='product-list ml-px
      grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-[480px]:grid-cols-1'>
      {products.map((product) => (
        <li key={product.id} >
          <ProductItem product={product}>
            {renderActions && renderActions(product)}
          </ProductItem>
        </li>
      ))}
    </ul>
  )
}