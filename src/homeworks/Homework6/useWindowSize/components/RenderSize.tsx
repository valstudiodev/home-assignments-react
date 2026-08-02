import React from "react";
import { useWindowSize } from "../hooks";


export function RenderSize(): React.JSX.Element {
  const { width, height } = useWindowSize()

  return (
    <div className="bg-gray p-2 rounded-2xl">
      {`${width}px * ${height}px`}
    </div>
  )
}