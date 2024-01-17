import { useState } from "react";
import classes from "./KakaoChatRoom_setting.module.css";

import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import StackedList from "components/DisplayBox/AppDisplays/components/list/StackedList";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import Modal_contents from "components/DisplayBox/AppDisplays/components/layout/Modal_contents";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import Switch from "components/DisplayBox/AppDisplays/components/UI/Switch";
import Button from "components/DisplayBox/AppDisplays/components/UI/Button";
import Checkbox from "components/DisplayBox/AppDisplays/components/UI/Checkbox";

function KakaoChatRoom_setting({
  target_groubChatLeave_rejectInvitation,
  target_groubChatLock,
  target_groubChatLeave,
  target_backBtn,
  open_modal,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <NoScrollBar height="305px">
      {open_modal && (
        <Modal_contents
          onClickBackDrop={() => {
            setIsChecked(false);
          }}
          title={{ content: "초대 거부 및 나가기" }}
          subTitle={{
            content: (
              <>
                초대를 거부하고 채팅방을 나갑니다.
                <br />
                이후 이 채팅방에 다시 입장할 수 없습니다. <br />
                대화 내용을 포함한 채팅방의 정보는 모두 삭제됩니다.
              </>
            ),
          }}
          cancelButton={{
            content: "취소",
            className: "text-blue-600",
          }}
          submitButton={{
            targetOption: isChecked && target_groubChatLeave_rejectInvitation,
            isNextDescriptionLink: true,
            content: "나가기",
          }}>
          <TargetContent targetOption={!isChecked}>
            <Checkbox
              id="info_config"
              onChangeHandler={() => {
                target_groubChatLeave_rejectInvitation && isChecked
                  ? setIsChecked(false)
                  : setIsChecked(true);
              }}
              label={{ content: "위 내용을 모두 확인하였습니다." }}></Checkbox>
          </TargetContent>
        </Modal_contents>
      )}
      <>
        {/* header nav */}
        <AppHeader
          leftItem={[
            <BackBtn
              targetOption={isChecked && target_backBtn}
              isNavTriger={true}
            />,
          ]}
          rightItem={[
            <div className="display_title">채팅방 설정</div>,
          ]}></AppHeader>
        {/* main */}
        {/* title={{ content: "채팅방 이름" }} */}
        <StackedListWrap>
          <div className={classes.groupProfileWrap}>
            <div className={classes["iconWrap_background--skyBlue"]}>
              <i className="bi bi-person-fill"></i>
            </div>
            <div className={classes["iconWrap_background--blue"]}>
              <i className="bi bi-person-fill"></i>
            </div>
            <div className={classes["iconWrap_background--purple"]}>
              <i className="bi bi-person-fill"></i>
            </div>
            <div className={classes.groupProfileSettingBtn}>
              <i className="bi bi-camera-fill"></i>
            </div>
          </div>
          <StackedList
            title={{ content: "채팅방 이름" }}
            subTitle={{ content: "그룹채팅방 1" }}></StackedList>
          <div className="display_subTitle--light">
            내가 설정한 사진과 이름은 나에게만 보입니다.
          </div>
        </StackedListWrap>
        <StackedListWrap listTitle={{ content: "채팅방 설정" }}>
          {/* title={{ content: "현재 채팅방 배경화면" }} */}
          <StackedList
            title={{ content: "현재 채팅방 배경화면" }}
            subTitle={{
              content: (
                <div className="flex ml-0 display_subTitle--light">
                  <div className="w-4 h-5 mr-1 rounded-sm bg-kakaoBlue"></div>
                  색상
                </div>
              ),
            }}></StackedList>
          {/* title={{ content: "현재 채팅방 알림음" }} */}
          <StackedList
            title={{ content: "현재 채팅방 알림음" }}
            subTitle={{
              content: "카톡",
            }}></StackedList>
          {/* title={"현재 채팅방 입력창 잠금"} */}
          <TargetContent
            isWidthFull
            targetOption={target_groubChatLock && !isChecked}>
            <Switch
              className=""
              theme={"#fff200"}
              title={"현재 채팅방 입력창 잠금"}
              setIsSwitchChecked={setIsChecked}
              id={`chatLockSwitch`}></Switch>
          </TargetContent>
        </StackedListWrap>
        <StackedListWrap listTitle={{ content: "채팅방 관리" }}>
          {/* title={{ content: "홈 화면에 바로가기 추가" }} */}
          <StackedList
            title={{ content: "홈 화면에 바로가기 추가" }}></StackedList>
          {/* title={{ content: "대화 내용 내보내기" }} */}
          <StackedList title={{ content: "대화 내용 내보내기" }}></StackedList>
          {/* title={"대화 내용 모두 삭제"} */}
          <StackedList title={{ content: "대화 내용 모두 삭제" }}></StackedList>
        </StackedListWrap>
        <StackedListWrap listTitle={{ content: "채팅방 용량 관리" }}>
          {/* title={{ content: "사진 파일 삭제" }} */}
          <StackedList
            title={{ content: "사진 파일 삭제" }}
            subTitle={{
              content: "0.49 GB",
            }}></StackedList>
          {/* title={{ content: "동영상 파일 삭제" }} */}
          <StackedList
            title={{ content: "동영상 파일 삭제" }}
            subTitle={{
              content: "1.23 GB",
            }}></StackedList>
          {/* title={{ content: "음성 파일 삭제" }} */}
          <StackedList
            title={{ content: "음성 파일 삭제", className: "text-gray-400" }}
            subTitle={{
              content: "0 bytes",
            }}></StackedList>
          {/* title={{ content: "전체 파일 모두 삭제" }} */}
          <StackedList
            title={{ content: "전체 파일 모두 삭제" }}
            subTitle={{
              content: "1.72 GB",
            }}></StackedList>
        </StackedListWrap>

        {/* Buttons */}
        <div className="px-1 py-2 mx-auto">
          <TargetContent
            isNextDescriptionLink
            targetOption={target_groubChatLeave}>
            <Button
              className="mb-1 text-sm"
              textColor="rgb(255, 115, 0)"
              borderColor="rgb(255, 115, 0)"
              content="채팅방 나가기"></Button>
          </TargetContent>
          <TargetContent
            isNextDescriptionLink
            targetOption={target_groubChatLeave_rejectInvitation}>
            <Button
              className={`text-sm`}
              btnColor="rgb(255, 115, 0)"
              textColor="white"
              content="초대거부 및 나가기"></Button>
          </TargetContent>
        </div>
      </>
    </NoScrollBar>
  );
}

export default KakaoChatRoom_setting;
