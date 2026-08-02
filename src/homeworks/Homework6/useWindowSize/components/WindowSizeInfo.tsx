import { useBreakpoint } from "@/homeworks/Homework6";
import { RenderSize } from "./RenderSize";
import { ContainerMain } from "./ContainerMain";

export default function WindowSizeInfo(): React.JSX.Element {
  const { Icon } = useBreakpoint()

  return (
    <ContainerMain>
      <Icon size={100} />
      <RenderSize />
    </ContainerMain>
  )
}