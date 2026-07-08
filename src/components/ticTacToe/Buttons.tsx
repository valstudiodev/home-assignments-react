// import { useState } from "react";
import { ButtonSquareProps } from "./types";
import { IconCross, IconZero } from "../../assets/icons/Icons";

export function ButtonSquare({ value, onSquareClick }: ButtonSquareProps): React.JSX.Element {
  return <button onClick={onSquareClick}
    className="square w-25 font-bold
    h-25 border cursor-pointer
    transition-all duration-300">
    {value === 'X' && <IconCross />}
    {value === 'O' && <IconZero />}
  </button>
}