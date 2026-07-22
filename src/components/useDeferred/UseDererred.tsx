import { product } from "@/constants/products/Test";
import { title } from "node:process";
import { useDeferredValue, useState } from "react";
import { useMemo, memo } from "react";

interface Product {
  id: number;
  title: string;
}
interface ProductsListProps {
  products: Product[]
}

const products: Product[] = Array.from(
  { length: 10000 },
  (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
  })
)

export function SearchDachboard(): React.JSX.Element {
  const [search, setSearch] = useState<string>('')

  const deferredSearch = useDeferredValue(search)

  // const filteredProducts = products.filter((product) =>
  //   product.title
  //     .toLowerCase()
  //     .includes(search.toLowerCase())
  // )

  const filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(deferredSearch.toLowerCase())
  )

  // const filteredProducts = useMemo(() => {
  //   const query = deferredSearch.toLowerCase()
  //   return products.filter((product) =>
  //     product.title.toLowerCase().includes(query)
  //   )
  // }, [deferredSearch])

  return (
    <div className="search-dachboard">
      <input type="text"
        className="border bg-gray-50 rounded text-black
        p-2 font-semibold"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Input: {search}</p>
      {/* <p>Deferred: {deferredSearch}</p> */}
      <p>Found: {filteredProducts.length}</p>

      <ProductList products={filteredProducts} />
    </div>
  )
}

function ProductList({ products }: ProductsListProps): React.JSX.Element {
  console.log('List render');

  return (
    <div>
      {products.map((product) => {
        // Штучно навантажуємо CPU
        let total = 0;

        for (let i = 0; i < 10000; i++) {
          total += Math.sqrt(i);
        }

        return (
          <div key={product.id}>
            {product.title} - {Math.round(total)}
          </div>
        );
      })}
    </div>
  );
}



