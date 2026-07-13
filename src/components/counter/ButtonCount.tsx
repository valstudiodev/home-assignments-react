// import { count } from "node:console";
import { ButtonCountProps, ButtonResetProps } from "./Types";

export function ButtonCount({ title, onClick, disabled }: ButtonCountProps): React.JSX.Element {
  return (
    <button type="button"
      className="button-count flex-center
      w-12.5 h-12.5 rounded-full bg-amber-950
      hover:bg-amber-700 transition-all duration-300
      cursor-pointer"
      disabled={disabled}
      onClick={onClick}>
      {title}
    </button>
  )
}


export function ButtonReset({ title, onClick }: ButtonResetProps): React.JSX.Element {
  return (
    <button type="button"
      onClick={onClick}
      className="bg-bg-card border
    flex-center cursor-pointer py-2 px-3
    rounded-2xl hover:bg-border hover-base">
      {title}
    </button>
  )
}