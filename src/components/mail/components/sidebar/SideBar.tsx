import { SideBarList } from "./SideBarList";
import { ComposeButton } from "../buttons/ComposeButton";
import { sidebarItems } from "@/components/mail/components/sidebar/sidebar.data";
import { Pencil } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
}

export function SideBar({ collapsed }: SidebarProps): React.JSX.Element {
  console.log('Sidebar', collapsed);

  return (
    <aside
      className={`side-bar bg-gray-400 p-4
        h-full rounded-2xl
        ${collapsed ? 'sidebar--collapsed' : ''}
      `}
    >
      <ComposeButton
        title="Sent message"
        collapsed={collapsed}
        icon={Pencil}
      />
      <SideBarList
        items={sidebarItems}
        collapsed={collapsed}
      />
    </aside>
  )
}