import { AddContactProps } from "./ContactsTypes";

export function AddContact({ icon, title, onClick }: AddContactProps): React.JSX.Element {

  return (
    <button
      type="button"
      onClick={onClick}
      className="add-contact flex items-center
        gap-3 cursor-pointer hover:text-gray-300
        hover-base mb-4">
      {icon}
      {title}
    </button>
  )
}