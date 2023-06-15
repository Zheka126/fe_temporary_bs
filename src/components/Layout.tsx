import styled from 'styled-components';
import SignupForm from './SignupForm';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSection = styled.div`
  position: relative;
  flex: 0.4;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 0.6;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 20px;
  left: 15px;
  width: 130px;
`;

const CenterText = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
  line-height: 34px;

  p {
    margin: 0;
  }

  p:nth-child(2) {
    margin-left: 30px;
  }
`;

export default function Layout() {
  return (
    <Container>
      <LeftSection>
        <LogoImg src="src/assets/logo.png" alt="Endava Logo" />
        <CenterText>
          <p>Book </p>
          <p>Sharing</p>
        </CenterText>
      </LeftSection>
      <RightSection>
        <SignupForm />
      </RightSection>
    </Container>
  );
}
