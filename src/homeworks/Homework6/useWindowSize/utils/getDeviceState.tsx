// import { DeviceType } from "@/homeworks/Homework6/useWindowSize/types/windowSize.type";
import { BREAKPOINTS } from "@/homeworks/Homework6/useWindowSize/constants/breakpoints";
import { SmartphoneCharging, Tablet, MonitorCheck } from "lucide-react";

export default function getDeviceState(width: number) {

  if (width < BREAKPOINTS.md) {
    return {
      type: 'mobile',
      Icon: SmartphoneCharging,
    }
  }
  if (width < BREAKPOINTS.xl) {
    return {
      type: 'tablet',
      Icon: Tablet,
    }
  }

  return {
    type: 'desktop',
    Icon: MonitorCheck
  }
}