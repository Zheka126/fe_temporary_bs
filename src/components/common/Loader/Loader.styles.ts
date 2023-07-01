import styled, { keyframes } from 'styled-components';

type LoaderSize = 'mini' | 'medium' | 'big';

interface LoaderProps {
  size: LoaderSize;
}

const loaderSize = (size: LoaderSize) =>
  size === 'mini' ? '25px' : size === 'medium' ? '50px' : '85px';

  const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loadercontainer = styled.div`
  ${({ theme }) => theme.flexStyles()}
`

export const StyledLoader = styled.span<LoaderProps>`
  width: ${({ size }) => loaderSize(size)};
  height: ${({ size }) => loaderSize(size)};
  border-radius: 50%;
  border: 4px dashed ${({ theme }) => theme.colors.black};
  animation: ${spinAnimation} 1s infinite linear;
`;
