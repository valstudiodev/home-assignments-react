import { useFetch } from "@/hooks/useFetch";
// import { SpinnerOpen } from "@/components/loader";
import { Spinner } from "@/components/loader";
import { Toast } from "@/UI/toast/Toast";

type Product = {
  id: number;
  title: string;
}
type ProductsResponse = {
  products: Product[];
}

export function TestUseFetch(): React.JSX.Element {
  const { data, isLoading, error } = useFetch<ProductsResponse>(
    'https://dummyjson.com/products'
  )

  if (isLoading) return <Spinner size="medium" />

  return (
    <div>
      {error && (
        <Toast
          type="info"
          message={error.message || 'Не вдалося завантажити товари'} />
      )}

      <h2>
        Products: {data?.products.length}
      </h2>

      {data?.products.map((product) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  )
}


{/* <div>Error: {error.message}</div> */ }