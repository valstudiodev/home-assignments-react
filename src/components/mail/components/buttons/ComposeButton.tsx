import { ComposeButtonProps } from "@/components/mail/types";
import { memo } from "react";

function ComposeButton({ title, onClick, collapsed, icon: Icon }: ComposeButtonProps): React.JSX.Element {
  console.log('----Compose button render----');

  return (
    <button
      onClick={onClick}
      className={`
        compose-btn bg-green-800 flex items-center gap-2
        hover:bg-green-600 hover-base cursor-pointer
        py-2 px-4 rounded-3xl text-white font-semibold
        w-full mb-4
        ${collapsed ? 'button-collapsed' : ''}
        `}>
      <Icon size={18} className="shrink-0" />

      {!collapsed && (
        <span className="whitespace-nowrap">{title}</span>
      )}
    </button>
  )
}

export default memo(ComposeButton)
