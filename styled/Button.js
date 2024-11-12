import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border-style: none;
  border: 1px solid black;
  transition: 0.6s background ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.4s background ease-in;
  }
`;
export const OutLinedButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;
