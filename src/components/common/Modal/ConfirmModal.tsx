import { BaseModal, BaseModalProps } from './BaseModal';
import { ButtonsContainer, CancelButton, ConfirmButton } from './Modal.styles';

interface ConfirmModalProps extends BaseModalProps {
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
}: ConfirmModalProps) => (
  <BaseModal isOpen={isOpen} title={title} onClose={onClose}>
    {children}
    <ButtonsContainer>
      <ConfirmButton title="Confirm" onClick={onConfirm} />
      <CancelButton title="Cancel" onClick={onClose} />
    </ButtonsContainer>
  </BaseModal>
);
