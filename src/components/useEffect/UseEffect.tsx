import { useState, useEffect } from "react"

export function Counter(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {

    console.log('Count changed:', count);

  }, [count]);

  function increseCount() {
    setCount(prev => prev + 1)
  }

  function decreseCount() {
    setCount(prev => prev - 1)
  }

  return (
    <div className="flex items-center">
      <button onClick={decreseCount}
        className="bg-amber-700 w-12.5 \
      h-12.5 text-center rounded-3xl font-bold">-</button>
      <span className="w-12.5 text-center content-center">
        {count}
      </span>
      <button onClick={increseCount}
        className="bg-amber-700 w-12.5 \
      h-12.5 text-center rounded-3xl font-bold">+</button>
    </div >
  )
}


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