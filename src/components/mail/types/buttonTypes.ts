import { LucideIcon } from "lucide-react";

export interface MarkedButtonProps {
  icon: LucideIcon;
  isMarked: boolean;
  onClick: () => void;
}

export interface ComposeButtonProps {
  title: string;
  onClick?: () => void;
  collapsed?: boolean;
  icon: LucideIcon;
}

export interface BurgerIconProps {
  open: boolean;
  onClick: () => void;
}