import { useState } from "react";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import Tab from "stories/phone/atoms/Tab";

function KakaoAppMain({
  defaultTab_friend,
  defaultTab_chat,
  defaultTab_openChat,

  defaultTab_shopping,
  defaultTab_ETC,
  target_chat,
  target_groupChat,
  target_profile,
  target_setting,
}) {
  function matchDefaultTabName() {
    if (defaultTab_friend) return "friend";
    if (defaultTab_chat) return "chat";
    if (defaultTab_openChat) return "openChat";
    if (defaultTab_shopping) return "shopping";
    if (defaultTab_ETC) return "ETC";
    else return "friend";
  }

  const defaultTabName = matchDefaultTabName();
  const [clickedTabName, setClickedTabName] = useState(
    defaultTabName === "ETC" ? "friend" : defaultTabName
  );
  const friendListContents = [
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoSkyblue",
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
      }}
      title={{ content: "진수", className: "" }}
      info={{
        className: "borderGray",
        content: "상태메시지 올리기.",
      }}
    />,
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoPurple",
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "행복하세요.",
      }}
    />,
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoBlue",
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
      }}
      title={{ content: "철수", className: "" }}
      info={{
        className: "borderGreenYellow",
        content: "밤이 깊었네-노..",
      }}
    />,
  ];
  const chatListContents = [
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
      }}
      title={{ content: "그룹채팅방1", className: "col-end-7" }}
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
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "네.",
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
        content: <Icon name="person-fill" className={`text-kakaoIcon`} />,
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

  return (
    <>
      <NoScrollBar height="240px">
        {/* Header start */}
        {clickedTabName === "friend" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">친구</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="person-plus" className="ml-1 text-sm" />,
              <Icon name="music-note-beamed" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {clickedTabName === "chat" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">채팅</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="plus-circle" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {clickedTabName === "openChat" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">오픈채팅</div>]}
            rightItem={[
              <Icon name="plus-circle" className="text-sm " />,
              <Icon name="chat" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {clickedTabName === "shopping" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">쇼핑</div>]}
            rightItem={[
              <Icon name="bag-check" className="text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {clickedTabName === "ETC" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">더보기</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="upc-scan" className="ml-1 text-sm" />,
              <TargetContent
                targetOption={target_setting}
                isNextDescriptionLink={true}>
                <Icon name="gear" className="ml-1 text-sm" />
              </TargetContent>,
            ]}></AppHeader>
        )}
        {/* ------Header end---- */}
        {/* main start */}
        {clickedTabName === "friend" && (
          <>
            <StackedListWrap>{friendListContents[0]}</StackedListWrap>
            <StackedListWrap
              className="border-none"
              listTitle={{ content: "친구 2" }}>
              {friendListContents[1]}
              <TargetContent
                targetOption={target_profile}
                isNextDescriptionLink={true}>
                {friendListContents[2]}
              </TargetContent>
            </StackedListWrap>
          </>
        )}
        {clickedTabName === "chat" && (
          <>
            {target_groupChat && (
              <TargetContent
                targetOption={target_groupChat}
                isNextDescriptionLink={true}>
                {chatListContents[0]}
              </TargetContent>
            )}
            {target_chat && (
              <TargetContent
                targetOption={target_chat}
                isNextDescriptionLink={true}>
                {chatListContents[1]}
              </TargetContent>
            )}
            {chatListContents[2]}
          </>
        )}
        {clickedTabName === "openChat" && <></>}
        {clickedTabName === "shopping" && <></>}
        {clickedTabName === "ETC" && <></>}
        {/* -------main end------ */}
      </NoScrollBar>

      {/* tab start */}
      <Tab
        className="shadow-sm bg-neutral-100"
        setClickedTab={setClickedTabName}
        defaultTab={defaultTabName}
        clickedTab={clickedTabName}
        iconItems={[
          {
            tabname: "friend",
            content: "bi bi-person",
            clickedContent: "bi bi-person-fill",
          },
          {
            tabname: "chat",
            content: "bi bi-chat",
            clickedContent: "bi bi-chat-fill",
          },
          {
            tabname: "openChat",
            content: "bi bi-chat-heart",
            clickedContent: "bi bi-chat-heart-fill",
          },
          {
            tabname: "shopping",
            content: "bi bi-handbag",
            clickedContent: "bi bi-handbag-fill",
          },
          {
            tabname: "ETC",
            content: "bi bi-three-dots",
            clickedContent: "bi bi-three-dots",
          },
        ]}></Tab>
      {/* ------tab end------ */}
    </>
  );
}

export default KakaoAppMain;
