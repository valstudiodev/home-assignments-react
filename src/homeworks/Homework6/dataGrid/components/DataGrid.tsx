import { SortButtons, SearchInput, GridRow } from "@/homeworks/Homework6/dataGrid/components";
import { BASE_URL } from "@/homeworks/Homework6/dataGrid/data";
import { useFetch } from "@/hooks/useFetch";
import { ProductsResponse, Product } from "@/homeworks/Homework6/dataGrid/types";
import { useDataFilter, useSearch, useSort } from "../hooks";

export default function DataGrid(): React.JSX.Element {
  console.log('-----Data Grid render-----');

  // ====== search =====
  const { search, setSearch, deferredSearch } = useSearch({ delay: 500 })

  // ====== sort ======
  const { sortConfig, handleSort } = useSort<Product>()

  // ===== fetch =====
  const { data, isLoading, error } = useFetch<ProductsResponse>(`${BASE_URL}/products`)

  // ===== filter + sort =====
  const processedProducts = useDataFilter<Product>({
    data: data?.products ?? [],
    options: {
      search: deferredSearch,
      searchField: 'title',
      sortConfig,
    }
  });

  if (isLoading) return <div className="abs-pos-center text-2xl">Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div className="data-grid mb-20">
      <div className="header-wrap flex justify-between
      gap-5 mb-5 max-[1023px]:flex-col">
        <SearchInput onChange={setSearch} value={search} />
        <SortButtons onSort={handleSort} sortConfig={sortConfig} />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3">
        {processedProducts.map((product) => (
          <GridRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}