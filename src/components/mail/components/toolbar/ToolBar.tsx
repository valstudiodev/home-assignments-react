import { ToolBarList } from "./ToolBarList";
import { toolbarActions } from "./toolBar.data";
import { ToolBarSelect } from "./ToolBarSelect";
import { ToolBarProps } from "./ToolBar.types";

export default function ToolBar({ isAllSelected, onSelectAll }: ToolBarProps): React.JSX.Element {


  return (
    <div className="toolbar flex items-center
    justify-between gap-2">
      <ToolBarSelect checked={isAllSelected} onChange={onSelectAll} />
      <ToolBarList actions={toolbarActions} />
    </div>
  )
}