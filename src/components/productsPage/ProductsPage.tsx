import { useDeferredValue, useMemo, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { ProductsResponse, Product } from "./ProductsType";
import { Search } from "@/UI/search/Search";
import { SpinnerOpen } from "@/components/loader/spinnerOpen/SpinnerOpen";
import { Toast } from "@/UI/toast/Toast";

export function ProductsPage(): React.JSX.Element {
  const [search, setSearch] = useState<string>('')

  const deferredSearch = useDeferredValue(search)

  const { data, isLoading, error } = useFetch<ProductsResponse>('https://dummyjson.com/products')

  const filteredItems = useMemo(() => {
    return (
      data?.products.filter((item: Product) => (
        item.title
          .toLowerCase()
          .includes(deferredSearch.toLowerCase())
      )) ?? []
    )
  }, [data, deferredSearch])

  if (isLoading) return <SpinnerOpen />

  if (error) return <Toast type="error" message={error.message || 'Не вдалося завантажити товари'} />


  return (
    <section className="form-products
    flex flex-col gap-4 max-w-125 border p-4">
      <Search
        value={search} onChange={setSearch}
        wrapperClassName="flex items-center gap-2"
        inputClassName="grow py-1 pl-2 border rounded" />
      <ul className="form-products__list
      w-full">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  )
}