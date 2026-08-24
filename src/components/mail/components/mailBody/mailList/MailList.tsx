import { MailItem } from "@/components/mail/components/mailBody/mailList";
import { MailListProps } from "@/components/mail/types";
import { memo } from "react";

function MailList({
  mails,
  selectedId,
  onToggle,
  onToggleMarked
}: MailListProps): React.JSX.Element {
  return (
    <ul className="mail-list bg-gray-400 
    p-5 flex flex-col rounded-2xl divide-y
    divide-gary-600">
      {mails.map((mail) => (
        <li key={mail.id}
          className="mail-list__item">
          <MailItem
            checked={selectedId.includes(mail.id)}
            onToggle={onToggle}
            mail={mail}
            onToggleMarked={onToggleMarked}
          />
        </li>
      ))}
    </ul>
  )
}
export default memo(MailList)