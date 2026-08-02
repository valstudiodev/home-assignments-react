import React from "react";
import { MailList } from "../mailList/MailList";
import { MailBodyProps } from "../mailList/mail.types";

export function MailBody({ mails, selectedId, onToggle, onToggleMarked }: MailBodyProps): React.JSX.Element {

  return (
    <MailList
      mails={mails}
      selectedId={selectedId}
      onToggle={onToggle}
      onToggleMarked={onToggleMarked}
    />
  )
}