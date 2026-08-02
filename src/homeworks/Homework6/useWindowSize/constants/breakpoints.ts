import { SmartphoneCharging, Tablet, MonitorCheck } from "lucide-react";

export const BREAKPOINTS = {
  s: 0,
  xs: 320,
  sm: 639.98,
  md: 767.98,
  lg: 1023.98,
  xl: 1279.98,
  xxl: 1535.98,
} as const;

export const DEVICE_ICONS = {
  isMobile: SmartphoneCharging,
  isTablet: Tablet,
  isDesktop: MonitorCheck,
} as const;