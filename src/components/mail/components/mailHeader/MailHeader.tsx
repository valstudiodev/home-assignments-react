import { Search } from "@/UI/search/Search";
import BurgerIcon from "@/UI/burgerIcon/BurgerIcon";

interface MailHeaderProps {
  search: string;
  onSearch: (value: string) => void;
  collapsed: boolean;
  onToggleSideBar: () => void;
}

export function MailHeader({ search, onSearch, collapsed, onToggleSideBar }: MailHeaderProps): React.JSX.Element {

  return (
    <div className="mail-header flex justify-between
    gap-3">
      <Search
        value={search}
        onChange={(value) => onSearch(value)}
        wrapperClassName="flex items-center gap-2
        p-2 rounded-2xl max-w-[300px]
        bg-gray-400"
        inputClassName="w-full"
      />
      <BurgerIcon
        open={collapsed}
        onClick={onToggleSideBar}
      />
    </div>
  )
}