import styled from "@emotion/styled";

import Flex from "@/components/phone/atoms/flex";
import Icon from "@/components/phone/atoms/icon";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";
import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import TargetBox from "@/components/phone/atoms/target-box";

const Container = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
`;
const BackdropContainer = styled.div`
  background-color: rgba(6, 6, 6, 0.235);
  width: 50px;
  height: 300px;
  animation: BackdropContainer 0.8s;
  @keyframes BackdropContainer {
    0% {
      opacity: 0;
      transform: scaleX(7);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;
const SideMenuContainer = styled.div`
  background-color: white;
  height: 300px;
  width: 125px;
  animation: SideMenuContainer 0.7s;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @keyframes SideMenuContainer {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translateZ(0);
    }
  }
`;
const SideMenuNavContainer = styled.div`
  padding: 3px;
  background-color: rgb(239, 239, 239);
  position: absolute;
  bottom: 0px;
  width: 125px;
`;
const ChatSideMenu = ({
  onClickBackDrop,
  target = { setting: false, leave: false, leave_quietly: false },
}) => {
  return (
    <Container>
      <BackdropContainer onClick={onClickBackDrop}>
        <TargetBox isBackTriger={true} isNextTriger={false} />
      </BackdropContainer>
      <SideMenuContainer>
        {["채팅방 서랍", "톡캘린더", "뮤직", "톡게시판"].map((item, i) => (
          <StackedListWrap
            key={i}
            listTitle={{
              content: item,
              style: {
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: "var(--gray-700)",
                marginLeft: "0.25rem",
              },
            }}
          />
        ))}

        <StackedListWrap
          style={{ border: "none" }}
          listTitle={{
            content: "대화상대",
            style: {
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "var(--gray-700)",
              margin: "0 0 0.25rem 0.25rem",
            },
          }}>
          <StackedList_Profile
            style={{ margonBottom: "0.5rem" }}
            profile={{
              style: {
                color: "rgb(37 99 235)",
                backgroundColor: "var(--gray-200)",
              },
              name: "plus-lg",
            }}
            title={{
              style: { color: "rgb(37 99 235", fontSize: "0.75rem" },
              content: "대화 상대 초대",
            }}
          />
          <StackedList_Profile
            style={{ margonBottom: "0.5rem" }}
            profile={{
              name: "person-fill",
              style: {
                backgroundColor: "#92e7ff8a",
                color: "white",
              },
            }}
            title={{
              style: { fontSize: "0.75rem" },
              content: "나",
            }}
          />
          <StackedList_Profile
            style={{ margonBottom: "0.5rem" }}
            profile={{
              style: { backgroundColor: "#92caff8a", color: "white" },

              name: "person-fill",
            }}
            title={{
              style: { fontSize: "0.75rem" },
              content: "김대리",
            }}
          />
          <StackedList_Profile
            style={{ margonBottom: "0.5rem" }}
            profile={{
              style: { backgroundColor: "#929dff8a", color: "white" },
              name: "person-fill",
            }}
            title={{
              style: { fontSize: "0.75rem" },
              content: "사장님",
            }}
          />
        </StackedListWrap>
        <SideMenuNavContainer>
          <Flex
            items={[
              <TargetBox
                key=""
                condition={target.leave_quietly || target.leave}>
                <Icon name="box-arrow-right" />
              </TargetBox>,
              <Flex
                key="flex2"
                items={[
                  <Icon key="1" name="bell-fill" />,
                  <Icon key="2" name="star" style={{ margin: "0.25rem" }} />,
                  <TargetBox key="3" condition={target.setting}>
                    <Icon key="4" name="gear" style={{ margin: "0.25rem" }} />
                  </TargetBox>,
                ]}></Flex>,
            ]}
          />
        </SideMenuNavContainer>
      </SideMenuContainer>
    </Container>
  );
};

export default ChatSideMenu;
