/* eslint-disable no-unused-vars */

import StackedList_Profile from "@/components/DisplayBox/AppDisplays/_components/list/StackedList_Profile";
import Icon from "@/components/phone/atoms/icon";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";

import TargetBox from "@/components/phone/atoms/target-box";
import ChatHeader from "@/components/phone/Apps/KakaoTalk/organisms/chat-header";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";
import Button from "@/components/phone/atoms/button";

const ChatTab = ({
  target = {
    groupChat: false,
    leaveChat: false,
    changeName: false,
    chat: false,
    newChat: false,
    modal: false,
    onMouseDown: false,
  },
  open = { topModal: false, optionModal: false, groupChat: false },
  content = { groupName: "그룹채팅방1" },
}) => {
  const chatListContents = [
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: content.groupName, className: "col-end-7" }}
      subTitle={{
        className: "",
        content: "퇴사합니다",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오전 8:09",
      }}
      subInfo={{}}
    />,
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "좋은 아침^^",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오후 2:05",
      }}
      subInfo={{
        className: "col-start-5 text-center alert--yellow",
        content: "1",
      }}
    />,
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoBlue",
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "철수", className: "" }}
      subTitle={{
        className: "col-end-7",
        content: "이모티콘을 보냈습니다.",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오전 9:42",
      }}
    />,
  ];
  const optionListContents = [
    {
      content: "채팅방 이름 설정",
      target: target.changeName,
      isNextTriger: true,
    },
    { content: "즐겨찾기에 추가" },
    { content: "채팅방 상단 고정" },
    { content: "채팅방 알림 끄기" },
    { content: "홈 화면에 바로가기 추가" },
    { content: "나가기", target: target.leaveChat, isNextTriger: true },
  ];

  return (
    <>
      <NoScrollBar height="260px">
        {open.optionModal && (
          <Modal modalStyle={{ top: "50px" }}>
            <ModalContents
              title={{ content: "그룹채팅방1", style: { fontWeight: "bold" } }}>
              {optionListContents.map((item, i) => (
                <TargetBox
                  style={{ fontSize: "0.8rem", padding: "4px 0 2px 8px" }}
                  key={i}
                  condition={item.target}
                  isNextTriger={item.isNextTriger}>
                  {item.content}
                </TargetBox>
              ))}
            </ModalContents>
          </Modal>
        )}
        {open.modal && (
          <Modal modalStyle={{ top: "80px" }}>
            <ModalContents
              title={{
                content: "채팅방 나가기",
                style: { fontWeight: "bold" },
              }}
              subTitle={{
                content:
                  "나가기를 하면 대화 내용이 모두 삭제되고 채팅목록에서도 삭제됩니다.",
                style: { padding: "4px 0 2px 0", fontSize: "0.7rem" },
              }}
              buttons={{
                style: { justifyItems: "flex-end" },
                content: [
                  <Button
                    key={"btn1"}
                    style={{
                      color: "rgb(86, 116, 235)",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                    }}
                    condition={true}
                    isBackTriger={true}>
                    취소
                  </Button>,
                  <Button
                    key={"btn2"}
                    style={{
                      color: "rgb(86, 116, 235)",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                    }}
                    condition={target.leaveChat}
                    isNextTriger={true}>
                    나가기
                  </Button>,
                ],
              }}></ModalContents>
          </Modal>
        )}
        <ChatHeader target={target} open={open}></ChatHeader>

        <>
          {(open.groupChat || target.groupChat) && (
            <TargetBox
              condition={target.groupChat}
              onMouseDown={
                target.onMouseDown && target.groupChat ? () => {} : null
              }>
              {chatListContents[0]}
            </TargetBox>
          )}
          {target.chat && (
            <TargetBox condition={target.chat}>{chatListContents[1]}</TargetBox>
          )}
          {chatListContents[2]}
        </>
      </NoScrollBar>
    </>
  );
};

export default ChatTab;
