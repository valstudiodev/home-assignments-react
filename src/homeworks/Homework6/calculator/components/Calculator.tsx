import { useMemo, useState } from "react";
import { Counter } from "./Counter";
import { ResultDisplay } from "./ResultDisplay";
import { InputField } from "./InputFiled";

export default function Calculator(): React.JSX.Element {
  console.log('App render')
  const [counter, setCounter] = useState<number>(0);
  const [inputA, setInputA] = useState<number>(0);
  const [inputB, setInputB] = useState<number>(0);

  const handleChangeInputA = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value)
    console.log(value);
    setInputA(value)
  }

  const handleChangeInputB = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number(e.target.value)
    setInputB(value)
  }

  // const result = inputA + inputB
  // console.log('Calculating sum');

  const result = useMemo(() => {
    console.log('Calculating sum');
    return inputA + inputB
  }, [inputA, inputB])

  const handleCount = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div className="wrap bg-gray p-4 mb-20">
      <div className="wrap__inputs flex flex-col gap-3 mb-5">
        <InputField label="Input-A" onChange={handleChangeInputA} />
        <InputField label="Input-B" onChange={handleChangeInputB} />
      </div>
      <div className="wrap__counter flex items-center mb-5 gap-3">
        <Counter title="Counter" onClick={handleCount} />
        <div className="bg-amber-800 p-2">{counter}</div>
      </div>

      <ResultDisplay result={result} />

    </div >
  )
}