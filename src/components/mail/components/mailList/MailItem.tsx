import Checkbox from "@/UI/checkbox/Checkbox";
import { Star } from "lucide-react";
import { MailItemProps } from "./mail.types";
import { MarkedButton } from "@/components/mail/components/buttons";

export function MailItem({ mail, checked, onToggle, onToggleMarked }: MailItemProps): React.JSX.Element {

  return (
    <div
      className="mail-item flex items-start
       gap-4 cursor-pointer hover:bg-gray-500
       hover-base px-1 py-2"
    >
      <div className="mail-item__actions flex 
      items-center  gap-2">
        <Checkbox checked={checked} onChange={() => onToggle(mail.id)} />
        <MarkedButton
          icon={Star}
          isMarked={mail.isMarked}
          onClick={() => onToggleMarked(mail.id)}
        />
      </div>
      <div className="mail-item__body items-start
      gap-3 w-full grid grid-cols-[15%_75%_10%]">
        <h3 className="mail-item__title ">
          {mail.from}
        </h3>
        <p className="mail-item__message grow items-start text-start">
          {mail.preview}
        </p>
        <data value="date">
          {mail.date}
        </data>
      </div >
    </div>
  )
}