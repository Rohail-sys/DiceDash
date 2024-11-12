import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 180px;
  text-align: center;

  h1 {
    font-size: 80px;
    line-height: 0px;
    /* margin-bottom: 40px; */
  }
  p {
    font-size: 24px;
    font-weight: 500px;
    line-height: 0;
  }
`;
