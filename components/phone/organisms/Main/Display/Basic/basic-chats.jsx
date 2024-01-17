import Home from "@/components/phone/Apps/Basic/home";
import DisplayError from "@/components/phone/organisms/Main/Display/display-error";
import Default from "@/components/phone/organisms/Main/default";
// message
import Main from "@/components/phone/Apps/Basic/Message/templates/main";
import Chat from "@/components/phone/Apps/Basic/Message/templates/chat";
import Unread from "@/components/phone/Apps/Basic/Message/templates/unread";
import SelectPerson from "@/components/phone/Apps/Basic/Message/templates/select-person";
import SelectFile from "@/components/phone/Apps/Basic/Message/templates/select-file";
import ChoiceImgs from "@/components/phone/Apps/Basic/Message/templates/choice-imgs";
//
import { default as CallMain } from "@/components/phone/Apps/Basic/Call/templates/main";
import { useContext } from "react";

import Gallery from "@/components/phone/Apps/Basic/Gallery/gallery";
import { UrlContext } from "@/components/phone/templates/display-box";

function BasicChats({ functionName, methodId, descriptionId }) {
  const {
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_messageDelete,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_sendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message" />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_seeMessage />,
          <Chat key="Message" />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <CallMain
            key="CallMain"
            targetTab={"연락처"}
            target={{ chat: true, person1: true }}
          />,
          <Chat key="Message" content={{ name: "영희" }} />,
        ][descriptionId];
      }
      if (methodId === "4") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <CallMain
            key="CallMain"
            targetTab={"최근기록"}
            target={{ chat: true, person1: true }}
          />,
          <Chat key="Message" content={{ name: "영희" }} />,
        ][descriptionId];
      }

      break;
    case functionName_seeMessage:
      choicedComponent =
        methodId === "1"
          ? [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_seeMessage />,
              <Chat key="Message" />,
            ][descriptionId]
          : [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_unreadMessage />,
              <Unread key="UnreadMessage" />,
              <Chat key="Message" />,
            ][descriptionId];

      break;
    case functionName_resendMessage:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_seeMessage />,
        <Chat key="Message" target_resend />,
        <Chat key="Message" target_resend open={{ contentOption: true }} />,
        <SelectPerson key="SelectPerson" target_person2 />,
        <Chat key="Message" target_resend message_fill />,
      ][descriptionId];

      break;
    case functionName_reserveMessage:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson" target_person1 />,
        <Chat key="Message" open_option target_reserveMessage />,
        <Chat key="Message" open_modal target_reserveMessage />,
        //
        <Chat key="Message" open_optionInfo target_reserveMessage />,
        <Chat
          key="Message"
          open_modal
          modal_optionSetting
          target_reserveMessage
        />,
      ][descriptionId];

      break;
    case functionName_sendImg:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message1" target_sendImgBtn />,
          <Chat key="Message2" open_imgOption target_sendImg />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message1" open_option={methodId === "2"} target_sendImg />,
          <SelectFile key="SelectFile" target_sendImg />,
          <ChoiceImgs key="ChoiceImgs" />,
          <Chat key="Message2" open_optionInfo target_sendImg />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="home" app={{ gallery: true }} />,
          <Gallery key="gallery1" target_imgTab={{ shareBtn: true }} />,
          <Gallery key="gallery2" open={{ shareOption: true }} />,
        ][descriptionId];
      }
      break;
    case functionName_sendAudio:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson" target_person1 />,
        <Chat key="Message" open_option target_sendAudio />,
        <SelectFile key="SelectFile" target_sendAudio />,
        <Chat key="Message" open_optionInfo target_sendAudio />,
      ][descriptionId];

      break;
    case functionName_sendPhoneNum:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson1" target_person1 />,
        <Chat key="Message1" open_option target_sendPhoneNum />,
        <SelectPerson key="SelectPerson2" target_person2 />,
        <Chat key="Message2" open_optionInfo target_sendPhoneNum />,
      ][descriptionId];

      break;

    case functionName_messageDelete:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_seeMessage />,
          <Chat key="Message1" target={{ message: true }} />,
          <Chat
            key="Message1"
            open={{ chat: true, contentOption: true }}
            target_option={{ delete: true }}
          />,
          <Chat key="Message1" open={{ chat: true, selectMode: true }} />,
          <Chat key="Message1" open={{ chat: false }} />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main
            key="MessageAppMain"
            target_seeMessage
            target={{ onMouseDown: true }}
          />,
          <Main
            key="MessageAppMain2"
            target={{ delete: true }}
            open={{ selectMode: true, message: true }}
          />,
          <Main
            key="MessageAppMain3"
            target={{ delete: true }}
            open={{ selectMode: true, modal_bottom: true, message: true }}
          />,
          <Main key="MessageAppMain4" open={{ message: false }} />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_seeMessage />,
          <Chat key="Message1" target={{ message: true }} />,
          <Chat
            key="Message1"
            open={{ chat: true, contentOption: true }}
            target_option={{ delete: true }}
          />,
          <Chat key="Message1" open={{ chat: true, selectMode: true }} />,
          <Chat key="Message1" open={{ chat: false }} />,
        ][descriptionId];
      }
      break;

    default:
      choicedComponent = <DisplayError />;
  }

  return choicedComponent;
}

export default BasicChats;
