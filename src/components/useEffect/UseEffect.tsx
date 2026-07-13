import React, { useState, useEffect, ReactEventHandler, use } from "react"

// ============ Focus =============
// export function InputFocus() {
//   const inputRef = useRef(null)

//   function handleClick() {
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Set focus</button>
//       <input type="text" ref={inputRef} />
//     </div>
//   )
// }


// ================
export function UseEffectDeep() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // 1. Без залежностей -> після КОЖНОГО рендера
  useEffect(() => {
    console.log("Runs after every render");
  });

  // 2. Порожній масив -> тільки mount / unmount
  useEffect(() => {
    console.log("Mount only");

    return () => {
      console.log("Unmount (cleanup)");
    };
  }, []);

  // 3. Залежність count -> тільки коли змінюється count
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  // 4. Кілька залежностей
  useEffect(() => {
    console.log("Count or text changed");
  }, [count, text]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Text: {text}</p>

      <button onClick={() => setCount((c) => c + 1)}>+1</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type..."
      />
    </div>
  );
}


// ========== task 1 ============
interface ProductsProps {
  products: string
}
// type Items = [
//   items: ProductsProps,
// ]
export const products = [
  "iPhone 16",
  "Samsung S25",
  "MacBook Pro",
  "AirPods Pro",
  "iPad Air",
];
export function ProductSearch({ items }: { items: string[] }): React.JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value

    setSearch(value)
  }

  useEffect(() => {
    if (search !== "") {
      const result = items.filter(item =>
        item.toLowerCase().trim().includes(search.toLowerCase())
      );

      setFilteredItems(result);
    } else {
      setFilteredItems([]);
    }
  }, [search, items]);


  return (
    <div className="product-search bg-bg-card p-5 min-h-75">
      <div className="product-search__inner flex
        items-center gap-4 mb-5">
        <label htmlFor="">Searching</label>
        <input type="text"
          className="border py-1 pl-1"
          value={search}
          onChange={handleSearchChange} />
      </div>
      <ul className="product-search__render w-full
      flex flex-col items-center gap-6">
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}