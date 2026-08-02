import { EllipsisVertical, RotateCw } from "lucide-react";
import Checkbox from "@/UI/checkbox/Checkbox";
import { ToolBarSelectProps } from "./ToolBar.types";

export function ToolBarSelect({ checked, onChange }: ToolBarSelectProps): React.JSX.Element {
  return (
    <div className="toolbar__select
    flex items-center gap-2 wrap">
      <Checkbox checked={checked} onChange={onChange} />
      <RotateCw
        className="icon-refresh cursor-pointer" size={18} />
      <EllipsisVertical
        className="icon-more cursor-pointer" size={18} />
    </div>
  )
}


