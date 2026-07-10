import { InputFieldCounterProps } from "./Types";

export function InputFieldCounter({ value, placeholder = '0' }: InputFieldCounterProps): React.JSX.Element {
  return (
    <label>
      <input type="text"
        value={value}
        placeholder={placeholder}
        readOnly
        className="text-center w-15"
      />
    </label>

  )
}

