import styled from "styled-components";

const RollDice = ({ currentDice, rollingDice }) => {
  return (
    <DiceContainer>
      <div onClick={rollingDice} className="dice">
        <img src={`/images/dice_${currentDice}.png `} height="150px" alt="" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 500;
  }
  .dice {
    cursor: pointer;
  }
`;
