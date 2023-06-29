import styled from 'styled-components';
import { Button } from '../common/Button/Button';
import { StyledInput } from '../common/common.styles';

export const BookDetailsContainer = styled.div`
  display: flex;
  gap: 200px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 30px;

  h1 {
    margin-top: 0;
  }
`;

export const BookCoverSection = styled.div`
  flex: 0.3;

  img {
    width: 100%;
  }
`;

export const BookDetailsSection = styled.div`
  flex: 0.4;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BookDetailItem = styled.div`
  max-width: 330px;
  margin: 20px 0;
  color: #596d82;

  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;

export const BookGenre = styled.span`
  margin-right: 5px;
  padding: 1px 10px;
  color: white;
  background-color: #111;
  border-radius: 8px;
`;

export const EditInput = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

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

export const StyledModalContent = styled.div`
  display: flex;
  gap: 50px;
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
