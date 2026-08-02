import { useState, useEffect, memo, useRef, useDeferredValue, useMemo, useCallback } from "react";

function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);
    return () => clearTimeout(timer)
  }, [value, delay]);

  return debouncedValue
}

const ActionButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`[Child Render] Button "${label}" rendered`);
  return (
    <button onClick={onClick} className="p-2 bg-blue-600 text-white rounded m-1">
      {label}
    </button>
  );
});

// function ActionButton({ onClick, label }: { onClick: () => void; label: string }) {
//   console.log(`[Child Render] Button "${label}" rendered`);
//   return (
//     <button onClick={onClick} className="p-2 bg-blue-600 text-white rounded m-1">
//       {label}
//     </button>
//   )
// }
// memo(ActionButton)

export default function HooksTestLab() {
  const [inputQuery, setInputQuery] = useState<string>('');
  const [toggleState, setToggleState] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce<string>(inputQuery, 400)
  const deferredQuery = useDeferredValue(debouncedQuery)

  const heavyFilteredData = useMemo(() => {
    console.log("[Compute] Filtering heavy array...");

    const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`)
    return items.filter((item) => {
      item.includes(String(deferredQuery).toLowerCase())
    })
  }, [deferredQuery])

  const handleLogClick = useCallback(() => {
    console.log('[Action] Input value from ref:', inputRef.current?.value);
  }, [])

  // const handleLogClick = () => {
  //   console.log('[Action] Input value from ref:', inputRef.current?.value);
  // }

  useEffect(() => {
    console.log('[Effect] Debounced query changed to:', debouncedQuery);
  }, [debouncedQuery]);


  if (inputQuery === 'error') {
    return <div>Early Return Triggered!</div>;
  }

  return (
    <div className="p-4 max-w-md border rounded shadow">
      <h2 className="text-xl font-bold mb-3">React Hooks Test Lab</h2>
      <input
        ref={inputRef}
        type="text"
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        placeholder="Type to test debounce & deferred..."
        className="border p-2 w-full mb-2"
      />
      <div className="my-2">
        <ActionButton onClick={handleLogClick} label="Log Ref" />
        <button
          onClick={() => setToggleState(!toggleState)}
          className="p-2 bg-gray-500 text-white rounded m-1"
        >
          Toggle: {toggleState ? 'ON' : 'OFF'}
        </button>
        <p className="text-sm">Found items: {heavyFilteredData.length}</p>
      </div>
    </div>
  )
}