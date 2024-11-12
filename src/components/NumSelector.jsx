import styled from "styled-components";

const NumSelector = ({ setError, error, selectedNum, setSelectedNum }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNum(value);
    setError("");
  };

  return (
    <NumSelectorCont>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isselected={value == selectedNum}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Selected Number</p>
    </NumSelectorCont>
  );
};

export default NumSelector;

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const NumSelectorCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
    cursor: pointer;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 0;
  }
  .error {
    color: #be0b0b;
  }
`;
