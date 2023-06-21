import { ReactNode } from 'react';

import {
  CenterText,
  Container,
  LeftSection,
  LogoImg,
  RightSection,
} from './AuthLayout.styles';

export interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
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
