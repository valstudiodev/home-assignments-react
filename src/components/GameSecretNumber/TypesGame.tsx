export type PlayerId = 1 | 2

export interface PlayerData {
  id: PlayerId;
  guessedDigits: number[]
}

export interface PlayerProps {
  player: PlayerData;
  isActive: boolean;
  usedDigits: number[];
  onGuess: (digits: number, player: PlayerId) => void;
}

export interface SecretNumberProps {
  secretNumber: number[],
  revealedDigits: number[]
}