import { StyledButton } from 'src/components/common/Button/Button.styles';
import { StyledInput } from 'src/components/common/Input.styles';
import styled from 'styled-components';

export const AllDetailsContainer = styled.div`
  display: flex;
  gap: 200px;
  max-width: 1700px;
  margin: 0 auto;
  padding: 30px;

  h1 {
    margin-top: 0;
  }
`;

export const CoverSection = styled.div`
  flex: 0.3;

  img {
    width: 100%;
  }
`;

export const DetailsSection = styled.div`
  flex: 0.4;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const DetailItem = styled.div`
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

export const GenreTag = styled.span`
  margin-right: 5px;
  padding: 1px 10px;
  color: white;
  background-color: #111;
  border-radius: 8px;
`;

export const EditInput = styled(StyledInput)`
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledEditForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const CancelButton = styled(StyledButton)`
  max-width: 300px;
  background-color: #ccc;
`;
