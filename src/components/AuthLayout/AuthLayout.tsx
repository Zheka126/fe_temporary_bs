import { FC, ReactNode } from 'react';
import { Container, LeftSection, RightSection, LogoImg, CenterText } from './AuthLayout.styles';

export interface IAuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <Container>
      <LeftSection>
        <LogoImg src="src/assets/logo.png" alt="Endava Logo" />
        <CenterText>
          <p>Book </p>
          <p>Sharing</p>
        </CenterText>
      </LeftSection>
      <RightSection>{children}</RightSection>
    </Container>
  );
};
