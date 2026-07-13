import { useState } from "react";
import { Board } from "./Board";
import { SquareValue } from "./types";
// ===============================================================================================
// Задача 10. Хрестики-нулики. З історією (можна повернутись назад)
// ===============================================================================================
export function Game(): React.JSX.Element {
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext: boolean = currentMove % 2 === 0
  const currentSquares: SquareValue[] = history[currentMove]

  function handlePlay(nextSquares: SquareValue[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove)
  }

  const moves = history.map((_squares: SquareValue[], move: number) => {
    let description: string;
    if (move > 0)
      description = 'Go to move #' + move
    else
      description = 'Go to game start'

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}
          className="bg-button cursor-pointer
          py-1 px-4 w-full rounded-3xl hover-base
          hover:bg-blue-900">
          {description}
        </button>
      </li>
    )
  })

  return (
    <div className="game mb-10 flex flex-wrap sm:flex-nowrap
    justify-between gap-2 mx-auto border-3
    p-4 border-bg-card rounded">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="game-list flex
        flex-col gap-3 w-full">
          {moves}
        </ol>
      </div>
    </div>
  )
}
