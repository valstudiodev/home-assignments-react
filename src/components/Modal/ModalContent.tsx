import { ModalContentProps } from "./Modal.types";

export default function ModalContent({ children }: ModalContentProps): React.JSX.Element {
  return (
    <div className="modal__content bg-bg-dark-light
    p-4">
      {children}
    </div>
  )
}