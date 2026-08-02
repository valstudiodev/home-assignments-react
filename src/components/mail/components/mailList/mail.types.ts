
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
  onToggle: (id: string) => void;
  onToggleMarked: (id: string) => void;
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

