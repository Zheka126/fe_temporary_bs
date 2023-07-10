import { Button } from 'components/common/Button/Button';
import styled from 'styled-components';

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    paddingBottom: '70px',
    transform: 'translate(-50%, -50%)',
    transition: 'transform .3s ease-in-out',
    // background-color: ${({ theme }) => theme.colors.lightGray};
  },
};
/* 
  How to use styled-component prop interpolation inside modalStyles?
  The problem is that the modal component from react-modal has it own styles.
  I could write something like this:
  export const StyledModalContent = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.lightGray};
    outline: none;
    width: 50%;
    height: 50%;
  `;
  
  but this is overwritting styles from react-modal.
  
  This problem appears because modal bg and input bg are the same color.
  I could make input bg gray but it means i need to rewrites the styles of the input
  */

export const ModalTitle = styled.h2`
  margin-top: 0;
`;

export const ModalButtonsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const ConfirmBtn = styled(Button)`
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const CancelBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.error};
`;
