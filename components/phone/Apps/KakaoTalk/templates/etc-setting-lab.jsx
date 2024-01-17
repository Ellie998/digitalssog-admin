import { useState } from "react";

import classes from "./etc-setting-lab.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

import Switch from "components/DisplayBox/AppDisplays/components/UI/Switch";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";

import StackedList from "components/DisplayBox/AppDisplays/components/list/StackedList";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import Phone from "stories/phone/molecules/Phone/index";

function ETCSetting_lab({ target_groubChatLeave_quietly }) {
  const [checkedContent, setCheckedContent] = useState("");

  const laboratoryMenuContents = [
    //      title: "실험실 이용하기",
    {
      theme: "#fff200",
      title: "실험실 이용하기",
    },

    //       title: "채팅방 조용히 나가기",
    {
      targetOption: target_groubChatLeave_quietly,
      theme: "#fff200",
      title: "조용한 채팅방",
      subTitle: `활동하지 않는 채팅방을 보관하고 숨길 수 있습니다. 
      기능을 사용하지 않으면 조용한 채팅방이 모두 해제됩니다.`,
    },
    //       title: "말풍선 번역",
    {
      theme: "#fff200",
      title: "말풍선 번역",
      subTitle:
        "카카오톡에서 사용하는 언어와 다른 언어의 말풍선을 길게 눌러 번역할 수 있습니다.",
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
    <Phone>
      <NoScrollBar height="305px">
        {/* 실험실 */}
        <>
          <AppHeader
            leftItem={[
              <BackBtn
                condition={checkedContent === "switch3"}
                isNextTriger={true}></BackBtn>,
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
    </Phone>
  );
}

export default ETCSetting_lab;
