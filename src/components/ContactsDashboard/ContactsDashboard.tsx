import { AddContact } from "./AddContact";
import { ContactsList } from "./ContactsLIst";
import { Avatar } from "./Avatar";
import { IconPlus } from "@/assets/icons/Icons";
import { contacts } from "@/data/data";
import { Search } from "@/UI/search/Search";
import { useMemo, useState } from "react";
import filterBy from "@/utils/array/filterBy";
import Modal from "@/components/Modal/Modal";
import { useModal } from "@/hooks/useModal";

export function ContactsDashboard(): React.JSX.Element {
  const [search, setContactSearch] = useState<string>('');
  const { isOpen, open, close } = useModal()

  const filteredContacts = useMemo(() => {
    return filterBy(
      contacts,
      search,
      (contact) => [
        contact.name,
        contact.phone,
        contact.email
      ]
    )
  }, [contacts, search])


  return (
    <section
      className="contacts-dashboard mx-auto max-w-125
      bg-bg p-5 rounded-2xl">
      <Search value={search} onChange={setContactSearch}
        className="mb-5 border-b border-gray-700 pb-1"
        wrapperClassName="flex items-center gap-1"
        inputClassName="grow pl-3 py-2" />
      <AddContact icon={<Avatar icon={<IconPlus />} />}
        title="New contact"
        onClick={open} />
      <ContactsList contacts={filteredContacts} />

      <Modal
        onClose={close}
        title="New contact"
        className="bg-bg-card p-5"
        isOpen={isOpen}>
        <h2>Add contact</h2>
      </Modal>
    </section>
  )
}