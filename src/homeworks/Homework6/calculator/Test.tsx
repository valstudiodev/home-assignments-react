import { useState, useMemo } from "react";
import React from "react";

function expensiveCalculation(numbers: number[]) {
  console.log('🔥 expensiveCalculation')

  return [...numbers].sort((a, b) => a - b)
}

export function App(): React.JSX.Element {
  const [count, setCount] = useState(0)

  const numbers = [8, 2, 6, 1, 4]


  const sortedNumbers = useMemo(() => {
    return expensiveCalculation(numbers)
  }, [])

  console.log('✅ App render')

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <p>{sortedNumbers.join(', ')}</p>
    </>
  )
}


// ======== Rect memo ==========
type ChildProps = {
  name: string
}

// export function Child({ name }: ChildProps): React.JSX.Element {
//   console.log('👶 Child render')

//   return <h2>{name}</h2>
// }

export const Child = React.memo(function Child({
  name,
}: ChildProps): React.JSX.Element {
  console.log('👶 Child render')

  return <h2>{name}</h2>
})

export function App2(): React.JSX.Element {
  const [count, setCount] = useState(0)

  console.log('✅ Parent render')

  const user = useMemo(() => {
    return {
      age: 20,
    }
  }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child name="John" user={user} />
    </>
  )
}