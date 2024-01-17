import { useState } from "react";
import styled from "@emotion/styled";

import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import Keypad from "@/components/phone/molecules/keypad";
import Icon from "@/components/phone/atoms/icon";

const ClickedNumContainer = styled.div`
  margin-top: 1.25rem /* 20px */;
  height: 4rem /* 64px */;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`;
const BtnsContainer = styled.div`
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const CallKeypad = ({ button1, button2 }) => {
  const [clickedNum, changeNum] = useState("");

  function onchangeClickNum(event) {
    if (event.target.innerText && event.target.nodeName === "DIV") {
      if (
        (!clickedNum.includes("-") && clickedNum.length === 3) ||
        clickedNum === "02"
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (
        (clickedNum.length === 6 && clickedNum.slice(0, 2) === "02") ||
        (clickedNum.length === 8 && clickedNum.slice(0, 2) === "01") ||
        (clickedNum.length === 7 && clickedNum.slice(0, 2) !== "02")
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (clickedNum.length > 20) {
        changeNum("");
      } else {
        changeNum(clickedNum + event.target.innerText);
      }
    }
  }

  function onDeleteNum() {
    changeNum(clickedNum.slice(0, clickedNum.length - 1));
  }

  return (
    <>
      <ClickedNumContainer>{clickedNum}</ClickedNumContainer>
      <Keypad onClick={onchangeClickNum} />
      <BtnsContainer>
        <TargetContent
          targetOption={button1.targetOption}
          isNextDescriptionLink={true}>
          <Icon
            style={{
              fontSize: "1rem",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            name="camera-video-fill"></Icon>
        </TargetContent>
        <TargetContent
          targetOption={button2.targetOption}
          isNextDescriptionLink={true}>
          <Icon
            style={{
              color: "rgb(255 255 255)",
              backgroundColor: "#29b840",
              padding: "10px",
              fontSize: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            name="telephone-fill"></Icon>
        </TargetContent>
        <Icon
          style={{
            fontSize: "1.25rem",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          name="arrow-left-short"
          onClick={onDeleteNum}></Icon>
      </BtnsContainer>
    </>
  );
};
export default CallKeypad;
