// import { useState } from "react";
import { ButtonSquareProps } from "./types";
import { IconCross, IconZero } from "../../assets/icons/Icons";

export function ButtonSquare({ value, onSquareClick }: ButtonSquareProps): React.JSX.Element {
  return <button onClick={onSquareClick}
    className="square w-20 font-bold
    h-20 border cursor-pointer sm:w-25
    sm:h-25
    transition-all duration-300">
    {value === 'X' && <IconCross />}
    {value === 'O' && <IconZero />}
  </button>
}