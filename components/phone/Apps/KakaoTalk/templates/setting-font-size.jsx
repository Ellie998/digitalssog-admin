import styled from "@emotion/styled";
import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";
import ChatList from "@/components/DisplayBox/AppDisplays/_components/UI/ChatList";
import Flex from "@/components/phone/atoms/flex";
import Icon from "@/components/phone/atoms/icon";

import Title from "@/components/phone/atoms/title";

import Phone from "@/components/phone/molecules/phone";
import ScrollController from "@/components/phone/Apps/KakaoTalk/atoms/scroll-controller";
import { useState } from "react";

const SampleContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: var(--kakao-blue);
  padding-top: 30px;
`;

const FontSizeControllerContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Setting_FontSize = () => {
  const [position, setPosition] = useState(2);

  return (
    <Phone>
      <Flex
        style={{ justifyContent: "left" }}
        items={[<BackBtn key="1" />, <Title key="2">글자 크기</Title>]}
      />
      <SampleContainer>
        <ChatList
          fontSize={`${position * 2 + 8}px`}
          isGetList={true}
          className=""
          profile={{
            className: "bg-kakaoPurple",
            content: (
              <Icon name="person-fill" style={{ color: "white" }}></Icon>
            ),
          }}
          name={{ content: "진수", className: "" }}
          message={{
            className: "bg-white",
            content: "안녕하세요",
          }}
          timeStamp={{
            className: "",
            content: "",
          }}
        />
        <ChatList
          fontSize={`${position * 2 + 8}px`}
          isGetList={true}
          profile={{
            content: <></>,
          }}
          name={{ content: "", className: "" }}
          message={{
            className: "bg-white",
            content: "Hello",
          }}
          timeStamp={{
            className: "",
            content: "오전 9:00",
          }}
        />
      </SampleContainer>
      <FontSizeControllerContainer>
        <div style={{ fontSize: "10px" }}>가</div>
        <ScrollController
          position={position}
          setPosition={setPosition}></ScrollController>
        <div style={{ fontSize: "18px" }}>가</div>
      </FontSizeControllerContainer>
    </Phone>
  );
};

export default Setting_FontSize;
