import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalCard, ModalContainer } from './Modal.styles';

export interface BaseModalProps {
  title: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const BaseModal = ({
  isOpen,
  title,
  children,
  onClose,
}: BaseModalProps) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
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
        <h2>{title}</h2>
        {children}
      </ModalCard>
    </ModalContainer>,
    document.body
  );
};
