import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const CheckMarkContainer = styled.span`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isChecked ? "rgb(255, 235, 50)" : "rgba(241, 249, 255, 0.736)"};
  border: ${(props) =>
    props.isChecked ? "none" : "1px solid rgba(1, 1, 1, 0.474"};
  &::after {
    content: "";
    position: relative;
    left: 5px;
    top: 1px;
    display: ${(props) => (props.isChecked ? "block" : "none")};
    width: 5px;
    height: 10px;
    border: solid rgb(25, 25, 25);
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
  }
`;

const CheckBox = ({ id, children, isChecked, setIsChecked, label }) => {
  const [myIsChecked, mySetIsMyChecked] = useState(false);
  return (
    <Container>
      {label}
      <InputContainer
        type="checkbox"
        id={`check${id}`}
        onChange={(e) => {
          setIsChecked
            ? setIsChecked(e.target.checked)
            : mySetIsMyChecked(e.target.checked);
        }}></InputContainer>
      <CheckMarkContainer
        isChecked={isChecked ? isChecked : myIsChecked}></CheckMarkContainer>
      {children}
    </Container>
  );
};
export default CheckBox;
