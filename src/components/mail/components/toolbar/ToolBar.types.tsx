import { LucideIcon } from "lucide-react";

export interface ToolBarAction {
  id: string;
  label?: string;
  icon: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ToolBarActionsProps {
  actions: ToolBarAction[]
}

export interface ToolBarItemProps {
  action: ToolBarAction;
}

export interface ToolBarProps {
  isAllSelected: boolean;
  onSelectAll: () => void;
}

export interface ToolBarSelectProps {
  checked: boolean;
  onChange: () => void
}