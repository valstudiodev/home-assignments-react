import { useWindowSize } from "@/homeworks/Homework6/useWindowSize/hooks";
import { getDeviceState } from "@/homeworks/Homework6/useWindowSize/utils";

export default function useBreakpoint() {
  const { width } = useWindowSize()

  return getDeviceState(width)
}