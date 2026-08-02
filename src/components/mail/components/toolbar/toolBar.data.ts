import { Inbox, Mail, Send, Star, Trash2, ThumbsDown, Paperclip, Archive } from "lucide-react";
import { ToolBarAction } from "./ToolBar.types";


export const toolbarActions: ToolBarAction[] = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: Inbox,
  },
  {
    id: 'sent',
    label: 'Sent',
    icon: Send,
  },
  {
    id: 'archive',
    label: 'Archive',
    icon: Archive,
  },
  {
    id: 'trash',
    label: 'Trash',
    icon: Trash2,
  },
  {
    id: 'unread',
    label: 'Unread',
    icon: Mail,
  },
  {
    id: 'spam',
    label: 'Spam',
    icon: ThumbsDown,
  },

]