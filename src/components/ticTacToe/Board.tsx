import { ButtonSquare } from "./Buttons";
import { BoardProps, SquareValue } from "./types";

export function Board({ xIsNext, squares, onPlay }: BoardProps): React.JSX.Element {

  function handleClick(i: number): void {

    if (squares[i] || calculateWinner(squares)) return

    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else
      nextSquares[i] = 'O'

    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status: string;

  if (winner) {
    status = "Winner: " + winner
  } else
    status = "Next player: " + (xIsNext ? 'X' : 'O')

  return (
    <div className="board flex flex-col
    items-center w-full">
      <p className="status text-2xl mb-2">{status}</p>
      <div className="board-row 
      items-center">
        <ButtonSquare value={squares[0]} onSquareClick={() => handleClick(0)} />
        <ButtonSquare value={squares[1]} onSquareClick={() => handleClick(1)} />
        <ButtonSquare value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row 
      items-center">
        <ButtonSquare value={squares[3]} onSquareClick={() => handleClick(3)} />
        <ButtonSquare value={squares[4]} onSquareClick={() => handleClick(4)} />
        <ButtonSquare value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row 
      items-center">
        <ButtonSquare value={squares[6]} onSquareClick={() => handleClick(6)} />
        <ButtonSquare value={squares[7]} onSquareClick={() => handleClick(7)} />
        <ButtonSquare value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}