import { ReactNode } from "react";

import logo from "/assets/logo.png";
import {
  CenterText,
  Container,
  LeftSection,
  LogoImg,
  RightSection
} from "./AuthLayout.styles";

export interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Container data-testid="auth-container">
      <LeftSection data-testid="left-section">
        <LogoImg src={logo} alt="Endava Logo" data-testid="logo-img" />
        <CenterText data-testid="center-text">
          <p>Book </p>
          <p>Sharing</p>
        </CenterText>
      </LeftSection>
      <RightSection data-testid="right-section">{children}</RightSection>
    </Container>
  );
};
