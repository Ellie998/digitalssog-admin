import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.style ? props.style : null)}
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
    props.isChecked ? props.style.checkedColor : "rgb(255, 255, 255)"};
  border: ${(props) =>
    props.isChecked ? "none" : "1px solid rgba(1, 1, 1, 0.474)"};
  &::after {
    content: "";
    position: relative;
    left: 5px;
    top: 1px;
    display: ${(props) => (props.isChecked ? "block" : "none")};
    width: 5px;
    height: 10px;
    border: solid rgb(255, 255, 255);
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
    ${(props) => (props.style.after ? props.style.after : null)}
  }
  ${(props) => (props.style ? props.style : null)}
`;

const CheckBox = ({
  id,
  children,
  isChecked,
  setIsChecked,
  style,
  checkboxStyle = { after: {}, checkedColor: "rgb(0, 114, 253)" },
  display = true,
}) => {
  const [myIsChecked, mySetIsMyChecked] = useState(false);
  return (
    <Container style={style}>
      <InputContainer
        type="checkbox"
        id={`check${id}`}
        onChange={(e) => {
          setIsChecked
            ? setIsChecked(e.target.checked)
            : mySetIsMyChecked(e.target.checked);
        }}></InputContainer>
      {display && (
        <CheckMarkContainer
          isChecked={isChecked ? isChecked : myIsChecked}
          style={checkboxStyle}></CheckMarkContainer>
      )}
      {children}
    </Container>
  );
};
export default CheckBox;
