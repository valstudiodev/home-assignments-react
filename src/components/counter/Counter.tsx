import { useState } from "react";
import { InputFieldCounter, ButtonCount, ButtonReset } from "./index";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function handleClickIncrement(): void {
    setCount(prev => prev + 1)
  }

  function handleClickDecrement(): void {
    setCount(prev => {
      if (prev === 0) return prev

      return prev - 1
    })
  }

  function handleReset(): void {

    setCount(0)
  }

  return (
    <div className="counter flex-c-hor gap-3">
      <ButtonCount title="-" onClick={handleClickDecrement} disabled={count === 0} />
      <InputFieldCounter value={count} placeholder='0' />
      <ButtonCount title="+" onClick={handleClickIncrement} disabled={count >= 10} />
      <ButtonReset title="Reset" onClick={handleReset} />
    </div>
  )
}