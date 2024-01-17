import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import Icon from "@/components/phone/atoms/icon";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";

import StackedListWrap from "@/components/DisplayBox/AppDisplays/_components/list/StackedListWrap";
import TargetBox from "@/components/phone/atoms/target-box";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";
import { useEffect, useState } from "react";

function FriendTab({
  target = {
    profile: false,
    person1: false,
    setting: false,
    modal_nameChange: false,
    modal_hide: false,
    settingFriend: false,
    onMouseDown: false,
  },
  tab,
  open = { friendModal: false, modal: false },
  content,
}) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(false);
  }, []);

  const friendListContents = [
    <StackedList_Profile
      key="jinsu"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "진수", className: "" }}
      info={{
        style: {
          border: "1px solid rgb(233,233,233)",
          borderRadius: "0.75rem",
          padding: "0px 3px",
          textAlign: "center",
          overflow: "hidden",
          gridColumnStart: "4",
        },
        hover: {
          backgroundColor: "rgb(208 208 208)",
        },
        content: "상태메시지 올리기.",
      }}
    />,
    <StackedList_Profile
      key="younghee"
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "행복하세요.",
      }}
    />,
    <StackedList_Profile
      key="cherlsu"
      profile={{
        style: { backgroundColor: "var(--kakao-blue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "철수", className: "" }}
      info={{
        style: {
          border: "1px solid  rgb(173 255 47)",
          borderRadius: "0.75rem",
          padding: "0px 3px",
          textAlign: "center",
          overflow: "hidden",
        },
        hover: {
          backgroundColor: "rgb(208 208 208)",
        },
        content: "애상 - 쿨",
      }}
    />,
  ];

  return (
    <>
      {open.modal && (
        <Modal modalStyle={{ top: "70px" }}>
          <ModalContents
            title={{
              content: null || content.modal.title,
              style: { fontWeight: "bold" },
            }}
            subTitle={{
              content: null || content.modal.subTitle,
              style: { fontSize: "12px" },
            }}
            buttons={{
              content: [content.modal.button1, content.modal.button2],
              style: {
                color: "rgb(8, 119, 255)",
                fontWeight: "bold",
                fontSize: "13px",
                justifyContent: "space-around",
                marginTop: "4px",
              },
            }}>
            {null || content.modal.content}
          </ModalContents>
        </Modal>
      )}
      {open.friendModal && (
        <Modal modalStyle={{ top: "80px" }}>
          <ModalContents
            title={{ content: "영희", style: { fontWeight: "bold" } }}>
            <div
              id="modal_wrap"
              style={{ fontSize: "0.85rem", marginLeft: "8px" }}>
              <TargetBox style={{ padding: "2px 0" }}>
                즐겨찾기에 추가
              </TargetBox>
              <TargetBox
                condition={target.modal_nameChange}
                style={{ padding: "2px 0" }}>
                이름 변경
              </TargetBox>
              <TargetBox
                condition={target.modal_hide}
                style={{ padding: "2px 0" }}>
                숨김
              </TargetBox>
              <TargetBox style={{ padding: "2px 0" }}>차단</TargetBox>
            </div>
          </ModalContents>
        </Modal>
      )}

      <NoScrollBar height="260px">
        <AppHeader
          leftItem={[
            <div key="header_title" className="text-sm font-bold">
              친구
            </div>,
          ]}
          rightItem={[
            <Icon key="search_icon" name="search" />,
            <Icon key="add_friend_icon" name="person-plus" />,
            <Icon key="music_icon" name="music-note-beamed" />,
            <TargetBox
              condition={target.setting && !isClicked}
              key="setting_icon"
              onClick={() => setIsClicked(true)}
              isNextTriger={false}>
              <Icon name="gear" />
            </TargetBox>,
            isClicked && (
              <div
                key={"modal"}
                style={{
                  fontSize: "14px",
                  position: "absolute",
                  zIndex: "100",
                  backgroundColor: "white",
                  borderRadius: "6px",
                  boxShadow: "0 0 4px rgba(1, 1, 1, 0.275)",
                  padding: "10px",
                  width: "100px",
                  marginLeft: "-100px",
                  marginTop: "30px",
                  animation: "opacity0to100 0.5s;",
                }}>
                <TargetBox style={{ marginBottom: "4px" }}>편집</TargetBox>
                <TargetBox
                  style={{ marginBottom: "4px" }}
                  condition={target.settingFriend}>
                  친구 관리
                </TargetBox>
                <TargetBox>전체 설정</TargetBox>
              </div>
            ),
          ]}></AppHeader>
        <>
          <StackedListWrap>
            <TargetBox condition={target.profile && tab}>
              {friendListContents[0]}
            </TargetBox>
          </StackedListWrap>
          <StackedListWrap
            className="border-none"
            listTitle={{ content: "친구 2" }}>
            <TargetBox
              onMouseDown={
                target.person1 && target.onMouseDown ? () => {} : null
              }
              condition={target.person1 && tab}>
              {friendListContents[1]}
            </TargetBox>
            {friendListContents[2]}
          </StackedListWrap>
        </>
      </NoScrollBar>
    </>
  );
}

export default FriendTab;
