// import { LucideIcon } from "lucide-react";
import { SideBarItemProps } from "@/components/mail/types";


export default function SideBarItem({
  icon: Icon,
  title,
  count,
  collapsed = false,
}: SideBarItemProps): React.JSX.Element {
  console.log('----Sidebar item render----');


  return (
    <li
      className={`
          side-bar-item flex items-center
          gap-4 text-gray-700 font-semibold py-1 px-4
          cursor-pointer hover:bg-gray-300 hover-base
          hover:text-gray-900 rounded-2xl
          ${collapsed ? 'justify-center' : 'gap-4'}
        `}>
      <span
        className="side-bar-item__icon shrink-0">
        <Icon size={18} />
      </span>

      {!collapsed && (
        <>
          <div className='grow transition-all
            duration-300 
          '>
            <span className="whitespace-nowrap">{title}</span>
          </div>

          {count !== undefined && (
            <span className="whitespace-nowrap">
              {count}
            </span>
          )}
        </>
      )}
    </li>
  )
}