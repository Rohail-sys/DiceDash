import TotalScore from "./TotalScore";
import styled from "styled-components";
import NumSelector from "./NumSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "../../styled/Button";
import { OutLinedButton } from "../../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState("");

  const GenerateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleReset = () => {
    setScore(0);
  };
  const rollingDice = () => {
    const randomNum = GenerateRandomNum(1, 7);
    setCurrentDice(randomNum);
    if (!selectedNum) {
      setError("You have not selected any Number");
      return;
    }
    setError("");

    if (selectedNum == randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
  };
  return (
    <MainCont>
      <div className="topSection">
        <TotalScore score={score} />
        <NumSelector
          setError={setError}
          error={error}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice currentDice={currentDice} rollingDice={rollingDice} />
      <div className="btn">
        <OutLinedButton onClick={handleReset}>Reset Score</OutLinedButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {" "}
          {showRules ? " Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainCont>
  );
};

export default GamePlay;

const MainCont = styled.main`
  padding-top: 40px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
