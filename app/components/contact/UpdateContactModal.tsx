"use client"
import { FC, ReactNode } from "react";
import useModal from "@/app/hooks/useModal";
import Modal from "../modal/Modal";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void
}

const UpdateContactModal: FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      {children}
    </Modal>
  )
}

export default UpdateContactModal;