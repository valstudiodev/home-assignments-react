import { ToolBarItemProps } from "./ToolBar.types";

export function ToolBarItem({ action }: ToolBarItemProps): React.JSX.Element {
  const Icon = action.icon
  return (
    <li className="toolbar-item 
    w-8 h-8">
      <button
        className="toolbar-item__btn cursor-pointer
        relative flex-center w-full h-full
        before:bg-transparent before:scale-0
        before:rounded-full hover:before:bg-gray-300
        before:content-[''] before:w-full before:h-full
        before:transition-transform before:absolute
        before:top-1/2 before:left-1/2 before:-translate-x-1/2
        before:-translate-y-1/2
        before:duration-200 hover:before:scale-100"
        onClick={action.onClick}>
        <Icon className="relative z-10" size={20} />
      </button>
    </li>
  )
}