import { PasswordButtonProps } from "./Types";
import { IconEyeVisible, IconEyeHidden } from "@/assets/icons/Icons";

export function PasswordButton({ isVisible, onClick }: PasswordButtonProps): React.JSX.Element {
  return (
    <button type="button"
      onClick={onClick}
      className="btn flex-center
    border px-3 py-1hover-base
    cursor-pointer">
      {isVisible ? <IconEyeVisible /> : <IconEyeHidden />}
    </button>
  )
}