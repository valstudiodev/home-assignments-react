import { SideBarItem } from "./SideBarItem";
import { SideBarItemData } from "./sidebar.data";

interface SideBarListProps {
  items: SideBarItemData[];
  collapsed: boolean;
}

export function SideBarList({ items, collapsed }: SideBarListProps): React.JSX.Element {
  return (
    <ul
      className="side-bar-list flex flex-col
      gap-2 h-full">
      {items.map((item) => (
        <SideBarItem key={item.id}
          {...item}
          collapsed={collapsed}
        />
      ))}
    </ul>
  )
}