import { Menu, X } from "lucide-react";
import { BurgerIconProps } from "./BurgerIconTypes";

export default function BurgerIcon({ open, onClick }: BurgerIconProps): React.JSX.Element {
  const Icon = open ? X : Menu

  return (
    <button
      className="burger-icon cursor-pointer"
      type="button"
      onClick={onClick}
      aria-label="Toggle sidebar"
    >
      <Icon size={24} />
    </button>
  )
}