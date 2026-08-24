import { LucideIcon } from "lucide-react";

export interface ToolBarAction {
  id: string;
  label?: string;
  icon: LucideIcon;
  // onClick?: () => void;
  type: 'spam' | 'delete' | 'archive' | 'mark'
  disabled?: boolean;
}

export interface ToolBarActionsProps {
  actions: ToolBarAction[];
  // onMoveToSpam: () => void;
  onAction: (actionId: string) => void;
}

export interface ToolBarItemProps {
  action: ToolBarAction;
  // onMoveToSpam?: () => void;
  // onMoveToArchive?: () => void;
  onAction: (actionId: string) => void;
}

export interface ToolBarProps {
  isAllSelected: boolean;
  onSelectAll: () => void;
  // onMoveToSpam: () => void;
  onAction: (actionId: string) => void;
}

export interface ToolBarSelectProps {
  checked: boolean;
  onChange: () => void
}