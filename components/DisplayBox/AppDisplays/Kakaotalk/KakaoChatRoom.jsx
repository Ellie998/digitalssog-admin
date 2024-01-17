import { useState } from "react";

import classes from "./KakaoChatRoom.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import ChatList from "components/DisplayBox/AppDisplays/components/UI/ChatList";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import MessageSendLine from "components/DisplayBox/AppDisplays/components/UI/MessageSendLine";
import Icon from "components/DisplayBox/AppDisplays/components/UI/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import Grid_4x4 from "components/DisplayBox/AppDisplays/components/layout/Grid_4x4";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import Modal_contents from "components/DisplayBox/AppDisplays/components/layout/Modal_contents";
import Checkbox from "components/DisplayBox/AppDisplays/components/UI/Checkbox";

import DownUp from "components/DisplayBox/AppDisplays/components/UI/DownUp";
import Button from "components/DisplayBox/AppDisplays/components/UI/Button";
import Alert from "components/DisplayBox/AppDisplays/components/UI/Alert";
import GetDate from "components/DisplayBox/AppDisplays/components/GetDate";

function KakaoChatRoom({
  inputLocked,
  chatType_group,
  open_option,
  open_optionSetting,
  open_menu,
  open_alert,
  open_modal,
  reopen_optionSetting,
  target_sendImg,
  target_sendAudio,
  target_sendPhoneNum,
  target_resend,
  target_optionBtn,
  target_menu,
  target_reserveMessage,
  target_leave_quietly,
  target_leave,
  target_setting,
}) {
  //message
  const [messageContent, setMessageContent] = useState("");
  const [isOvered, setIsOvered] = useState(false);

  // modal
  const [isCheckbox, setIsCheckbox] = useState(false);

  // option setting
  const [optionInput, setOptionInput] = useState("");
  const [isOptionInputSubmit, setIsOptionInputSubmit] = useState(false);

  // function mouseOverHandler(event) {
  //   setTimeout(() => {
  //     setIsOvered(true);
  //   }, 1000);
  // }

  function backClickHandler() {
    setIsOvered(false);
    setOptionInput("");
  }

  const iconClassName = [
    "bg-[#9bcb5c]",
    "bg-[#668ecf]",
    "bg-[#ef666c]",
    "bg-[#53c575]",
    "bg-[#58606b]",
    "bg-[#907bee]",
    "bg-[#4ea6f3]",
    "bg-[#bd9e83]",
    "bg-[#51b59f]",
    "bg-[#f79955]",
    "bg-[#6696f6]",
    "bg-[#d68fe5]",
    "bg-[#78be80]",
    "bg-[#dd4453]",
  ];

  const gridContent = [
    {
      content: "앨범",
      iconName: "image",
    },
    {
      content: "카메라",
      iconName: "camera",
    },
    {
      content: "선물하기",
      iconName: "box2-heart",
    },
    {
      content: "통화하기",
      iconName: "telephone",
    },
    {
      content: "송금",
      iconName: "cash-coin",
    },
    {
      targetOption: target_reserveMessage,
      isNextDescriptionLink: true,
      content: "예약 메시지",
      iconName: "stopwatch",
    },
    {
      content: "일정",
      iconName: "calendar-date",
    },
    {
      targetOption: target_sendImg,
      isNextDescriptionLink: true,
      content: "지도",
      iconName: "geo-alt",
    },
    {
      content: "캡처",
      iconName: "fullscreen",
    },
    {
      targetOption: target_sendAudio,
      isNextDescriptionLink: true,
      content: "음성메시지",
      iconName: "mic",
    },
    {
      targetOption: target_sendPhoneNum,
      isNextDescriptionLink: true,
      content: "연락처",
      iconName: "person-badge",
    },
    {
      content: "파일",
      iconName: "paperclip",
    },
    {
      content: "뮤직",
      iconName: "music-note-beamed",
    },
    {
      content: "라이브톡",
      iconName: "broadcast-pin",
    },
  ];

  return (
    <>
      <NoScrollBar
        height={`${!open_option || open_optionSetting ? "280px" : "150px"}`}
        className={`bg-[#b2c6d9] p-1`}
        onClick={backClickHandler}>
        <AppHeader
          onClick={backClickHandler}
          className={`bg-[#b2c6da] h-[35px]`}
          leftItem={[
            <BackBtn></BackBtn>,
            <div className="ml-1 text-sm font-bold align-middle">
              {chatType_group ? "그룹채팅" : "영희"}
            </div>,
            <div className="ml-1 text-sm align-middle">
              {chatType_group && "3"}
            </div>,
          ]}
          rightItem={[
            <Icon name="search" className={`text-sm m-1 align-middle`} />,
            <TargetContent targetOption={target_menu} isNextDescriptionLink>
              <Icon name="list" className={`text-sm mx-1 align-middle`} />
            </TargetContent>,
          ]}></AppHeader>
        <ChatList
          isGetList={true}
          className=""
          profile={{
            className: "bg-kakaoSkyblue",
            content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
          }}
          name={{ content: "김대리", className: "" }}
          message={{
            className: "bg-white",
            content: "퇴사합니다.",
          }}
          timeStamp={{
            className: "",
            content: "오전 9:00",
          }}
        />
        {messageContent && (
          <ChatList
            isSendList={true}
            className="mt-2"
            message={{
              className: "bg-kakaoYellow",
              content: messageContent,
            }}
            timeStamp={{
              className: "",
              content: "오전 9:54",
            }}
          />
        )}

        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            <TargetContent
              targetOption={target_resend}
              isNextDescriptionLink={true}>
              전달
            </TargetContent>

            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
        {/* alert */}
        {open_alert && (
          <Alert
            className={`top-[160px]`}
            content="메시지를 예약했습니다."
            icon={{
              name: "chat-fill",
              className: " bg-kakaoYellow text-[#3e3404]",
            }}
          />
        )}
      </NoScrollBar>

      {/* input line */}
      {!inputLocked && (
        <MessageSendLine
          navOption_focused={{
            content: [
              !open_option ? (
                <TargetContent
                  targetOption={target_optionBtn}
                  isNextDescriptionLink={true}>
                  <Icon name="plus-lg" />
                </TargetContent>
              ) : (
                <Icon name="x-lg" />
              ),
            ],
          }}
          input={{}}
          onSendBtnClickHandler={null}
          setMessageContent={setMessageContent}
          sendBtn={{ className: "send-fill bg-[#f7e540]" }}
          sendBtn_default={{
            content: <Icon name="hash" />,
          }}></MessageSendLine>
      )}
      {inputLocked && (
        <FlexContent
          items={[
            <Icon name="plus-lg" />,
            <div className="px-1 ml-1 leading-4 text-gray-400 text-2xs text-start">
              대화에 주의가 필요한 방입니다.
            </div>,
            <TargetContent targetOption={inputLocked} isNextDescriptionLink>
              <div className={classes.sendIcon}>
                <Icon name="lock bg-[#f7e540]" />
              </div>
            </TargetContent>,
          ]}
        />
      )}
      {/* Option Box */}
      {open_option && (
        <NoScrollBar>
          <Grid_4x4
            className={"bg-[#efefef3e]"}
            items={gridContent}
            iconClassName_common={`rounded-full p-[6px] text-white `}
            iconClassName={iconClassName}
          />
        </NoScrollBar>
      )}
      {/* Side Menu */}
      {open_menu && (
        <div className={classes.sideMenuWrap}>
          <TargetContent className={classes.backdrop} goBackDescription />
          <div className={classes.sideMenuBox}>
            {["채팅방 서랍", "톡캘린더", "뮤직", "톡게시판"].map((item, i) => (
              <StackedListWrap
                key={i}
                listTitle={{
                  content: item,
                  className: "text-xs font-bold text-gray-700 ml-1",
                }}
              />
            ))}
            <StackedListWrap
              className={`border-none`}
              listTitle={{
                content: "대화상대",
                className: "text-xs font-bold text-gray-700 ml-1 mb-1",
              }}>
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-gray-200",
                  content: <Icon name="plus-lg" className={`text-blue-600`} />,
                }}
                title={{
                  className: "text-blue-600 text-xs",
                  content: "대화 상대 초대",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoSkyblue",
                  content: <Icon name="person-fill" className={`text-white`} />,
                }}
                title={{
                  className: "text-xs",
                  content: "나",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoBlue",
                  content: <Icon name="person-fill" className={`text-white`} />,
                }}
                title={{
                  className: "text-xs",
                  content: "김대리",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoPurple",
                  content: <Icon name="person-fill" className={`text-white`} />,
                }}
                title={{
                  className: "text-xs",
                  content: "사장님",
                }}
              />
            </StackedListWrap>
            <div className={classes.sideMenuNavWrap}>
              <FlexContent
                className=""
                items={[
                  <TargetContent
                    isNextDescriptionLink
                    targetOption={target_leave_quietly || target_leave}>
                    <Icon name="box-arrow-right" />
                  </TargetContent>,
                  <FlexContent
                    className=""
                    items={[
                      <Icon name="bell-fill" className={`text-sm `} />,
                      <Icon name="star" className={`text-sm m-1`} />,
                      <TargetContent
                        targetOption={target_setting}
                        isNextDescriptionLink={true}>
                        <Icon name="gear" className={`text-sm m-1`} />
                      </TargetContent>,
                    ]}></FlexContent>,
                ]}
              />
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      {open_modal && (
        <Modal_contents
          modalClassName={`mt-5`}
          className={`mt-10`}
          title={{ content: "채팅방 나가기" }}
          subTitle={{
            content: (
              <>
                나가기를 하면 대화내용이 모두 삭제되고
                <br />
                채팅 목록에서도 삭제됩니다.
              </>
            ),
          }}
          cancelButton={{
            content: "취소",
            className: "text-blue-500",
            goBackDescription: true,
          }}
          submitButton={{
            content: "나가기",
            className: "text-blue-500",
            targetOption: isCheckbox && (target_leave_quietly || target_leave),
            isNextDescriptionLink: true,
          }}>
          {target_leave_quietly && (
            <TargetContent className="my-1" targetOption={!isCheckbox}>
              <Checkbox
                label={{ content: "조용히 나가기" }}
                onChangeHandler={() => {
                  isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
                }}
                id="info_config"
              />
            </TargetContent>
          )}
        </Modal_contents>
      )}
      {/* setting option */}
      {(open_optionSetting || reopen_optionSetting) && (
        <DownUp
          downUpClassName={`mt-[20px]`}
          className={``}
          onClickBackDrop={backClickHandler}>
          <StackedListWrap
            className={``}
            listTitle={{
              content: (
                <TargetContent
                  targetOption={
                    open_optionSetting &&
                    target_reserveMessage &&
                    optionInput === "" &&
                    !isOptionInputSubmit
                  }>
                  <input
                    placeholder="메시지 입력"
                    className="w-full"
                    onChange={(e) => {
                      setOptionInput(e.target.value);
                    }}
                  />
                </TargetContent>
              ),
              className: "text-sm text-gray-300 font-bold cursor-pointer ",
            }}
          />
          <TargetContent
            targetOption={optionInput !== "" && !isOptionInputSubmit}>
            <FlexContent
              className={`my-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>일시</div>,
                <input
                  className={`text-2xs cursor-pointer`}
                  type="datetime-local"
                  defaultValue={GetDate().y_m_d_h_plus1_m}
                />,
              ]}
            />
            <FlexContent
              className={`my-0.5 py-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>발송 대상</div>,
                <div className={`text-xs cursor-pointer`}>영희</div>,
              ]}
            />
            <FlexContent
              className={`my-0.5 py-0.5`}
              items={[
                <div className={`text-xs text-gray-400`}>미리 알림</div>,
                <div className={`text-xs cursor-pointer`}>알림 받지 않음</div>,
              ]}
            />
          </TargetContent>

          <div className={`text-2xs text-gray-400 my-0.5`}>
            <Icon
              name="info-circle"
              className={`text-2xs text-gray-400 mr-1`}
            />
            예약 메시지가 많을 경우, 약간의 시간 오차가 발생할 수 있습니다.
          </div>
          <FlexContent
            className={`mb-1 mt-4`}
            items={[
              <TargetContent targetOption={reopen_optionSetting}>
                <Button
                  btnColor={`#efefef`}
                  className={`text-2xs font-bold`}
                  width={`70px`}
                  content={"예약 목록 보기"}
                />
              </TargetContent>,
              <TargetContent
                targetOption={
                  target_reserveMessage &&
                  optionInput !== "" &&
                  !isOptionInputSubmit
                }
                isNextDescriptionLink={true}>
                <Button
                  btnColor={`${optionInput === "" ? "#fafafa" : "#fff200"}`}
                  className={`text-2xs font-bold`}
                  width={`70px`}
                  textColor={`${optionInput === "" ? "#b7b7b7" : ""}`}
                  content={"예약하기"}
                  onClick={() => {
                    setIsOptionInputSubmit(true);
                  }}
                />
              </TargetContent>,
            ]}
          />
        </DownUp>
      )}
    </>
  );
}

export default KakaoChatRoom;
