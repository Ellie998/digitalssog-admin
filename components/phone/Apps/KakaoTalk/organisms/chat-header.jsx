/* eslint-disable no-unused-vars */

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import Icon from "@/components/phone/atoms/icon";

import Modal from "@/components/phone/molecules/modal";
import Flex from "@/components/phone/atoms/flex";
import TargetBox from "@/components/phone/atoms/target-box";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import IconBottom from "@/components/phone/molecules/icon-bottom";

const ChatHeader = ({
  onClick,
  target = { newChat: false },
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
              condition={target.newChat}
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
                  condition={open.topModal && target.newChat}>
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

export default ChatHeader;
