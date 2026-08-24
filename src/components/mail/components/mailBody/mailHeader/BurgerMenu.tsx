import { Menu, X } from "lucide-react";
import { BurgerIconProps } from "@/components/mail/types";
import { memo } from "react";

function BurgerIcon({ open, onClick }: BurgerIconProps): React.JSX.Element {
  console.log('----Burger icon render----');

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

export default memo(BurgerIcon)