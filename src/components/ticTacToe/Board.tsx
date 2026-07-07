import { ButtonSquare } from "./Buttons";
import { useState } from "react";

export function Board(): React.JSX.Element {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState<boolean>(false);

  function handleClick(i: number): void {
    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else
      nextSquares[i] = 'O'

    setSquares(nextSquares)
    setXisNext(!xIsNext)
  }

  return (
    <div className="board">
      <div className="board-row flex
      items-center">
        <ButtonSquare value={squares[0]} onSquareClick={() => handleClick(0)} />
        <ButtonSquare value={squares[1]} onSquareClick={() => handleClick(1)} />
        <ButtonSquare value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row flex
      items-center">
        <ButtonSquare value={squares[3]} onSquareClick={() => handleClick(3)} />
        <ButtonSquare value={squares[4]} onSquareClick={() => handleClick(4)} />
        <ButtonSquare value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row flex
      items-center">
        <ButtonSquare value={squares[6]} onSquareClick={() => handleClick(6)} />
        <ButtonSquare value={squares[7]} onSquareClick={() => handleClick(7)} />
        <ButtonSquare value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )



}