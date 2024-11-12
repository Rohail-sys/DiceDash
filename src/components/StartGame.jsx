import styled from "styled-components";
import { Button } from "../../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dice1.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle} className="btn">
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  h1 {
    font-size: 96px;
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 0;
  }
`;
