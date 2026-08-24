import { SideBarList } from "@/components/mail/components/sidebar";
import { ComposeButton } from "@/components/mail/components/buttons";
import { SidebarProps } from "@/components/mail/types";
import { Pencil } from "lucide-react";
import { sidebarItems } from "@/components/mail/data";
import { memo } from "react";


function SideBar({
  collapsed,
  markedCountMails,
  spamCountMails,
  archiveCountMails,
  trashCountMails,
  onChangeFolder,
  unreadCountMails
}: SidebarProps): React.JSX.Element {

  console.log('-----Sidebar render-----', collapsed);

  return (
    <aside
      className={`mail__side-bar bg-gray-400 p-4
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
        markedCountMails={markedCountMails}
        spamCountMails={spamCountMails}
        archiveCountMails={archiveCountMails}
        trashCountMails={trashCountMails}
        unreadCountMails={unreadCountMails}
        onChangeFolder={onChangeFolder}
      />
    </aside>
  )
}

export default memo(SideBar)