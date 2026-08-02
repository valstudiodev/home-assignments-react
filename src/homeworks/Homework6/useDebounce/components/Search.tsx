import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { products } from "../data/data";
import ProductList from "@/homeworks/Homework6/useDebounce/components/ProductList";

export default function Search(): React.JSX.Element {
  const [search, setSearch] = useState<string>('');

  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (!debouncedSearch) return

    console.log(`Fetching: ${debouncedSearch}`);

  }, [debouncedSearch]);

  const filteredProducts = useMemo(() => {
    const query = debouncedSearch.toLowerCase()
    return products.filter((product) => (
      product.title.includes(query)
    ))
  }, [debouncedSearch])

  return (
    <div className="search">
      <input
        className="border p-2"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />

      <ProductList products={filteredProducts} />
    </div>
  )
}