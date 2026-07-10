// import { IconEyeVisible, IconEyeHidden } from "@/assets/icons/Icons";
import { useState } from "react";
import { PasswordButton } from "./PasswordBtn";
import { PasswordInput } from "./PasswordInput";

export default function PasswordVisibility(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')



  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value

    setPassword(value)
  }

  function handleToggle(): void {
    setIsVisible(prev => !prev)
  }

  return (
    <div className="password bg-bg-card
    p-5 rounded flex flex-col items-start gap-4">
      <PasswordInput label="Password:" value={password} type={isVisible ? 'text' : 'password'} onChange={handleChange} />
      <PasswordButton isVisible={isVisible} onClick={handleToggle} />
    </div>
  )
}