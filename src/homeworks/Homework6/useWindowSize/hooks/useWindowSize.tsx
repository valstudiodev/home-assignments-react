import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

function getWindowSize(): WindowSize {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize);

  useEffect(() => {
    function handleResize(): void {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}