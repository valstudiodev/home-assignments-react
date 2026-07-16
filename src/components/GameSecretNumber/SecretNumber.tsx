import { SecretNumberProps } from "./TypesGame";

export function SecretNumber({ secretNumber, revealedDigits }: SecretNumberProps): React.JSX.Element {
  return (
    <div className="secret-number bg-bg-dark-light
    p-4 rounded-2xl">
      <h2 className="text-3xl mb-3 text-center">Numbers</h2>

      <div className="flex justify-center">
        {secretNumber.map((digit, index) => (
          <span key={index}
            className="bg-amber-950 p-4 ">
            {revealedDigits.includes(digit) ? digit : '_'}
          </span>
        ))}
      </div>
    </div>
  );
}

export function generateSecretNumber(): number[] {
  const digits: number[] = [];

  while (digits.length < 3) {
    const digit = Math.floor(Math.random() * 10);

    if (!digits.includes(digit)) {
      digits.push(digit);
    }
  }

  return digits;
}