import { SideBarItem } from "@/components/mail/components/sidebar";
import { SideBarListProps } from "@/components/mail/types";


export default function SideBarList({
  items,
  collapsed,
  markedCountMails,
  spamCountMails,
  archiveCountMails,
  trashCountMails,
  unreadCountMails
}: SideBarListProps): React.JSX.Element {
  console.log('-----Sidebar list render----');


  return (
    <ul
      className="side-bar-list flex flex-col
      gap-2 h-full">
      {items.map((item) => (
        <SideBarItem key={item.id}
          {...item}
          collapsed={collapsed}
          count={
            item.id === 'marked'
              ? markedCountMails
              : item.id === 'spam'
                ? spamCountMails
                : item.id === 'archive'
                  ? archiveCountMails
                  : item.id === 'trash'
                    ? trashCountMails
                    : item.id === 'unread'
                      ? unreadCountMails
                      : undefined
          }
        />
      ))}
    </ul>
  )
}