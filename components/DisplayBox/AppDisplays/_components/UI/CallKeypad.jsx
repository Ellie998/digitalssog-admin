import { useState } from "react";
import styled from "@emotion/styled";

import TargetContent from "../TargetContent";
import Icon from "./Icon";
import Keypad from "stories/phone/molecules/Keypad";

const ClickedNumContainer = styled.div`
  margin-top: 1.25rem /* 20px */;
  height: 4rem /* 64px */;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`;
const BtnsContainer = styled.div`
  height: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
`;

export default function CallKeypad({ button1, button2 }) {
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
    <div>
      <ClickedNumContainer>{clickedNum}</ClickedNumContainer>
      <Keypad onClick={onchangeClickNum} />
      <BtnsContainer>
        <TargetContent
          targetOption={button1.targetOption}
          isNextDescriptionLink={true}>
          <Icon name="camera-video-fill"></Icon>
        </TargetContent>
        <TargetContent
          targetOption={button2.targetOption}
          isNextDescriptionLink={true}>
          <Icon
            style={{
              color: "rgb(255 255 255)",
              padding: "0.5rem",
              backgroundColor: "#29b840",
            }}
            name="telephone-fill"></Icon>
        </TargetContent>

        <Icon
          style={{ fontSize: "1.25rem" }}
          name="arrow-left-short"
          onClick={onDeleteNum}></Icon>
      </BtnsContainer>
    </div>
  );
}
