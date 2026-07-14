import { useState } from "react";
import { UseModalReturn } from "./Hooks.type";

export function useModal(): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function open(): void {
    setIsOpen(true)
  }

  function close(): void {
    setIsOpen(false)
  }

  return {
    isOpen,
    open,
    close
  }
}