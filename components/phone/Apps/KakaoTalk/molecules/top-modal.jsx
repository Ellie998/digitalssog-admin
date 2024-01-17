/* eslint-disable no-unused-vars */

// import styled from "@emotion/styled";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";
import Icon from "stories/phone/atoms/Icon";

import Modal from "stories/phone/molecules/Modal";
import Flex from "stories/phone/atoms/Flex";
import TargetBox from "stories/phone/atoms/TargetBox";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import IconBottom from "stories/phone/molecules/IconBottom";

// const BtnContainer = styled.div`
//   font-size: 0.7rem;
//   border: 1px solid rgb(225, 225, 225);
//   border-radius: 12px;
//   padding: 3px 6px;
//   text-align: center;
// `;

const TopModal = ({
  onClick,
  target = { chatPlus: false },
  open = { topModal: false },
}) => {
  return (
    <>
      {!open.topModal && (
        <AppHeader
          leftItem={[
            <div key="header_title" className="text-sm font-bold">
              채팅
            </div>,
          ]}
          rightItem={[
            <Icon key="search_icon" name="search" />,
            <TargetBox
              key="chat_add_icon"
              condition={target.chatPlus}
              idNextTriger={true}>
              <Icon name="plus-circle" className="ml-1 text-sm" />
            </TargetBox>,
            <Icon key="setting_icon" name="gear" className="ml-1 text-sm" />,
          ]}></AppHeader>
      )}
      {open.topModal && (
        <Modal
          backdrop={{ isBackTriger: false }}
          backdropStyle={{ backgroundColor: "rgb(0,0,0,0.6)" }}
          modalStyle={{
            left: "0px",
            width: "175px",
            padding: "2px 2px 10px 2px",
            borderRadius: "0px",
          }}>
          <>
            <StackedList_Profile
              onClick={onClick}
              profile={{
                content: <Icon name="arrow-left" />,
              }}
              title={{
                content: "새로운 채팅",
                style: { fontWeight: "bold" },
              }}
            />

            <Flex
              style={{ marginTop: "10px", justifyContent: "space-around" }}
              items={[
                <TargetBox
                  key="btn1"
                  condition={open.topModal && target.chatPlus}>
                  <IconBottom
                    style={{ padding: "4px" }}
                    icon={{ name: "chat", style: {} }}
                    description={{
                      content: "일반채팅",
                      style: { fontSize: "0.7rem", marginTop: "8px" },
                    }}
                  />
                </TargetBox>,
                <IconBottom
                  style={{ padding: "4px" }}
                  key="btn2"
                  icon={{ name: "lock", style: {} }}
                  description={{
                    content: "비밀채팅",
                    style: { fontSize: "0.7rem", marginTop: "8px" },
                  }}
                />,
              ]}
            />
          </>
        </Modal>
      )}
    </>
  );
};

export default TopModal;
