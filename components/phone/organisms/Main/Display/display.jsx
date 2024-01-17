import BasicCalls from "@/components/phone/organisms/Main/Display/Basic/basic-calls";
import BasicChats from "@/components/phone/organisms/Main/Display/Basic/basic-chats";
import KakaotalkCalls from "@/components/phone/organisms/Main/Display/KakaoTalk/kakaotalk-calls";
import KakaotalkChats from "@/components/phone/organisms/Main/Display/KakaoTalk/kakaotalk-chats";
import KakaotalkSetting from "@/components/phone/organisms/Main/Display/KakaoTalk/kakaotalk-settings";
import { useContext } from "react";
import { UrlContext } from "@/components/phone/templates/display-box";

import Default from "@/components/phone/organisms/Main/default";

function Display() {
  const {
    functionName,
    appName,
    methodOrder,
    guideOrder,

    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_changeName,
    //
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    //
    functionName_groupChat,
    functionName_leaveChat,
    functionName_chatRoomImgChange,
    functionName_chatRoomNameChange,
    functionName_changeProileImg,
    ///
    functionName_messageDelete,
    functionName_deleteRecentHistory,
    functionName_deleteContact,
    functionName_cancelMessage,
    functionName_controlFontSize,
    //
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
    //
    appName_basic,
    appName_kakaotalk,

    //
  } = useContext(UrlContext);
  const methodId = methodOrder;
  const descriptionId = String(Number(guideOrder) - 1);

  const findFunctionCategory = () => {
    if (
      functionName === functionName_getCall ||
      functionName === functionName_makeCall ||
      functionName === functionName_makeVideoCall ||
      functionName === functionName_changeName ||
      functionName === functionName_deleteRecentHistory ||
      functionName === functionName_deleteContact
    )
      return "Calls";
    if (
      functionName === functionName_sendMessage ||
      functionName === functionName_seeMessage ||
      functionName === functionName_resendMessage ||
      functionName === functionName_reserveMessage ||
      functionName === functionName_sendImg ||
      functionName === functionName_sendAudio ||
      functionName === functionName_sendPhoneNum ||
      functionName === functionName_kakaotalk_groubChatLeave_rejectInvitation ||
      functionName === functionName_kakaotalk_groubChatLock ||
      functionName === functionName_kakaotalk_groubChatLeave_quietly ||
      functionName === functionName_groupChat ||
      functionName === functionName_leaveChat ||
      functionName === functionName_chatRoomImgChange ||
      functionName === functionName_chatRoomNameChange ||
      functionName === functionName_messageDelete ||
      functionName === functionName_cancelMessage ||
      functionName === functionName_changeProileImg
    )
      return "Chats";
    if (functionName === functionName_controlFontSize) return "Settings";
  };

  const functionCategory = findFunctionCategory();

  switch (appName) {
    case appName_basic:
      return (
        <>
          {functionCategory === "Calls" && (
            <BasicCalls
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
          {functionCategory === "Chats" && (
            <BasicChats
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
        </>
      );
    case appName_kakaotalk:
      return (
        <>
          {functionCategory === "Calls" && (
            <KakaotalkCalls
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
          {functionCategory === "Chats" && (
            <KakaotalkChats
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
          {functionCategory === "Settings" && (
            <KakaotalkSetting
              functionName={functionName}
              methodId={methodId}
              descriptionId={descriptionId}
            />
          )}
        </>
      );
    default:
      return <Default />;
  }
}

export default Display;
