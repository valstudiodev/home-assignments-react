import type { LucideIcon } from "lucide-react";

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export interface WindowSizeRenderProps {
  width: number;
  height: number;
  device: DeviceType;
  icon: LucideIcon
}