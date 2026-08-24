import React, { memo } from "react";
import { MailHeader, MailList, ToolBar } from "@/components/mail/components/mailBody";
import { MailBodyProps } from "@/components/mail/types";

function MailBody({
  mails,
  selectedId,
  onToggle,
  onToggleMarked,
  search,
  onSearch,
  collapsed,
  onToggleSideBar,
  isAllSelected,
  onSelectedAll,
  onAction,
}: MailBodyProps): React.JSX.Element {

  return (
    <div className="mail__body grow flex 
    flex-col gap-4">
      <MailHeader
        search={search}
        onSearch={onSearch}
        collapsed={collapsed}
        onToggleSideBar={onToggleSideBar}
      />
      <ToolBar
        isAllSelected={isAllSelected}
        onSelectAll={onSelectedAll}
        onAction={onAction}
      />
      <MailList
        mails={mails}
        selectedId={selectedId}
        onToggle={onToggle}
        onToggleMarked={onToggleMarked}
      />
    </div>
  )
}

export default memo(MailBody)