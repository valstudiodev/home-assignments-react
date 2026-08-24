import { LucideIcon } from "lucide-react";
import { MailFolder } from "@/components/mail/types";

export interface SideBarItemData {
  id: string;
  title: string;
  icon: LucideIcon;
  count?: number;
  href: string;
}

export interface SidebarProps {
  collapsed: boolean;
  markedCountMails: number;
  spamCountMails: number;
  archiveCountMails: number;
  trashCountMails: number;
  unreadCountMails: number;
  onChangeFolder: (folder: MailFolder) => void;
}

export interface SideBarListProps {
  items: SideBarItemData[];
  collapsed: boolean;
  markedCountMails: number;
  spamCountMails: number;
  archiveCountMails: number;
  trashCountMails: number;
  unreadCountMails: number;
  onChangeFolder: (folder: MailFolder) => void;
}

export interface SideBarItemProps {
  icon: LucideIcon;
  title: string;
  count?: number | string;
  collapsed?: boolean;
}