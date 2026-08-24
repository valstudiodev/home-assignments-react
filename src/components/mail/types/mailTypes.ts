export type MailFolder =
  'inbox' |
  'spam' |
  'trash' |
  'archive' |
  'unread'

export interface MailProps {
  id: string;
  from: string;
  email: string;
  subject: string;
  preview: string;
  date: string;
  unread: boolean;
  starred: boolean;
  hasAttachment: boolean;
  isMarked: boolean;
  folder: MailFolder;
}

export interface MailListProps {
  mails: MailProps[];
  selectedId: string[];
  onToggle: (id: string) => void;
  onToggleMarked: (id: string) => void;
}

export interface MailBodyProps {
  mails: MailProps[];
  selectedId: string[];
  search: string;
  isAllSelected: boolean;
  collapsed: boolean;

  onToggle: (id: string) => void;
  onToggleMarked: (id: string) => void;
  onSearch: (value: string) => void;
  onToggleSideBar: () => void;
  onSelectedAll: () => void;
  // onMoveToSpam: () => void;
  onAction: (actionId: string) => void;
}

export interface MailItemProps {
  mail: MailProps;
  checked: boolean;
  onToggle: (id: string) => void;
  onToggleMarked: (id: string) => void
}

export interface MailItemsProps {
  mails: MailProps[];
  onToggleMarked: (id: string) => void
}



