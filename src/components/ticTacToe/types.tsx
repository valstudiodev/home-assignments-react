export interface ButtonSquareProps {
  value: 'X' | 'O' | null;
  onSquareClick: () => void;
}

export type SquareValue = 'X' | 'O' | null

export interface SquaresProps {
  squares: number
}

export interface BoardProps {
  xIsNext: boolean;
  squares: SquareValue[];
  onPlay: (nextSquares: SquareValue[]) => void;
}