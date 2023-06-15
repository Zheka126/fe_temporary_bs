import { Container, LeftSection, RightSection, LogoImg, CenterText } from './AuthLayout.styles';
import { AuthLayoutProps } from '../../types';

export default function AuthLayout({ children }: AuthLayoutProps) {
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
}
