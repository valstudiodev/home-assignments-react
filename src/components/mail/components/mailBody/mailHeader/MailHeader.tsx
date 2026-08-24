import { Search } from "@/components/mail/ui";
import BurgerIcon from "@/components/mail/components/mailBody/mailHeader/BurgerMenu";
import { memo } from "react";

interface MailHeaderProps {
  search: string;
  onSearch: (value: string) => void;
  collapsed: boolean;
  onToggleSideBar: () => void;
}

function MailHeader({
  search,
  onSearch,
  collapsed,
  onToggleSideBar
}: MailHeaderProps): React.JSX.Element {
  console.log('----Mail header render----');

  return (
    <div className="mail-header flex 
    gap-3">
      <Search
        value={search}
        onChange={(value) => onSearch(value)}
        wrapperClassName="flex items-center gap-2
        p-2 rounded-2xl 
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

export default memo(MailHeader)