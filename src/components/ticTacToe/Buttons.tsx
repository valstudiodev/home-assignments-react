// import { useState } from "react";
import { ButtonSquareProps } from "./types";

export function ButtonSquare({ value, onSquareClick }: ButtonSquareProps): React.JSX.Element {
  // const [initValue, setInitValue] = useState<string | null>(null);

  // function handleClick(): void {
  //   setInitValue('X')
  // }

  return <button onClick={onSquareClick}
    className="square w-12.5 font-bold
    h-12.5 border cursor-pointer hover:text-bg
    transition-all duration-300 hover:bg-amber-50">
    {value}
  </button>
}