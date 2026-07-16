import { useState } from "react";
import { PlayerProps } from "./TypesGame";

export function Player({ player, isActive, usedDigits, onGuess }: PlayerProps): React.JSX.Element {
  const [guess, setGuess] = useState<string>('');

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setGuess(event.target.value);
  }

  function handleGuess(): void {
    if (!guess) return;

    const digit = Number(guess);

    if (Number.isNaN(digit)) return;

    onGuess(digit, player.id);

    setGuess('');
  }

  const isDisabled =
    !isActive ||
    !guess ||
    usedDigits.includes(Number(guess));

  return (
    <div className="player flex flex-col gap-2 items-start
    bg-bg-card p-4 rounded-2xl">
      <h2>Player {player.id}</h2>

      <input
        type="number"
        value={guess}
        onChange={handleChange}
        disabled={!isActive}
        min={0}
        max={9}
        className="border rounded"
      />

      <button
        type="button"
        onClick={handleGuess}
        disabled={isDisabled}
        className="bg-amber-700 rounded-2xl py-1 px-4"
      >
        Make step
      </button>

      <div>
        Guessed:

        {player.guessedDigits.map((digit) => (
          <span key={digit}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}