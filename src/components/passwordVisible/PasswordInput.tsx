import { PasswordInputProps } from "./Types";

export function PasswordInput({ label, value, onChange, type }: PasswordInputProps): React.JSX.Element {
  // const inputId = React.useId()

  return (
    <div className="password-wrap
    flex-c-hor gap-4">
      <label >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded"
      />
    </div>
  )
}