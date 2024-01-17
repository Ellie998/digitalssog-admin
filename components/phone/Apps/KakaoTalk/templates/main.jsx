import { useState } from "react";

import Phone from "@/components/phone/molecules/phone";
import KakaoTab from "@/components/phone/Apps/KakaoTalk/organisms/kakao-tab";
import FriendTab from "@/components/phone/Apps/KakaoTalk/organisms/friend-tab";
import ChatTab from "@/components/phone/Apps/KakaoTalk/organisms/chat-tab";
import OpenChatTab from "@/components/phone/Apps/KakaoTalk/organisms/open-chat-tab";
import ShoppingTab from "@/components/phone/Apps/KakaoTalk/organisms/shopping-tab";
import ETCTab from "@/components/phone/Apps/KakaoTalk/organisms/etc-tab";

function Main({
  target_friend = {
    person1: false,
    profile: false,
    setting: false,
    modal_nameChange: false,
    modal_hide: false,
    settingFriend: false,
    onMouseDown: false,
  },
  target_chat = {
    chat: false,
    groupChat: false,
    newChat: false,
    onMouseDown: false,
    leaveChat: false,
    changeName: false,
    modal: false,
  },
  target_openChat = {},
  target_shopping = {},
  target_ETC = { setting: false },
  open_friend = { friendModal: false, modal: false },
  open_chat = { topModal: false, optionModal: false, groupChat: false },
  content_chat = { groupName: "그룹채팅방1" },
  tab = {
    friend: false,
    chat: false,
    openChat: false,
    shopping: false,
    ETC: false,
  },
  content = {
    modal: { title: "", subTitle: "", content: "", button1: "", button2: "" },
  },
}) {
  function matchDefaultTabName() {
    if (tab.friend) return "friend";
    if (tab.chat) return "chat";
    if (tab.openChat) return "openChat";
    if (tab.shopping) return "shopping";
    if (tab.ETC) return "ETC";
    else return "friend";
  }

  const defaultTabName = matchDefaultTabName();
  const [clickedTabName, setClickedTabName] = useState(
    defaultTabName === "ETC" ? "friend" : defaultTabName
  );

  return (
    <Phone>
      {clickedTabName === "friend" && (
        <FriendTab
          target={{ ...target_friend }}
          open={open_friend}
          tab={tab.friend}
          content={content}
        />
      )}
      {clickedTabName === "chat" && (
        <ChatTab
          target={{ ...target_chat }}
          open={open_chat}
          tab={tab.chat}
          content={content_chat}
        />
      )}
      {clickedTabName === "openChat" && (
        <OpenChatTab target={target_openChat} tab={tab.openChat} />
      )}
      {clickedTabName === "shopping" && (
        <ShoppingTab target={target_shopping} tab={tab.shopping} />
      )}
      {clickedTabName === "ETC" && <ETCTab target={target_ETC} tab={tab.ETC} />}

      <KakaoTab
        setClickedTab={setClickedTabName}
        targetTab={defaultTabName}
        clickedTab={clickedTabName}
      />
      {/* ------tab end------ */}
    </Phone>
  );
}

export default Main;
