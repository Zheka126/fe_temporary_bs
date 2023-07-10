import ReactModal from 'react-modal';

import {
  CancelBtn,
  ConfirmBtn,
  ModalButtonsContainer,
  modalStyles,
  ModalTitle,
} from './Modal.styles';

interface ModalProps {
  title: string;
  isModalOpen: boolean;
  onCloseModal: () => void;
  contentLabel: string;
  children: React.ReactNode;
  onConfirm: () => void;
}

export const Modal = ({
  title,
  isModalOpen = false,
  onCloseModal,
  contentLabel,
  children,
  onConfirm,
}: ModalProps) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={modalStyles}
      contentLabel={contentLabel}
    >
      <ModalTitle>{title}</ModalTitle>
      {children}
      <ModalButtonsContainer>
        <ConfirmBtn title="Confirm" onClick={onConfirm} />
        <CancelBtn title="Cancel" onClick={onCloseModal} />
      </ModalButtonsContainer>
    </ReactModal>
  );
};
