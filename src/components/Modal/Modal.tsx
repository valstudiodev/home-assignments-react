import { ModalProps } from "./Modal.types";
// import { useEffect } from "react";
import { ModalHeader, ModalContent, ModalCloseButton } from "./index";
// import { getScrollbarWidth } from "@/utils/bar/getSceollBarWidth";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/hooks/useEscapeKey"
import { cn } from "@/utils/class/cn";

export default function Modal({ title, isOpen, onClose, className, children }: ModalProps): React.JSX.Element | null {
  useLockBodyScroll(isOpen)
  useEscapeKey(isOpen, onClose)

  if (!isOpen) return null

  return (
    <>
      {isOpen && (
        <div className="overlay modal-overlay" onClick={onClose}>
          <div className={cn('modal', className)}
            onClick={(e) => e.stopPropagation()}>
            <ModalHeader title={title} />
            <ModalContent>{children}</ModalContent>
            <ModalCloseButton title="Close" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  )
}