"use client"
import { FC, useState, ReactNode } from "react";
import Modal from "../modal/Modal";

type AddContactModal = {
  children: ReactNode;
}
const AddContact: FC<AddContactModal> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-end my-6 mx-4">
        <button
          onClick={() => openModal()}
          className="bg-custom-500 text-custom-950 px-4 py-2 rounded shadow-md hover:bg-custom-600 active:bg-custom-700 focus:outline-none focus:ring-2 focus:ring-custom-400">
          Add New Contact
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        {children}
      </Modal>
    </>
  )
}

export default AddContact;