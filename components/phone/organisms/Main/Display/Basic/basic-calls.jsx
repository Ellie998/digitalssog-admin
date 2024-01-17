import Home from "@/components/phone/Apps/Basic/home";
import DisplayError from "@/components/phone/organisms/Main/Display/display-error";
import Default from "@/components/phone/organisms/Main/default";
// call
import Main from "@/components/phone/Apps/Basic/Call/templates/main";
import AnswerCall from "@/components/phone/Apps/Basic/Call/templates/anser-call";
import CallConnected from "@/components/phone/Apps/Basic/Call/templates/call-connected";
import VideoCallConnected from "@/components/phone/Apps/Basic/Call/templates/video-call-connected";
// chat
import { default as ChatMain } from "@/components/phone/Apps/Basic/Message/templates/main";
import Chat from "@/components/phone/Apps/Basic/Message/templates/chat";
import { useContext, useState } from "react";

import ContactInfo from "@/components/phone/Apps/Basic/Call/templates/contact-info";
import Edit_ContactInfo from "@/components/phone/Apps/Basic/Call/templates/edit-contact-info";
import { UrlContext } from "@/components/phone/templates/display-box";

function BasicCalls({ functionName, methodId, descriptionId }) {
  const {
    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_changeName,
    functionName_deleteRecentHistory,
    functionName_deleteContact,
  } = useContext(UrlContext);

  const [name, setName] = useState("영희");

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_makeCall:
      if (methodId === "1" || methodId === "2" || methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <Main
            key="callAppMain"
            targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
            target={{ call: true, person1: true }}
          />,
          <CallConnected
            key="callConnected"
            content={{
              name: methodId !== "1" ? "영희" : "홍길동",
              num: "010-0000-0000",
            }}
          />,
        ][descriptionId];
      }
      if (methodId === "4") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <ChatMain key="MessageMain" target_seeMessage />,
          <Chat
            key="Message"
            target={{ call: true }}
            open={{ profile: true }}
          />,
          <CallConnected key="callConnected" />,
        ][descriptionId];
      }

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="answerCall" appName_basic />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_makeVideoCall:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
          target={{ videoCall: true, person1: true }}
        />,
        <VideoCallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_changeName:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab="연락처"
          target={{ info: true, person1: true }}
        />,
        <ContactInfo key="contactInfo" target={{ edit: true }} />,
        <Edit_ContactInfo
          key="edit_info"
          state={{ setName: setName, name: name }}
        />,
        <ContactInfo key="contactInfo" content={{ name: name }} />,
      ][descriptionId];

      break;
    case functionName_deleteRecentHistory:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab="최근기록"
          target={{ person1: true, onMouseDown: true }}
        />,
        <Main
          key="callAppMain"
          targetTab="최근기록"
          target={{ person1: true }}
          open={{ selectMode: true }}
        />,
        <Main
          key="callAppMain"
          targetTab="최근기록"
          open={{ person1: false, person2: true }}
        />,
      ][descriptionId];

      break;
    case functionName_deleteContact:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab="연락처"
          target={{ person1: true, onMouseDown: true }}
        />,
        <Main
          key="callAppMain"
          targetTab="연락처"
          target={{ person1: true, delete: true }}
          open={{ selectMode: true }}
        />,
        <Main
          key="callAppMain"
          targetTab="연락처"
          open={{ person1: false, person2: true }}
        />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <DisplayError />;
  }

  return choicedComponent;
}

export default BasicCalls;
