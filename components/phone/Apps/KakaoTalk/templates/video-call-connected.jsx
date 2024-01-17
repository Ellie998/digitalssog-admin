/* eslint-disable no-unused-vars */
import { useState } from "react";

import Phone from "@/components/phone/molecules/phone";

import Top from "@/components/phone/atoms/top";
import Icon from "@/components/phone/atoms/icon";
import Flex from "@/components/phone/atoms/flex";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";
import TargetBox from "@/components/phone/atoms/target-box";

const VideoCallConnected = ({ open = { modal: false } }) => {
  const [time, setTime] = useState(0);

  const timer = setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  if (time === 9) clearTimeout(timer);
  return (
    <Phone backgroundColor={"rgb(44,44,44,0.1)"}>
      {open.modal && (
        <Modal modalStyle={{ top: "80px" }}>
          <ModalContents
            title={{ content: "데이터 사용 알림" }}
            subTitle={{
              content:
                "모바일 데이터 환경에서 연결 시 데이터 요금이 발생할 수 있습니다.",
            }}
            buttons={{
              content: [
                <TargetBox
                  key="1"
                  style={{ color: "rgb(52, 97, 196)" }}
                  condition={true}>
                  다시보지않음
                </TargetBox>,
                <TargetBox
                  key="2"
                  style={{ color: "rgb(52, 97, 196)" }}
                  condition={true}>
                  확인
                </TargetBox>,
              ],
              style: {
                marginTop: "15px",
                fontSize: "0.8rem",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-around",
              },
            }}
          />
        </Modal>
      )}
      <>
        <Flex
          style={{ justifyContent: "end" }}
          items={[
            <Icon
              key="volume-mute"
              name="volume-mute"
              style={{
                backgroundColor: "rgb(44,44,44,0.5)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="person"
              name="person"
              style={{
                backgroundColor: "rgb(44,44,44,0.5)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="smaller"
              name="chevron-down"
              style={{
                backgroundColor: "rgb(44,44,44,0.5)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                marginRight: "1rem",
              }}
            />,
          ]}
        />
        <Top
          title={{ content: "영희" }}
          subTitle={{ content: "연결 중입니다." }}
        />

        <Flex
          style={{
            width: "175px",
            position: "relative",
            backgroundColor: "rgb(32, 32, 32)",
            padding: "10px",
            top: "175px",
          }}
          items={[
            <Icon
              key="1"
              name="stars"
              style={{
                backgroundColor: "rgb(65, 65, 65)",
                padding: "4px",
                color: "rgb(202, 202, 202)",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="2"
              name="mic-fill"
              style={{
                backgroundColor: "rgb(65, 65, 65)",
                padding: "4px",
                color: "rgb(202, 202, 202)",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="3"
              name="telephone-x-fill"
              style={{
                backgroundColor: "rgb(211, 51, 43)",
                padding: "4px",
                color: "rgb(255, 255, 255)",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="4"
              name="repeat"
              style={{
                backgroundColor: "rgb(65, 65, 65)",
                padding: "4px",
                color: "rgb(202, 202, 202)",
                fontSize: "1rem",
              }}
            />,
            <Icon
              key="5"
              name="camera-video-fill"
              style={{
                backgroundColor: "rgb(65, 65, 65)",
                padding: "4px",
                color: "rgb(202, 202, 202)",
                fontSize: "1rem",
              }}
            />,
          ]}
        />
      </>
    </Phone>
  );
};

export default VideoCallConnected;
