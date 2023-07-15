import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ModalCard,
  ModalContainer,
} from './Modal.styles';

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
  onConfirm,
}: ModalProps) => {
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  console.log('confirmButtonRef: ', confirmButtonRef);
  const handleKeyPress = (event: KeyboardEvent) => {
    if (isOpen && event.key === 'Escape') {
      onClose();
    }
    if (
      event.key === 'Enter' &&
      document.activeElement !== confirmButtonRef.current
    ) {

      onConfirm();
      onClose();
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleKeyPress);
  } else {
    document.removeEventListener('keydown', handleKeyPress);
  }

  return createPortal(
    <ModalContainer isOpen={isOpen} onClick={onClose}>
      <ModalCard isOpen={isOpen} onClick={(event) => event.stopPropagation()}>
        <h3>{title}</h3>
        {children}
        <ButtonsContainer>
          <ConfirmButton
            ref={confirmButtonRef}
            title="Confirm"
            onClick={onConfirm}
          />
          <CancelButton title="Cancel" onClick={onClose} />
        </ButtonsContainer>
      </ModalCard>
    </ModalContainer>,
    document.body
  );
};
