import { EllipsisVertical, RotateCw } from "lucide-react";
import Checkbox from "@/UI/checkbox/Checkbox";
import { ToolBarSelectProps } from "@/components/mail/types";
import { memo } from "react";

function ToolBarSelect({ checked, onChange }: ToolBarSelectProps): React.JSX.Element {
  console.log('-----Toolbar select render-----');

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

export default memo(ToolBarSelect)
