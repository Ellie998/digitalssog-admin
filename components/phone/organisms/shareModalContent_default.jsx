import styled from "@emotion/styled";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import { useState } from "react";
import Flex from "@/components/phone/atoms/flex";

import Icon from "@/components/phone/atoms/icon";
import TargetBox from "@/components/phone/atoms/target-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import IconBottom_Option from "@/components/phone/molecules/icon-bottom-option";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

const Container = styled.div``;
const BtnContainer = styled.div`
  border: 1px solid rgb(223, 223, 223);
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

const ShareModalContent_Default = ({
  onClick,
  content = { title: "", icon: "list" },
  target = { kakaotalk: false },
  open = { kakaotalkOption: true },
}) => {
  const friendListContents = [
    {
      backgroundColor: "rgb(244,244,244)",
      name: "나와의 채팅",
    },
    {
      backgroundColor: "var(--kakao-purple)",
      name: "영희",
    },
    {
      backgroundColor: "var(--kakao-blue)",
      name: "철수",
    },
  ];
  const shareAppList = [
    {
      name: "arrow-right-circle",
      backgroundColor: "rgb(95, 31, 197)",
      description: "Quick Share",
      color: "white",
    },
    {
      name: "chat-fill",
      backgroundColor: "rgb(255, 225, 0)",
      description: "카카오톡",
      color: "rgb(36, 25, 4)",
      target: {
        condition: target.kakaotalk && !isOptionOpen,
        isNextTriger: open.kakaotalkOption ? false : true,
      },
      option: {
        content: open.kakaotalkOption && (
          <>
            <TargetBox
              condition={target.kakaotalk}
              style={{ padding: "2px 0" }}>
              카카오톡
            </TargetBox>
            <div style={{ padding: "2px 0" }}>{`카카오톡> 나에게`}</div>
          </>
        ),
        style: { top: "95px" },
      },
    },
    {
      name: "browser-chrome",
      backgroundColor: "white",
      description: "Chrome",
      color: "",
    },
    {
      name: "lock-fill",
      backgroundColor: "rgb(63, 16, 163)",
      description: "보안 폴더",
      color: "white",
    },
    {
      content: "N",
      backgroundColor: "rgb(123, 226, 59)",
      description: "Naver",
      color: "white",
    },
    {
      name: "chat-dots-fill",
      backgroundColor: "rgb(82, 146, 230)",
      description: "메시지",
      color: "white",
    },
    {
      name: "instagram",
      backgroundColor: "rgb(231, 63, 206)",
      description: "Instargram",
      color: "white",
    },
    {
      name: "three-dots",
      backgroundColor: "rgb(233, 233, 233)",
      description: "더보기",
      color: "rgb(100,100,100)",
    },
  ];
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const setOptionClose = () => {
    setIsOptionOpen(false);
  };

  return (
    <Container id="shareModal_content" onClick={onClick}>
      <StackedListWrap onClick={setOptionClose}>
        <Flex
          style={{ fontSize: "0.85rem", justifyContent: "left" }}
          items={[
            <Icon
              name={content.icon}
              key="list"
              style={
                content.icon && {
                  border: "1px solid rgb(223, 223, 223)",
                  padding: "4px",
                  borderRadius: "8px",
                }
              }
            />,
            <div key="share_content">{content.title}</div>,
          ]}></Flex>
        <Flex
          style={{
            fontSize: "0.85rem",
            justifyContent: "left",
            margin: "10px 0 5px 0",
          }}
          items={[
            <BtnContainer key="copy">복사</BtnContainer>,
            <BtnContainer key="nearby_share">Nearby Share</BtnContainer>,
          ]}></Flex>
      </StackedListWrap>

      <StackedListWrap>
        <NoScrollBar
          style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "center",
          }}>
          {friendListContents.map((info, i) => (
            <>
              <IconBottom
                style={{ width: "40px" }}
                icon={{
                  name: i !== 0 && "person-fill",
                  content: i === 0 && "나",
                  style: {
                    color: i === 0 ? "rgb(23,23,23)" : "white",
                    backgroundColor: info.backgroundColor,
                    fontSize: "1rem",
                    padding: "4px",
                    width: "24px",
                    height: "24px",
                  },
                }}
                description={{
                  content: info.name,
                  style: { fontSize: "10px", width: "40px" },
                }}></IconBottom>
            </>
          ))}
        </NoScrollBar>
      </StackedListWrap>

      <StackedListWrap
        style={{ paddingTop: "12px", border: "none", display: "flex" }}>
        <NoScrollBar
          style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "center",
          }}>
          {shareAppList.map((info, i) => (
            <IconBottom_Option
              key={i}
              onClick={() => {
                setIsOptionOpen(true);
              }}
              style={info.option && info.option.style}
              icon={{
                name: null || info.name,
                content: null || info.content,
                backgroundColor: info.backgroundColor,
                color: info.color,
              }}
              description={info.description}
              target={null || info.target}>
              {isOptionOpen && info.option && info.option.content}
            </IconBottom_Option>
          ))}
        </NoScrollBar>
      </StackedListWrap>
    </Container>
  );
};
export default ShareModalContent_Default;
