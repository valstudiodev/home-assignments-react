import { useCallback, useState } from "react";
import React from "react";


export function Parent(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log('Click');
  }, [])

  return (
    <div className="bg-gray p-4 flex flex-col gap-3">
      <button className="bg-amber-900 p-3" onClick={() => setCount(count + 1)}>{count}</button>
      <Child onClick={handleClick} />
    </div>
  )
}

const Child = React.memo(
  function Child({ onClick }: { onClick: () => void }): React.JSX.Element {

    console.log('Child render');

    return (
      <button
        onClick={onClick}
        className="bg-amber-600 p-3">
        Click
      </button>
    )
  }
)

// ===================================================
// ==================== usCallback====================
// ===================================================
interface Product {
  id: string;
  title: string;
  price: number;
}
interface ProductCardProps {
  product: Product;
  onAdd: (id: string) => void;
}
interface ProductsProps {
  products: Product[];
  onAdd: (id: string) => void;
}
const products: Product[] = [
  {
    id: '1',
    title: 'Phone',
    price: 500
  },
  {
    id: '2',
    title: 'Laptop',
    price: 1200
  }
];

const ProductCard = React.memo(
  function ProductCard({ product, onAdd }: ProductCardProps): React.JSX.Element {
    console.log('Product card render:', product.title);

    return (
      <div className="bg-lightgrey p-3">
        <h3>{product.title}</h3>

        <p>{product.price}$</p>

        <button
          onClick={() => onAdd(product.id)}
          className="bg-amber-950 p-2 rounded-2xl"
        >
          Add
        </button>
      </div>
    )
  }
)

const ProductList = React.memo(
  function ProductList({ products, onAdd }: ProductsProps): React.JSX.Element {
    console.log("Product list render");

    return (
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onAdd={onAdd} />
          </li>
        ))}
      </ul>
    )
  }
)

export function TestApp(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  const handleAdd = useCallback((id: string) => {
    console.log('Add product', id);
  }, [])


  // function handleAdd(id: string): void {
  //   console.log('Add product', id);
  // }

  return (
    <>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-bg-card p-2 rounded-2xl flex gap-2">
        Count
        <span>{count}</span>
      </button>

      <ProductList
        products={products}
        onAdd={handleAdd}
      />
    </>
  )
}

// ======================
interface ButtonProps {
  label: string;
  onClick: () => void
}

const Button = React.memo(
  function Button({ label, onClick }: ButtonProps): React.JSX.Element {
    console.log(`Render: ${label}`);

    return (
      <button
        className="bg-border p-2 rounded-2xl"
        onClick={onClick}>{label}</button>
    )
  }
)

export function AppCallback(): React.JSX.Element {
  console.log('Render App');

  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  // const handleClick = () => {
  //   setCount(prev => prev + 1)
  // }

  return (
    <div className="bg-bg-card p-4 rounded-2xl">
      <p className="bg-amber-800 p-2">Count: {count}</p>
      <Button onClick={handleClick} label="Click me" />
      <button
        className="bg-gray-500 p-2 rounded-2xl"
        onClick={() => setToggle(!toggle)}>
        Toggle: {toggle ? 'On' : 'Off'}
      </button>
    </div>
  )
}