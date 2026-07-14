import { PasswordButtonProps } from "./Types";
import { IconEyeVisible, IconEyeHidden } from "@/assets/icons/Icons";

export function PasswordButton({ isVisible, onClick }: PasswordButtonProps): React.JSX.Element {
  return (
    <button type="button"
      onClick={onClick}
      className="btn flex-center border
    border-gray px-1 py-1hover-base 
    cursor-pointer">
      {isVisible ? <IconEyeVisible /> : <IconEyeHidden />}
    </button>
  )
}