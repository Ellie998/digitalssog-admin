/* eslint-disable no-unused-vars */

import styled from "@emotion/styled";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import Flex from "@/components/phone/atoms/flex";
import FlexInFlex from "@/components/phone/atoms/flex-in-flex";
import Icon from "@/components/phone/atoms/icon";
import TargetBox from "@/components/phone/atoms/target-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

const Container = styled.div``;

const ShareModalContent = ({
  onClick,
  target = { friend2: false, shareOut: false },
}) => {
  const friendListContents1 = [
    {
      backgroundColor: "var(--kakao-purple)",
      name: "영희",
    },
    {
      backgroundColor: "var(--kakao-blue)",
      name: "철수",
    },
  ];
  const friendListContents2 = [
    {
      backgroundColor: "var(--kakao-skyblue)",
      name: "김지예",
    },
    {
      backgroundColor: "var(--kakao-purple)",
      name: "사장님",
    },
    {
      backgroundColor: "var(--kakao-blue)",
      name: "김대리",
    },
  ];

  return (
    <Container id="shareModal_content" onClick={onClick}>
      <FlexInFlex
        style={{ fontSize: "0.85rem" }}
        flexStyle={{ margin: "0 0" }}
        leftItem={[<Icon name="x-lg" key="x" />]}
        centerItem={["전달하기"]}
      />
      <Flex
        style={{ fontSize: "0.75rem" }}
        items={[
          <div key="friend_tab">친구</div>,
          <div key="chat_tab">채팅</div>,
        ]}
      />
      <StackedListWrap>
        <NoScrollBar
          style={{
            display: "flex",
            alignItems: "flex-start",
            textAlign: "center",
          }}>
          {friendListContents1.map((info, i) => (
            <TargetBox key={i} condition={i === 1 && target.friend2}>
              <IconBottom
                style={{ width: "40px" }}
                icon={{
                  name: "person-fill",
                  style: {
                    color: "white",
                    backgroundColor: info.backgroundColor,
                    fontSize: "1rem",
                    padding: "4px",
                  },
                }}
                description={{
                  content: (
                    <div>
                      <div style={{ fontSize: "10px" }}>{info.name}</div>
                      <Icon
                        name={"star-fill"}
                        style={{
                          fontSize: "10px",
                          margin: "0 auto",
                          color: "rgb(212,212,212)",
                        }}
                      />
                    </div>
                  ),
                }}></IconBottom>
            </TargetBox>
          ))}
          {friendListContents2.map((info, i) => (
            <IconBottom
              key={i}
              style={{ width: "40px" }}
              icon={{
                name: "person-fill",
                style: {
                  color: "white",
                  backgroundColor: info.backgroundColor,
                  fontSize: "1rem",
                  padding: "4px",
                },
              }}
              description={{
                content: info.name,
                style: { fontSize: "10px", width: "40px" },
              }}></IconBottom>
          ))}
        </NoScrollBar>
      </StackedListWrap>
      <StackedListWrap
        style={{ paddingTop: "12px", border: "none", display: "flex" }}>
        <IconBottom
          icon={{
            content: "나",
            style: {
              border: "1px solid rgb(23,23,23)",
              fontSize: "12px",
              width: "20px",
              height: "20px",
            },
          }}
          description={{ content: "나에게", style: { fontSize: "10px" } }}
          style={{ width: "50px" }}
        />
        <TargetBox condition={target.shareOut}>
          <IconBottom
            style={{ width: "50px" }}
            icon={{
              name: "share",
              style: {
                width: "20px",
                height: "20px",
              },
            }}
            description={{ content: "외부 공유", style: { fontSize: "10px" } }}
          />
        </TargetBox>
      </StackedListWrap>
    </Container>
  );
};
export default ShareModalContent;
