import { useCallback, useMemo, useState, memo } from "react";
import { products } from "../../data/products";

// ============================= useMemo ===========================
interface Item {
  id: number;
  value: number;
}

interface ComponentProps {
  items: Item[];
  filterValue: number;
}

export const SAMPLE_ITEMS: Item[] = [
  { id: 1, value: 15 },
  { id: 2, value: 42 },
  { id: 3, value: 8 },
  { id: 4, value: 99 },
  { id: 5, value: 23 },
];

export const FilteredList: React.FC = () => {
  const [filterValue, setFilterValue] = useState<number>(20);

  const filteredItems = useMemo<Item[]>(() => {
    return SAMPLE_ITEMS.filter((item) => item.value > filterValue);
  }, [filterValue]);

  return (
    <div className="filter">
      <input
        type="number"
        value={filterValue}
        onChange={(e) => setFilterValue(Number(e.target.value))}
        className="filter__input"
      />
      <ul className="filter__list">
        {filteredItems.map((item) => (
          <li key={item.id} className="filter__item">
            Value: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};


//  task 1
export function DoubleNumber(): React.JSX.Element {
  const [number, setNumber] = useState<number>(10)

  const result = useMemo(() => {
    console.log('Calculating...');

    return number * 2
  }, [number])


  return (
    <div>
      <div>Number: {number}</div>
      <div>Result double: {result}</div>
      <button onClick={() => setNumber(prev => prev + 1)}>
        +1
      </button>
    </div>
  )
}
export function FullName(): React.JSX.Element {
  const [firstName, setFirstName] = useState<string>('Jonh');
  const [lastName, setLastName] = useState<string>('Smith');

  const fullName = useMemo(() => {
    return firstName + lastName
  }, [firstName, lastName])

  return (
    <div>
      {fullName}
    </div>
  )
}

// task 3
interface FruitsProps {
  title: string;
  id: string;
}
interface ItemsProps {
  items: FruitsProps[]
}
export const fruits: FruitsProps[] = [
  {
    title: 'Apple',
    id: '000-1',
  },
  {
    title: 'Banana',
    id: '000-2',
  },
  {
    title: 'Orange',
    id: '000-3',
  },
  {
    title: 'Kiwi',
    id: '000-4',
  },
  {
    title: 'Mango',
    id: '000-5',
  },
  {
    title: 'Grape',
    id: '000-6',
  }
];

export function SearhPlaceholder({ items }: ItemsProps): React.JSX.Element {
  const [search, setSearch] = useState<string>('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.title.toLowerCase()
        .includes(search.toLowerCase())
    })
  }, [search, items])

  return (
    <div className="wrap">
      <input type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border"
      />
      <ul className="">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}


// ============================= useCallback ===========================

export function ButtonClick(): React.JSX.Element {
  const [count, setCount] = useState<number>(0)

  function handleClick() {
    console.log('Clicked');
    setCount(count + 5)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleClick}
        className="bg-amber-950 px-3 py-1 rounded-2xl">
        Click
      </button>
    </div>

  )
}


// ==========

interface ProductCardProps {
  product: Product;
  onAdd: (id: string) => void
}
interface ProductListProps {
  products: Product[];
  onAdd: (id: string) => void
}

// export function ProductCard({ product, onAdd }: ProductCardProps): React.JSX.Element {
//   console.log('Product card render:', product.title);

//   return (
//     <div className="product-card bg-gray-500
//     rounded-2xl p-4 max-w-25 mb-4 flex flex-col
//     gap-2 text-center">
//       <h3>{product.title}</h3>

//       <p>{product.price}$</p>

//       <button className="bg-amber-950 px-2 py-0.5
//       rounded-2xl cursor-pointer hover:bg-amber-800
//       hover-base"
//         onClick={() => onAdd(product.id)}>
//         Add
//       </button>
//     </div>
//   )
// }

export const ProductCard = memo(function ProductCard({ product, onAdd }: ProductCardProps): React.JSX.Element {

  console.log('Product card render:', product.title);

  return (
    <div className="product-card bg-gray-500
        rounded-2xl p-4 max-w-25 mb-4 flex flex-col
        gap-2 text-center">
      <h3>{product.title}</h3>

      <p>{product.price}$</p>

      <button className="bg-amber-950 px-2 py-0.5
            rounded-2xl cursor-pointer hover:bg-amber-800
            hover-base"
        onClick={() => onAdd(product.id)}>
        Add
      </button>
    </div>
  );
}
);

export function ProductList({ products, onAdd }: ProductListProps): React.JSX.Element {
  console.log('Product list render');

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        </li>
      ))}
    </ul>
  )
}

export default function RenderProductList(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  // function handleAdd(id: string): void {
  //   console.log('Add product:', id);
  //   console.log(products === products);
  // }

  const handleAdd = useCallback((id: string): void => {
    console.log('Add product:', id);
    console.log(products === products);
  }, [])

  return (
    <>
      <button
        className="bg-bg-card rounded-2xl px-3 py-1 mb-4
        hover:bg-blue-950 hover-base cursor-pointer"
        onClick={() => setCount(prev => prev + 1)}>
        Count {count}
      </button>

      <ProductList products={products} onAdd={handleAdd} />
    </>
  )
}

