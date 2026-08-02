import React from "react";
import { MarkedButtonProps } from "./Buttons.types";
// import { cn } from "@/utils/class/cn";
import "./button.style.scss";

export default function MarkedButton({ icon: Icon, isMarked, onClick }: MarkedButtonProps): React.JSX.Element {
  return (
    <button
      onClick={onClick}
      className="marked-btn">
      < Icon
        size={18}
        // className={cn('mail-marked__icon', isMarked && 'mail-marked__icon--active')}
        className={isMarked ? 'active' : ''}
        fill={isMarked ? 'currentColor' : 'none'}
      />
    </button>
  )
}