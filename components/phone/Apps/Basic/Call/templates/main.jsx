import { useState } from "react";

import CallTab from "@/components/phone/Apps/Basic/Call/organisms/call-tab";
import CallKeypad from "@/components/phone/Apps/Basic/Call/organisms/call-keypad";
import Phone from "@/components/phone/molecules/phone";
import Histories from "@/components/phone/Apps/Basic/Call/organisms/histories";
import Contacts from "@/components/phone/Apps/Basic/Call/organisms/contacts";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";

/** targetTab option "키패드","최근기록","연락처" */

const Main = ({
  targetTab,
  target = {
    videoCall: false,
    call: false,
    chat: false,
    info: false,
    person1: false,
    onMouseDown: false,
    delete: false,
  },
  content = { setPhoneNum: () => {}, phoneNum: "010-0000-0000" },
  open = { selectMode: false, person1: true, person2: true },
}) => {
  const [clickedTapName, setClickedTapName] = useState(targetTab);

  return (
    <Phone
      backgroundColor={
        clickedTapName === "최근기록" || clickedTapName === "연락처"
          ? "rgb(244,244,244)"
          : "white"
      }>
      <NoScrollbar height="267px" style={{ textAlign: "center" }}>
        {clickedTapName === "키패드" && (
          <CallKeypad
            content={content}
            button1={{
              targetOption: targetTab === "키패드" && target.videoCall,
            }}
            button2={{
              targetOption: targetTab === "키패드" && target.call,
            }}></CallKeypad>
        )}
        {clickedTapName === "최근기록" && (
          <Histories
            targetTab={targetTab}
            clickedTapName={clickedTapName}
            target={target}
            open={open}
          />
        )}
        {clickedTapName === "연락처" && (
          <Contacts
            targetTab={targetTab}
            clickedTapName={clickedTapName}
            target={target}
            open={open}
          />
        )}
      </NoScrollbar>
      <CallTab
        setClickedTapName={setClickedTapName}
        targetTab={targetTab}
        clickedTapName={clickedTapName}
      />
    </Phone>
  );
};

export default Main;
