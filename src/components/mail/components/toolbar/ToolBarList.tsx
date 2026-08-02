import { ToolBarActionsProps } from "./ToolBar.types";
import { ToolBarItem } from "./ToolBarItem";

export function ToolBarList({ actions }: ToolBarActionsProps): React.JSX.Element {
  return (
    <ul className="toolbar-list flex items-center
    gap-4">
      {actions.map((action) => (
        <ToolBarItem key={action.id} action={action} {...action} />
      ))}
    </ul>
  )
}