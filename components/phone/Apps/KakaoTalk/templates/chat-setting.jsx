import { useState } from "react";
import classes from "./chat-setting.module.css";

import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import StackedListWrap from "@/components/DisplayBox/AppDisplays/_components/list/StackedListWrap";
import StackedList from "@/components/DisplayBox/AppDisplays/_components/list/StackedList";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";

import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";
import Switch from "@/components/DisplayBox/AppDisplays/_components/UI/Switch";
import Button from "@/components/DisplayBox/AppDisplays/_components/UI/Button";
import Checkbox from "@/components/DisplayBox/AppDisplays/_components/UI/Checkbox";
import Phone from "@/components/phone/molecules/phone";
import ModalContents from "@/components/phone/organisms/modal-contents";
import Modal from "@/components/phone/molecules/modal";
import TargetBox from "@/components/phone/atoms/target-box";
import CancelBtn from "@/components/phone/atoms/cancel-btn";
import SubmitBtn from "@/components/phone/atoms/submit-btn";

function KakaoChatRoom_setting({
  open = { modal: false },
  target = {
    changeName: false,
    changeImg: false,
    groubChatLeave_rejectInvitation: false,
    groubChatLock: false,
    groubChatLeave: false,
    backBtn: false,
  },
  content = {
    modalTitle: "",
    modalSubTitle: "",
    modalContent: <></>,
    modalBtn: "",
    modalTop: "",
  },
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Phone>
      <NoScrollBar height="305px">
        {open.modal && target.groubChatLeave_rejectInvitation && (
          <Modal
            modalStyle={{ top: content.modalTop }}
            onClickBackDrop={() => {
              setIsChecked(false);
            }}>
            <ModalContents
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
              buttons={{
                style: { justifyContent: "end" },
                content: [
                  <CancelBtn
                    key="btn1"
                    style={{ color: "rgb(59 130 246)" }}
                    condition={true}>
                    취소
                  </CancelBtn>,
                  <SubmitBtn
                    key="btn2"
                    condition={
                      isChecked && target.groubChatLeave_rejectInvitation
                    }>
                    나가기
                  </SubmitBtn>,
                ],
              }}>
              <TargetBox isNextTriger={false} condition={!isChecked}>
                <Checkbox
                  id="info_config"
                  onChangeHandler={() => {
                    target.groubChatLeave_rejectInvitation && isChecked
                      ? setIsChecked(false)
                      : setIsChecked(true);
                  }}
                  label={{
                    content: "위 내용을 모두 확인하였습니다.",
                  }}></Checkbox>
              </TargetBox>
            </ModalContents>
          </Modal>
        )}
        {open.modal && (
          <Modal modalStyle={{ top: "50px" }}>
            <ModalContents
              title={{
                content: content.modalTitle,
                style: { fontWeight: "bold" },
              }}
              subTitle={{
                content: content.modalSubTitle,
              }}
              buttons={
                content.modalBtn && {
                  style: { justifyContent: "end" },
                  content: [
                    <CancelBtn
                      key="btn1"
                      condition={true}
                      style={{ color: "rgb(59 130 246)" }}>
                      취소
                    </CancelBtn>,
                    <SubmitBtn
                      key="btn2"
                      style={{ color: "rgb(59 130 246)" }}
                      condition={target.modalBtn}>
                      {content.modalBtn}
                    </SubmitBtn>,
                  ],
                }
              }>
              {content.modalContent}
            </ModalContents>
          </Modal>
        )}
        <>
          {/* header nav */}
          <AppHeader
            leftItem={[
              <BackBtn
                condition={isChecked && target.backBtn}
                isNavTriger={true}
              />,
            ]}
            rightItem={[
              <div className="display_title">채팅방 설정</div>,
            ]}></AppHeader>
          {/* main */}
          {/* title={{ content: "채팅방 이름" }} */}

          <StackedListWrap>
            <TargetBox
              condition={target.changeImg}
              style={{ margin: "0 auto" }}>
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
            </TargetBox>
            <TargetBox condition={target.changeName}>
              <StackedList
                title={{ content: "채팅방 이름" }}
                subTitle={{ content: "그룹채팅방 1" }}></StackedList>
            </TargetBox>
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
            <TargetBox
              style={{ witdh: "170px" }}
              isNextTriger={false}
              condition={target.groubChatLock && !isChecked}>
              <Switch
                className=""
                theme={"#fff200"}
                title={"현재 채팅방 입력창 잠금"}
                setIsSwitchChecked={setIsChecked}
                id={`chatLockSwitch`}></Switch>
            </TargetBox>
          </StackedListWrap>
          <StackedListWrap listTitle={{ content: "채팅방 관리" }}>
            {/* title={{ content: "홈 화면에 바로가기 추가" }} */}
            <StackedList
              title={{ content: "홈 화면에 바로가기 추가" }}></StackedList>
            {/* title={{ content: "대화 내용 내보내기" }} */}
            <StackedList
              title={{ content: "대화 내용 내보내기" }}></StackedList>
            {/* title={"대화 내용 모두 삭제"} */}
            <StackedList
              title={{ content: "대화 내용 모두 삭제" }}></StackedList>
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
            <TargetBox condition={target.groubChatLeave}>
              <Button
                className="mb-1 text-sm"
                textColor="rgb(255, 115, 0)"
                borderColor="rgb(255, 115, 0)"
                content="채팅방 나가기"></Button>
            </TargetBox>
            <TargetBox condition={target.groubChatLeave_rejectInvitation}>
              <Button
                className={`text-sm`}
                btnColor="rgb(255, 115, 0)"
                textColor="white"
                content="초대거부 및 나가기"></Button>
            </TargetBox>
          </div>
        </>
      </NoScrollBar>
    </Phone>
  );
}

export default KakaoChatRoom_setting;
