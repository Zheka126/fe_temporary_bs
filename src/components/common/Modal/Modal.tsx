import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ModalCard,
  ModalContainer
} from "./Modal.styles";

interface ModalProps {
  title: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm
}: ModalProps) => {
  // const ref = useRef();

  // const clickListener = (e) => {
  //     if (e.target === ref.current) {
  //         onClose();
  //     }
  // };

  return createPortal(
    <ModalContainer isOpen={isOpen} onClick={onClose}>
      <ModalCard isOpen={isOpen}>
        <h3>{title}</h3>
        {children}
        <ButtonsContainer>
          <ConfirmButton title="Confirm" onClick={onConfirm} />
          <CancelButton title="Cancel" onClick={onClose} />
        </ButtonsContainer>
      </ModalCard>
    </ModalContainer>,
    document.body
  );
};
