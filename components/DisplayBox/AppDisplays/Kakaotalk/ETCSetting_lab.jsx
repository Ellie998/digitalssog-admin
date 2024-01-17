import { useState } from "react";

import classes from "./ETCSetting.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

import Switch from "components/DisplayBox/AppDisplays/components/UI/Switch";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";

import StackedList from "components/DisplayBox/AppDisplays/components/list/StackedList";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";

function ETCSetting_lab({ target_groubChatLeave_quietly }) {
  const [checkedContent, setCheckedContent] = useState("");

  const laboratoryMenuContents = [
    //      title: "실험실 이용하기",
    {
      theme: "#fff200",
      title: "실험실 이용하기",
    },
    //       title: "톡 음성모드",
    {
      title: "톡 음성모드",
      subTitle: "사용안함",
    },
    //       title: "말풍선 번역",
    {
      theme: "#fff200",
      title: "말풍선 번역",
      subTitle:
        "카카오톡에서 사용하는 언어와 다른 언어의 말풍선을 길게 눌러 번역할 수 있습니다.",
    },
    //       title: "채팅방 조용히 나가기",
    {
      targetOption: target_groubChatLeave_quietly,
      theme: "#fff200",
      title: "채팅방 조용히 나가기",
      subTitle: `그룹채팅방에서 나가기 시, 조용히 나가기를 선택할 수 있습니다.
        조용히 나가는 경우 채팅방에 나간 기록이 표시되지 않습니다.`,
    },
    //      title: "빠른 공감하기",
    {
      theme: "#fff200",
      title: "빠른 공감하기",
      subTitle: `말풍선을 빠르게 두 번 탭해 하트 공감을 날릴 수 있습니다.`,
    },
    //       title: "인앱브라우저 앱 화면 분리",
    {
      theme: "#fff200",
      title: "인앱브라우저 앱 화면 분리",
      subTitle: `채팅방에 전달된 URL 확인 시 사용중인 채팅방과 분리된 화면으로
      오픈됩니다. <br />
      브라우저를 닫지 않고 화면 전환을 통해 채팅방의 대화 내용을
      확인할 수 있어요.`,
    },
    //       title: "키워드 알림 모아보기",
    {
      theme: "#fff200",
      title: "키워드 알림 모아보기",
      subTitle: `등록된 키워드에 해당하는 메시지만 모아볼 수 있습니다.`,
    },
  ];

  return (
    <NoScrollBar height="305px">
      {/* 실험실 */}
      <>
        <AppHeader
          leftItem={[
            <BackBtn
              targetOption={checkedContent === "switch3"}
              isNavTriger></BackBtn>,
            "실험실",
          ]}
        />
        <div className={`${classes.groupProfileWrap} py-1`}>
          <div className={classes["iconWrap_background--yellow"]}>
            <i className="bi bi-lightbulb"></i>
          </div>
        </div>
        <StackedList
          className="mb-2 border-none"
          title={{ content: "카카오 실험실", className: "text-center py-2" }}
          subTitle={{
            className: "text-center",
            content: (
              <>
                출시 준비 중인 새로운 기능을 먼저 이용해 볼 수 있습니다.
                <br />
                실험실 기능은 원하실 때 끄고 켜실 수 있습니다.
              </>
            ),
          }}></StackedList>

        <StackedListWrap>
          {laboratoryMenuContents?.map((data, i) => (
            <TargetContent
              key={i}
              targetOption={
                data.targetOption && checkedContent !== `switch${i}`
              }
              isWidthFull>
              <Switch
                className=""
                theme={data.theme}
                title={data.title}
                subTitle={data.subTitle}
                setCheckedSwitch={data.targetOption && setCheckedContent}
                id={`switch${i}`}></Switch>
            </TargetContent>
          ))}
        </StackedListWrap>

        <div className="py-2 display_subTitle--light">
          실험실 기능은 바람처럼 나타났다 소리없이 사라질 수 있습니다.
        </div>
      </>
    </NoScrollBar>
  );
}

export default ETCSetting_lab;
