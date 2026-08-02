import React from "react";

interface InputChangeProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({ label, onChange }: InputChangeProps): React.JSX.Element {

  return (
    <label className="flex items-center gap-2">
      {label}
      <input
        className="border" type="number" onChange={onChange} />
    </label>
  )
}