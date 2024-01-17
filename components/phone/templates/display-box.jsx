import Loading from "@/app/(blog)/(routes)/(root)/loading";
import Display from "@/components/phone/organisms/Main/Display/display";
import { decodeUrl } from "@/lib/utils";
import { useParams, useSearchParams } from "next/navigation";

import { Suspense, createContext } from "react";
import Phone from "../molecules/phone";

export const UrlContext = createContext({
  functionName: "",
  appName: "",
  appNames: [],
  methodOrder: "",
  guideOrder: "",
  //
  functionName_makeCall: "",
  functionName_getCall: "",
  functionName_makeVideoCall: "",
  functionName_sendMessage: "",
  functionName_resendMessage: "",
  functionName_reserveMessage: "",
  functionName_sendImg: "",
  functionName_sendAudio: "",
  functionName_sendPhoneNum: "",
  functionName_kakaotalk_groubChatLeave_rejectInvitation:
    "그룹채팅방 초대거부 및 나가기",
  functionName_kakaotalk_groubChatLock: "그룹채팅방 채팅 입력창 잠금하기",
  functionName_kakaotalk_groubChatLeave_quietly: "그룹채팅방 조용히 나가기",
  functionName_messageDelete: "",
  functionName_cancelMessage: "보낸 메시지 취소하기",
  functionName_deleteRecentHistory: "",
  functionName_deleteContact: "",
  ///
  functionName_chatRoomImgChange: "",
  functionName_chatRoomNameChange: "",
  functionName_changeProileImg: "",
  //
  functionName_controlFontSize: "글자 크기 변경하기",
  //
  appName_basic: "",
  appName_kakaotalk: "",
  appName_call: "",
  appName_message: "",
  //
});

const appName_basic = "기본";
const appName_call = "전화";
const appName_message = "메시지";
const appName_kakaotalk = "카카오톡";
//
const functionName_makeCall = "전화걸기(발신)";
const functionName_getCall = "전화받기(수신)";
const functionName_makeVideoCall = "영상통화 발신";
const functionName_changeName = "저장된 연락처(친구) 이름 바꾸기";
//
const functionName_sendMessage = "문자 발신";
const functionName_seeMessage = "문자 수신";
const functionName_resendMessage = "문자 전달";
const functionName_reserveMessage = "예약 문자 발송";
const functionName_sendImg = "이미지, 동영상 전송";
const functionName_sendAudio = "오디오 전송";
const functionName_sendPhoneNum = "연락처 공유";
const functionName_groupChat = "그룹 채팅하기";
const functionName_messageDelete = "메시지 삭제하기";
const functionName_deleteRecentHistory = "최근 기록 삭제하기";
const functionName_deleteContact = "연락처 삭제하기";
//
const functionName_changeProileImg = "프로필 사진 변경하기";
const functionName_chatRoomNameChange = "채팅방 이름 변경하기";
const functionName_chatRoomImgChange = "그룹채팅방 프로필 이미지 변경하기";
const functionName_leaveChat = "채팅방(개인 채팅, 그룹 채팅) 나가기";
const functionName_kakaotalk_groubChatLeave_rejectInvitation =
  "그룹채팅방 초대거부 및 나가기";
const functionName_kakaotalk_groubChatLock = "그룹채팅방 채팅 입력창 잠금하기";
const functionName_kakaotalk_groubChatLeave_quietly =
  "그룹채팅방 조용히 나가기";

function DisplayBox({ appNames }) {
  const params = useParams();
  const searchParams = useSearchParams();

  const functionName = decodeUrl(params.functionName);
  const appName = decodeUrl(searchParams.get("appName") || appNames[0] || "");
  const methodOrder = searchParams.get("methodOrder") || "1";
  const guideOrder = searchParams.get("guideOrder") || "1";

  return (
    <UrlContext.Provider
      value={{
        functionName: functionName,
        appName,
        appNames,
        methodOrder,
        guideOrder,
        //
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
        functionName_cancelMessage: "보낸 메시지 취소하기",
        functionName_controlFontSize: "글자 크기 변경하기",
        //
        functionName_kakaotalk_groubChatLeave_rejectInvitation,
        functionName_kakaotalk_groubChatLock,
        functionName_kakaotalk_groubChatLeave_quietly,
        //
        appName_basic,
        appName_kakaotalk,
        appName_message,
        appName_call,
      }}>
      <Suspense
        fallback={
          <Phone>
            <Loading />
          </Phone>
        }>
        <Display />
      </Suspense>
    </UrlContext.Provider>
  );
}

export default DisplayBox;
