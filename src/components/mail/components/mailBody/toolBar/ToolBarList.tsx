import { ToolBarActionsProps } from "@/components/mail/types";
import { ToolBarItem } from "@/components/mail/components/mailBody/toolBar";
import { memo } from "react";

function ToolBarList({ actions, onAction }: ToolBarActionsProps): React.JSX.Element {
  console.log('----Toolbar list render----');

  return (
    <ul className="toolbar-list flex items-center
    gap-4">
      {actions.map((action) => (
        <ToolBarItem
          key={action.id}
          action={action}
          onAction={onAction}
        />
      ))}
    </ul>
  )
}
export default memo(ToolBarList)