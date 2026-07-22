import { ReactElement } from "react";

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  email: string;
  status: 'online' | 'offline' | 'busy';
}


export interface ContactItemProps {
  contact: Contact;
  children?: React.ReactNode;
}

export interface ContactsListProps {
  contacts: Contact[]
}

export interface AddContactProps {
  icon: ReactElement;
  title: string;
  onClick: () => void
}