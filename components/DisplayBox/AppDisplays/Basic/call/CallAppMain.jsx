import { useState } from "react";

import TargetContent from "../../components/TargetContent";
import StackedList_Profile from "../../components/list/StackedList_Profile";
import FlexContent from "../../components/list/FlexContent";
import Tab from "../../components/layout/Tab";
import NoScrollBar from "../../components/layout/NoScrollBar";
import CallKeypad from "../../components/UI/CallKeypad";
import AppTitle_center from "../../components/layout/AppTitle_center";
import Icon from "../../components/UI/Icon";
import StackedListWrap from "../../components/list/StackedListWrap";
import ListOption from "../../components/list/ListOption";

function CallAppMain({ targetTab, target_videoCall, target_Call }) {
  const scrollElement = document.getElementById("component_NoScrollBar");

  const [clickedTapName, setClickedTapName] = useState("키패드");
  const [isListClicked1, setIsListClicked1] = useState(false);
  const [isListClicked2, setIsListClicked2] = useState(false);

  const showListOption1 = () => {
    !isListClicked1 && setIsListClicked1(true);
    isListClicked1 && setIsListClicked1(false);
    setIsListClicked2(false);
  };
  const showListOption2 = () => {
    !isListClicked2 && setIsListClicked2(true);
    isListClicked2 && setIsListClicked2(false);
    setIsListClicked1(false);
  };

  // 연락처 누르면 생기는 옵션 elements
  const optionlistContent = (
    <FlexContent
      className=""
      items={[
        <TargetContent
          key="telephone"
          targetOption={targetTab === clickedTapName && target_Call}
          isNextDescriptionLink={true}>
          <i className="text-green-600 bi bi-telephone-fill" />
        </TargetContent>,
        <i key="chat" className="text-green-600 bi bi-chat-fill" />,
        <i key="camera" className="text-green-600 bi bi-camera-video-fill" />,
        <i key="info" className="text-green-600 bi bi-info-circle-fill" />,
      ]}
    />
  );

  // 최근기록 tap에 만들 list 정보
  const callHistoryListProps = [
    {
      id: `callHistoryList1`,
      onClickFunction: showListOption1,
      className1: "",
      content1: (
        <i className="text-green-700 profileIconWrap bi bi-telephone-outbound-fill"></i>
      ),
      className2: "",
      content2: "영희",
      className3: "",
      content3: "오후 7:38",
      children: isListClicked1 && (
        <ListOption
          title={{ content: "휴대전화 010-1234-0000" }}
          subTitle={{ content: "휴대전화 발신전화, 0분 33초" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
    {
      id: `callHistoryList2`,
      onClickFunction: showListOption2,
      className1: "",
      content1: (
        <i className="text-green-700 profileIconWrap bi bi-telephone-outbound-fill"></i>
      ),
      className2: "",
      content2: "철수",
      className3: "",
      content3: "오후 5:20",
      children: isListClicked2 && (
        <ListOption
          title={{ content: "휴대전화 010-1234-0000" }}
          subTitle={{ content: "휴대전화 발신전화, 0분 24초" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
  ];
  // 연락처 tap에 만들 list 정보
  const contactListProps = [
    //진수
    {
      id: `contactList1`,
      className: "h-8",
      profile: {
        className: "bg-pink-300 ",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "진수",
      },
    },
    // 즐겨찾는 연락처 추가
    {
      id: `contactList2`,
      className: "h-8",
      profile: {
        className: "bg-yellow-200",
        content: <i className="text-white bi bi-star"></i>,
      },
      title: {
        className: "",
        content: "즐겨찾는 연락처 추가",
      },
    },

    //그룹
    {
      id: `contactList3`,
      className: "h-8",
      profile: {
        className: "bg-gray-200",
        content: <i className="text-white bi bi-people-fill"></i>,
      },
      title: {
        className: "",
        content: "그룹",
      },
    },

    // ㅇ
    {
      id: `contactList4`,
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
        content: "ㅇ",
      },
    },

    // 영희
    {
      id: `contactList5`,
      onClick: () => {
        showListOption1();
        scrollElement.scroll(0, 315);
      },
      className: "h-8",
      profile: {
        className: "bg-pink-200",
        content: <i className="text-white iconWrap bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "영희",
      },
      children: isListClicked1 && (
        <ListOption title={{ content: "휴대전화 010-1234-0000" }}>
          {optionlistContent}
        </ListOption>
      ),
    },

    // ㅊ
    {
      id: `contactList6`,
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
        content: "ㅊ",
      },
    },
    //철수
    {
      id: `contactList7`,
      onClick: () => {
        showListOption2();
        scrollElement.scroll(0, 340);
      },
      className: "h-8",
      profile: {
        className: "bg-orange-200",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "철수",
      },
      children: isListClicked2 && (
        <ListOption title={{ content: "휴대전화 010-1234-0001" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
  ];

  return (
    <>
      <NoScrollBar height="267px" className="text-center">
        {clickedTapName === "키패드" && (
          <CallKeypad
            button1={{
              targetOption: targetTab === "키패드" && target_videoCall,
            }}
            button2={{
              targetOption: targetTab === "키패드" && target_Call,
            }}></CallKeypad> // <div>
        )}
        {clickedTapName === "최근기록" && (
          <>
            <AppTitle_center title={{ content: "전화" }}></AppTitle_center>
            <FlexContent
              items={[
                <div />,

                <FlexContent
                  items={[
                    <Icon key="1" name="filter" className={`text-sm`} />,
                    <Icon key="2" name="search" className={`text-sm `} />,
                    <Icon
                      key="3"
                      name="three-dots-vertical"
                      className={`text-sm `}
                    />,
                  ]}
                />,
              ]}
            />
            <StackedListWrap
              listTitle={{ content: "6월 17일" }}
              className={`border-none`}>
              {callHistoryListProps.map((prop) => (
                <StackedList_Profile
                  key={prop.id}
                  className="h-8"
                  onClick={prop.onClickFunction ? prop.onClickFunction : null}
                  profile={{
                    className: `${prop.className1}`,
                    content: prop.content1,
                  }}
                  title={{
                    className: prop.className2,
                    content: prop.content2,
                  }}
                  info={{
                    className: `${prop.className3} text-end`,
                    content: prop.content3,
                  }}>
                  {prop.children ? prop.children : null}
                </StackedList_Profile>
              ))}
            </StackedListWrap>
          </>
        )}
        {clickedTapName === "연락처" && (
          <>
            <AppTitle_center
              title={{ content: "전화" }}
              subTitle={{
                content: "전화번호가 저장된 연락처 2개",
              }}></AppTitle_center>
            <FlexContent
              items={[
                <div />,

                <FlexContent
                  items={[
                    <Icon name="plus" className={`text-sm`} />,

                    <Icon name="search" className={`text-sm`} />,

                    <Icon name="three-dots-vertical" className={`text-sm`} />,
                  ]}
                />,
              ]}
            />
            <StackedListWrap
              listTitle={{ content: "내 프로필" }}
              className={`border-none`}>
              {contactListProps.map((prop) => (
                <StackedList_Profile
                  key={prop.id}
                  onClick={prop.onClick}
                  className={prop.className}
                  profile={prop.profile}
                  title={prop.title}>
                  {prop.children}
                </StackedList_Profile>
              ))}
            </StackedListWrap>
          </>
        )}
      </NoScrollBar>
      <Tab
        className="shadow-sm"
        setClickedTab={setClickedTapName}
        defaultTab={targetTab}
        clickedTab={clickedTapName}
        textItems={["키패드", "최근기록", "연락처"]}
        theme="green-600"
        clickEvent="underBar"></Tab>
    </>
  );
}

export default CallAppMain;
