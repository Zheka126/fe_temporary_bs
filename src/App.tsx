import styled from "styled-components";
import "./App.css";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  return (
    <>
      <Title>SAY MY NAME</Title>
      <img
        src="https://i1.sndcdn.com/artworks-000173392556-ppnbfq-t500x500.jpg"
        alt=""
      />
    </>
  );
}

export default App;
