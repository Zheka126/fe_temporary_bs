import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftSection = styled.div`
  position: relative;
  flex: 0.4;
  background-color: #1a1a1a;
  ${({ theme }) => theme.flexStyles()}
`;

export const RightSection = styled.div`
  flex: 0.6;
  background-color: #f7f7f7;
  ${({ theme }) => theme.flexStyles()}
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 15px;
  width: 130px;
`;

export const CenterText = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: bold;
  line-height: 48px;
  animation: bounce 1.5s infinite ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: scale(101%);
    }
    50% {
      transform: scale(100%);
    }
  }

  p {
    margin: 0;
  }

  p:nth-child(2) {
    margin-left: 30px;
  }
`;
