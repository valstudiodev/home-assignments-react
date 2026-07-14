// import RenderChildren from "../../components/children/Children";
import { TitleHomework } from "../../components/fonts/Fonts";
// import styles from './Homework4.module.css'
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useModal } from "../../hooks/useModal";

export default function Homework4(): React.JSX.Element {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <div className="homework-preview-area h-1000">
        <TitleHomework number={4} />


        {/* ========== practice ========= */}
        {/* <RenderChildren /> */}


        <UserPage />
      </div>
    </div>
  )
}





function UserPage(): React.JSX.Element {
  const [modalType, setModalType] = useState<'delete' | 'add' | null>(null);
  // const { isOpen, open, close } = useModal()
  const deleteModal = useModal()
  const addModal = useModal()

  const deleteModalBg = modalType === 'delete' ? 'bg-red-500' : '';
  const addModalBg = modalType === 'add' ? 'bg-green-500' : '';
  const modalStyles = 'modal relative p-5 rounded-2xl h-100 w-100'

  return (
    <div>
      <Button onClick={() => { setModalType('delete'); deleteModal.open() }} title="Delete user" />
      <Modal className={`${modalStyles} ${deleteModalBg}`}
        title="Delete user" isOpen={deleteModal.isOpen} onClose={deleteModal.close}>
        <p>Are you chure?</p>
      </Modal>

      <Button onClick={() => { setModalType('add'); addModal.open() }} title="Add user" />
      <Modal className={`${modalStyles} ${addModalBg}`}
        title="Add user" isOpen={addModal.isOpen} onClose={addModal.close}>
        <p>Are you chure?</p>
      </Modal>

    </div>
  )
}

type ButtonProps = {
  title: string;
  onClick: () => void;
}
function Button({ title, onClick }: ButtonProps): React.JSX.Element {
  return (
    <button onClick={onClick}
      className="bg-bg-dark-light button-base
    hover:bg-gray-600 hover-base py-1 px-3 rounded-2xl">
      {title}
    </button>
  )
}