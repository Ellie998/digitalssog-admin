/* eslint-disable no-unused-vars */

import { useState } from "react";

import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import StackedListWrap from "@/components/DisplayBox/AppDisplays/_components/list/StackedListWrap";
import StackedList from "@/components/DisplayBox/AppDisplays/_components/list/StackedList";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";

import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";

import Phone from "@/components/phone/molecules/phone";
import Title from "@/components/phone/atoms/title";
import SwitchLine from "@/components/phone/Apps/KakaoTalk/molecules/switch-line";
import Icon from "@/components/phone/atoms/icon";
import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import TargetBox from "@/components/phone/atoms/target-box";

function FriendSetting({ target = { hideFriend: false } }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isChecked, setIsChecked] = useState(false);
  const date = new Date();

  return (
    <Phone>
      <NoScrollBar height="305px">
        {/* header nav */}
        <AppHeader
          leftItem={[
            <BackBtn
              condition={isChecked && target.backBtn}
              isNavTriger={true}
            />,
            <Title key="1">친구</Title>,
          ]}
        />

        <StackedListWrap>
          <>
            <SwitchLine
              id={`switch1`}
              condition={false}
              title={"자동 친구 추가"}
              subTitle={` 내 연락처에서 카카오톡을 사용하는 친구를 자동으로 친구목록에
              추가합니다. 등록 가능한 친구가 최대 친구 수를 초과할 경우에는
              추가되지 않습니다.`}></SwitchLine>
            <StackedList_Profile
              title={{
                content: "친구 목록 새로고침",
                style: { gridColumnStart: "1", paddingLeft: "4px" },
              }}
              subTitle={{
                content: `최종 추가시간 ${
                  date.getMonth() + 1
                }월 ${date.getDate()}일 `,
                style: { gridColumn: "1/7", paddingLeft: "4px" },
              }}
              info={{
                content: <Icon name="arrow-repeat" />,
                style: { marginLeft: "auto" },
              }}
            />
            <SwitchLine
              id={`switch2`}
              condition={false}
              title={"친구 추천 허용"}
              subTitle={`알 수도 있는 친구를 추천받고, 나를 다른 친구에게 추천해줍니다.`}></SwitchLine>
            <SwitchLine
              id={`switch3`}
              condition={false}
              title={"전화번호로 친구 추가 허용"}
              subTitle={`내 전화번호를 알고 있는 사용자가 나를 전화번호로 친구 추가하는 것을 허용합니다.`}></SwitchLine>
            <SwitchLine
              id={`switch4`}
              condition={false}
              title={"친구 이름 동기화"}
              subTitle={`카카오톡 앱의 친구 이름을 다른 기기나 카카오 게임 등에서도 동일하게 보여줍니다.`}></SwitchLine>
          </>
        </StackedListWrap>
        <StackedListWrap listTitle={{ content: "친구 관리" }}>
          <TargetBox condition={target.hideFriend} style={{ width: "100%" }}>
            <StackedList title={{ content: "숨긴친구 관리" }}></StackedList>
          </TargetBox>
          <StackedList title={{ content: "차단친구 관리" }}></StackedList>
        </StackedListWrap>
        <StackedListWrap listTitle={{ content: "친구 보기 설정" }}>
          <SwitchLine
            id={`switch5`}
            condition={false}
            title={"생일인 친구 보기"}
            subTitle={`친구 목록에서 친구의 생일 정보를 보여줍니다.`}></SwitchLine>
          <SwitchLine
            id={`switch6`}
            condition={false}
            title={"업데이트한 프로필 보기"}
            subTitle={`친구 목록에서 프로필을 업데이트한 친구를 모아서 보여줍니다.`}></SwitchLine>
          <SwitchLine
            id={`switch7`}
            condition={false}
            title={"기억할 친구 보기"}
            subTitle={`친구 목록에서 추모 프로필로 전환된 친구를 보여줍니다.`}></SwitchLine>
        </StackedListWrap>
      </NoScrollBar>
    </Phone>
  );
}

export default FriendSetting;
