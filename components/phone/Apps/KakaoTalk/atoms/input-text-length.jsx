import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(13, 13, 13);
  ${(props) => (props.style ? props.style : null)}
`;
const LengthsContainer = styled.div`
  font-size: 0.8rem;
  color: rgb(174, 174, 174);
`;

const Input_TextLength = ({
  style,
  input = {
    style: {
      fontSize: "0.9rem",
      width: "110px",
    },
  },
  placeholder,
  maxLength = 50,
  setTextLength,
  textLength,
  text,
  setText,
}) => {
  const [textMyLength, setMyTextLength] = useState(0);
  const [myText, setMyText] = useState("");
  return (
    <Container style={style}>
      <input
        type="text"
        style={{ ...input.style }}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => {
          setTextLength
            ? setTextLength(e.target.value.length)
            : setMyTextLength(e.target.value.length);
          setText ? setText(e.target.value) : setMyText(e.target.value);
        }}
        value={text ? text : myText}
      />
      <Icon
        name="x"
        style={{
          color: "white",
          backgroundColor: "rgb(201, 201, 201)",
          width: "15px",
          height: "15px",
          fontWeight: "bold",
        }}
        onClick={() => {
          setTextLength ? setTextLength(0) : setMyTextLength(0);
          setText ? setText("") : setMyText("");
        }}
      />
      <LengthsContainer>
        {textLength ? textLength : textMyLength}/{maxLength}
      </LengthsContainer>
    </Container>
  );
};
export default Input_TextLength;
