import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="txt">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;
  margin-top: 15px;

  h2 {
    font-size: 24px;
    line-height: 15px;
  }
  .txt {
    margin-top: 20px;
    line-height: 5px;
  }
`;
