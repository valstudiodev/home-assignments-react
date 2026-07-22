import { ContactsListProps } from "./ContactsTypes";
import { ContactsItem } from "./ContactsItem";

export function ContactsList({ contacts }: ContactsListProps): React.JSX.Element {
  return (
    <ul className="contacts-list flex
    flex-col gap-3">
      {contacts.map(contact => (
        <li key={contact.id}
          className="contacts-list__item
          bg-bg-card p-2 rounded-2xl 
          cursor-pointer">
          <ContactsItem contact={contact} />
        </li>
      ))}
    </ul>
  )
}