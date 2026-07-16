import { Player } from "./PlayerGame";
import { PlayerData, PlayerId } from "./TypesGame";
import { useState } from "react";
import { generateSecretNumber, SecretNumber } from "./SecretNumber";


const initialPlayers: PlayerData[] = [
  {
    id: 1,
    guessedDigits: [],
  },
  {
    id: 2,
    guessedDigits: [],
  },
];

export function Game(): React.JSX.Element {
  const [secretNumber] = useState<number[]>(
    generateSecretNumber(),
  );

  const [revealedDigits, setRevealedDigits] = useState<number[]>([]);

  const [usedDigits, setUsedDigits] = useState<number[]>([]);

  const [players, setPlayers] =
    useState<PlayerData[]>(initialPlayers);

  const [currentPlayer, setCurrentPlayer] =
    useState<PlayerId>(1);

  const [winner, setWinner] = useState<string>('');

  function handleGuess(
    digit: number,
    playerId: PlayerId,
  ): void {
    if (usedDigits.includes(digit)) return;

    const newUsedDigits = [
      ...usedDigits,
      digit,
    ];

    setUsedDigits(newUsedDigits);

    const isCorrect = secretNumber.includes(digit);

    if (isCorrect) {
      setRevealedDigits((prev) => [
        ...prev,
        digit,
      ]);

      setPlayers((prev) =>
        prev.map((player) =>
          player.id === playerId
            ? {
              ...player,
              guessedDigits: [
                ...player.guessedDigits,
                digit,
              ],
            }
            : player,
        ),
      );

      const allGuessed =
        secretNumber.every((digit) =>
          [...revealedDigits, digit].includes(digit),
        );

      if (allGuessed) {
        setWinner(
          `Player ${playerId} loses`,
        );
      }
    }

    setCurrentPlayer(
      playerId === 1 ? 2 : 1,
    );
  }

  return (
    <div className="game flex flex-col gap-5">
      <SecretNumber
        secretNumber={secretNumber}
        revealedDigits={revealedDigits}
      />

      {players.map((player) => (
        <Player
          key={player.id}
          player={player}
          isActive={
            currentPlayer === player.id
          }
          usedDigits={usedDigits}
          onGuess={handleGuess}
        />
      ))}

      {winner && <h2 className="bg-red-950 p-3 rounded-2xl text-center">{winner}</h2>}
    </div>
  );
}