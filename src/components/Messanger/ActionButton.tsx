import { ActiosButtonProps } from "./MessangerTypes";

export function ActionButton({ icon, count, onClick }: ActiosButtonProps): React.JSX.Element {

  return (
    <div className="actions-button">
      <button type="button" onClick={onClick}
        className="relative cursor-pointer">
        {icon}

        {count > 0 && (<span className="absolute -top-3
        text-xs right-0 text-white font-semibold">
          {count}
        </span>)}
      </button>
    </div>
  )
}