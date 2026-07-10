import { useState } from "react";
import { Board } from "./Board";
import { SquareValue } from "./types";

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
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol className="game-list">
          {moves}
        </ol>
      </div>
    </div>
  )
}
