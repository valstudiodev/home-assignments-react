import { ToolBarList } from "@/components/mail/components/mailBody/toolBar";
import { toolbarActions } from "@/components/mail/data";
import ToolBarSelect from "./ToolBarSelect";
import { ToolBarProps } from "@/components/mail/types";
import { memo } from "react";

function ToolBar({
  isAllSelected,
  onSelectAll,
  onAction,
}: ToolBarProps): React.JSX.Element {
  console.log('----Toolbar render----');


  return (
    <div className="toolbar flex items-center
    justify-between gap-2">
      <ToolBarSelect
        checked={isAllSelected}
        onChange={onSelectAll}
      />
      <ToolBarList
        actions={toolbarActions}
        onAction={onAction}
      />
    </div>
  )
}

export default memo(ToolBar)