import { Inbox, Mail, Send, Star, Trash2, ThumbsDown, Paperclip, Archive } from "lucide-react";
import { SideBarItemData } from "@/components/mail/types";

export const sidebarItems: SideBarItemData[] = [
  {
    id: 'inbox',
    title: 'Inbox',
    icon: Inbox,
    count: 12,
    href: '/inbox',
  },
  {
    id: 'sent',
    title: 'Sent',
    icon: Send,
    href: '/sent',
  },
  {
    id: 'archive',
    title: 'Archive',
    icon: Archive,
    href: '/archive',
  },
  {
    id: 'trash',
    title: 'Trash',
    icon: Trash2,
    href: '/trash',
  },
  {
    id: 'unread',
    title: 'Unread',
    icon: Mail,
    href: '/unread',
  },
  {
    id: 'marked',
    title: 'Marked',
    icon: Star,
    href: '/marked',
  },
  {
    id: 'spam',
    title: 'Spam',
    icon: ThumbsDown,
    href: '/spam',
  },
  {
    id: 'investment',
    title: 'Investment',
    icon: Paperclip,
    href: '/investment',
  },
]