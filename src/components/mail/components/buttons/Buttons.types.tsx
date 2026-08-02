import { LucideIcon } from "lucide-react";

export interface MarkedButtonProps {
  icon: LucideIcon;
  isMarked: boolean;
  onClick: () => void;
}