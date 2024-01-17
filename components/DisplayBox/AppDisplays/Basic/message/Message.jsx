import { useEffect, useState } from "react";
import classes from "./Message.module.css";
import ChoiceFile from "components/DisplayBox/AppDisplays/components/layout/ChoiceFile";

import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import Icon from "components/DisplayBox/AppDisplays/components/UI/Icon";
import ChatList from "components/DisplayBox/AppDisplays/components/UI/ChatList";
import MessageSendLine from "components/DisplayBox/AppDisplays/components/UI/MessageSendLine";
import Grid_4x4 from "components/DisplayBox/AppDisplays/components/layout/Grid_4x4";
import ChoicedFile from "components/DisplayBox/AppDisplays/components/UI/ChoicedFile";
import Modal_contents from "components/DisplayBox/AppDisplays/components/layout/Modal_contents";
import Input from "components/DisplayBox/AppDisplays/components/UI/Input";
import Checkbox from "components/DisplayBox/AppDisplays/components/UI/Checkbox";
import GetDate from "components/DisplayBox/AppDisplays/components/GetDate";

function Message({
  open_option,
  open_optionInfo,
  open_imgOption,
  open_modal,
  modal_optionSetting,
  target_sendImg,
  target_sendImgBtn,
  target_resend,
  target_reserveMessage,
  target_sendAudio,
  target_sendPhoneNum,
  message_fill,
}) {
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [plusClicked, setPlusClicked] = useState(false);
  const [isOvered, setIsOvered] = useState(false);
  // Choice IMG
  const [choicedImgs, setChoicedImgs] = useState([]);
  useEffect(() => {
    setMessageContent("");
    setSendBtnClicked(false);
    setPlusClicked(false);
  }, [open_option, open_optionInfo, open_modal, open_imgOption]);

  function mouseOverHandler() {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }

  function backClickHandler() {
    setIsOvered(false);
    setPlusClicked(false);
    setSendBtnClicked(false);
  }

  function plusBtnClickHandler() {
    setPlusClicked(true);
    setSendBtnClicked(false);
    setChoicedImgs([]);
  }
  function imgNavBtnClickHandler() {
    setPlusClicked(false);
    setMessageContent("");
    setSendBtnClicked(false);
    setChoicedImgs([]);
  }
  // const [deleteOptionClicked, setDeleteOptionClicked] = useState(false);

  function deleteOptionHandler() {
    // setDeleteOptionClicked(true);
  }
  const gridContent = [
    {
      content: "Private Share",
      iconName: "share",
    },
    {
      content: "네이버지도 위치공유",
      iconName: "map",
    },
    {
      content: "신한 SOL송금",
      iconName: "bank",
    },
    {
      content: "Samsung Pay 선물",
      iconName: "bank",
    },
    {
      content: "토스 송금",
      iconName: "bank",
    },
    {
      content: "빠른 답장 문구",
      iconName: "send",
    },
    {
      targetOption: target_reserveMessage,
      isNextDescriptionLink: true,
      content: "메시지 예약",
      iconName: "clock",
    },
    {
      content: "제목",
      iconName: "chat-left-dots",
    },
    {
      content: "위치",
      iconName: "geo-alt",
    },
    {
      targetOption: target_sendImg && open_option,
      isNextDescriptionLink: true,
      content: "이미지",
      iconName: "card-image",
    },
    {
      targetOption: target_sendImg && open_option,
      isNextDescriptionLink: true,
      content: "동영상",
      iconName: "play-btn",
    },
    {
      targetOption: target_sendAudio,
      isNextDescriptionLink: true,
      content: "오디오",
      iconName: "music-note",
    },
    {
      targetOption: target_sendPhoneNum,
      isNextDescriptionLink: true,
      content: "연락처",
      iconName: "person",
    },
    {
      content: "캘린더",
      iconName: "calendar-date",
    },
    {
      content: "Samsung Notes",
      iconName: "journal",
    },
    {
      content: "음성녹음",
      iconName: "mic",
    },
  ];
  const modalContent = [
    // target_reserveMessage
    {
      modalClassName: `mt-[18px]`,
      className: `mt-[100px]`,
      title: { content: "메시지 예약 전송" },
      subTitle: {},
      ButtonWrapStyle: "flex justify-around",
      cancelButton: {
        content: "취소",
        goBackDescription: true,
      },
      submitButton: {
        content: "완료",
        isNextDescriptionLink: true,
        targetOption: true,
      },
      children: (
        <>
          <Input
            className={`text-xs mt-2`}
            input={{
              type: "date",
              className: `border-transparent bg-[#dcdcdc6f] rounded-lg`,
              defaultValue: GetDate().y_m_d,
            }}
            label={{ content: "날짜" }}
          />
          <Input
            className={`text-xs mt-1 mb-3`}
            input={{
              type: "time",
              className: `border-transparent bg-[#dcdcdc6f] rounded-lg w-[93px]`,
              defaultValue: GetDate().h_plus1_m,
            }}
            label={{ content: "시각" }}
          />

          <Checkbox
            id={"reserveLater"}
            label={{
              content: "전송 시간을 나중에 예약",
              className: "text-gray-800",
            }}
          />
        </>
      ),
    },
    {
      modalClassName: `mt-[18px]`,
      className: `mt-[150px]`,
      title: {},
      subTitle: {
        content: `이 메시지는 ${GetDate().m_d} ${
          GetDate().h_plus1_m
        } 에 전송됩니다.`,
        className: "text-gray-700 text-xs",
      },
      button: [
        { content: "지금 보내기" },
        { content: "삭제" },
        { content: "편집" },
      ],
    },
  ];
  const optionInfoContent = [
    {
      content: `예약 전송: 2023년 ${GetDate().m_d} ${GetDate().h_plus1_m}`,
    },
    {
      content: (
        <div
          className={` bg-[antiquewhite] self-center justify-self-center w-[36px] h-[36px] ml-[20px]`}>
          img
        </div>
      ),
    },
    {
      grayBox: true,
      content: (
        <StackedList_Profile
          className={`w-fit`}
          profile={{
            content: <Icon name="play" className={` text-[16px]`} />,
          }}
          title={{ content: "audio.mp3" }}
        />
      ),
    },
    {
      grayBox: true,
      content: (
        <StackedList_Profile
          className={`w-fit`}
          profile={{
            content: <Icon name="person-fill" className={` text-[16px]`} />,
          }}
          title={{ content: "홍길순" }}
          subTitle={{ content: "010-0000-0000" }}
        />
      ),
    },
  ];

  let modalNum, optionInfoNum;

  function findModalOrder() {
    if (target_reserveMessage && !modal_optionSetting) return 0;
    if (target_reserveMessage && modal_optionSetting) return 1;
  }
  function findOptionInfoOrder() {
    if (target_reserveMessage) return 0;
    if (target_sendImg) return 1;
    if (target_sendAudio) return 2;
    if (target_sendPhoneNum) return 3;
  }
  modalNum = findModalOrder();
  optionInfoNum = findOptionInfoOrder();

  return (
    <>
      {open_modal && (
        <Modal_contents
          modalClassName={modalContent[modalNum].modalClassName}
          className={modalContent[modalNum].className}
          title={modalContent[modalNum].title}
          subTitle={modalContent[modalNum].subTitle}
          ButtonWrapStyle={modalContent[modalNum].ButtonWrapStyle}
          cancelButton={modalContent[modalNum].cancelButton}
          submitButton={modalContent[modalNum].submitButton}
          button={modalContent[modalNum].button}>
          {modalContent[modalNum].children}
        </Modal_contents>
      )}
      <NoScrollBar
        height={`${
          plusClicked || (open_imgOption && !sendBtnClicked) ? "170px" : "280px"
        }`}
        className={""}>
        <StackedList_Profile
          onClick={backClickHandler}
          className={`h-[30px]`}
          profile={{ content: "홍", className: "bg-orange-200" }}
          title={{ content: "홍길동", className: "" }}
          info={{
            content: (
              <Icon name={`three-dots-vertical`} className={`text-sm`} />
            ),
            className: "justify-self-end",
          }}></StackedList_Profile>
        <ChatList
          onClick={backClickHandler}
          isGetList
          onPointerDown={mouseOverHandler}
          className={`mb-2`}
          message={{
            className: "bg-gray-200 ml-1",
            content: (
              <TargetContent
                targetOption={!isOvered && !message_fill && target_resend}>
                결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
                OO로 OOO번길 O, OOO 컨벤션
              </TargetContent>
            ),
          }}
          timeStamp={{
            className: "",
            content: "오전 8:03",
          }}></ChatList>

        {!messageContent && sendBtnClicked && !target_reserveMessage && (
          <ChatList
            onClick={backClickHandler}
            isSendList
            message={{
              content: (
                <>
                  {target_sendImg && <div className={classes.imgBox}></div>}
                  {target_sendAudio && (
                    <StackedList_Profile
                      className={`w-[90px] bg-gray-200 rounded-md py-1`}
                      profile={{
                        content: (
                          <Icon name="play" className={` text-[16px] mx-1`} />
                        ),
                      }}
                      title={{
                        content: "audio.mp3",
                        className: "text-center",
                      }}
                    />
                  )}
                  {target_sendPhoneNum && (
                    <StackedList_Profile
                      className={`w-[65px]  bg-gray-200 rounded-md py-1`}
                      profile={{
                        content: (
                          <Icon
                            name="person-fill"
                            className={` text-[16px] mx-2`}
                          />
                        ),
                      }}
                      title={{
                        content: "홍길순",
                        className: "text-center",
                      }}
                    />
                  )}
                </>
              ),
              className: "",
            }}
            timeStamp={{ content: "오전 9:54" }}></ChatList>
        )}
        {messageContent &&
          (target_reserveMessage ||
            target_sendImg ||
            target_sendAudio ||
            target_sendPhoneNum) && (
            <ChatList
              onClick={backClickHandler}
              isSendList
              message={{
                content: (
                  <>
                    {target_sendImg && <div className={classes.imgBox}></div>}
                    {target_sendAudio && (
                      <StackedList_Profile
                        className={`w-[90px] bg-gray-200 rounded-md py-1`}
                        profile={{
                          content: (
                            <Icon name="play" className={` text-[16px] mx-1`} />
                          ),
                        }}
                        title={{
                          content: "audio.mp3",
                          className: "text-center",
                        }}
                      />
                    )}
                    {target_sendPhoneNum && (
                      <StackedList_Profile
                        className={`w-[65px]  bg-gray-200 rounded-md py-1`}
                        profile={{
                          content: (
                            <Icon
                              name="person-fill"
                              className={` text-[16px] mx-2`}
                            />
                          ),
                        }}
                        title={{
                          content: "홍길순",
                          className: "text-center",
                        }}
                      />
                    )}
                  </>
                ),
                className: "",
              }}></ChatList>
          )}
        {messageContent && (
          <ChatList
            onClick={backClickHandler}
            isSendList
            message={{
              content: messageContent,
              className: "bg-[#4b8ce5] text-white",
            }}
            timeStamp={{
              content: target_reserveMessage ? (
                <TargetContent isNextDescriptionLink targetOption={true}>
                  <Icon name="clock" />
                </TargetContent>
              ) : (
                "오전 9:54"
              ),
            }}></ChatList>
        )}
        {/*  */}

        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            <TargetContent
              targetOption={isOvered && target_resend}
              isNextDescriptionLink={true}>
              전달
            </TargetContent>
            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
        {/* selected imgs */}
        {choicedImgs.length !== 0 && (
          <ChoicedFile
            fileType_img
            fileArray={choicedImgs}
            setChoicedFileArray={setChoicedImgs}
          />
        )}
        {open_optionInfo && !sendBtnClicked && (
          <div
            className={`h-[65px] mt-[100px] p-1 text-xs py-[5px] border-t flex  items-start border-t-gray-200`}>
            <div
              className={`mx-auto ${
                optionInfoContent[optionInfoNum].grayBox
                  ? "w-fit px-2 py-1 bg-[#e0e0e0] border border-[#e0e0e0] rounded-lg"
                  : ""
              }`}>
              {optionInfoContent[optionInfoNum].content}
            </div>
            <div className={`self-end mb-1`} onClick={deleteOptionHandler}>
              <Icon
                name="dash-circle-fill"
                className={` text-[#fd2828be] cursor-pointer`}
              />
            </div>
          </div>
        )}
      </NoScrollBar>

      <MessageSendLine
        className={`self-end`}
        navOption_blured={{
          content: [
            // img btn
            <TargetContent
              onClick={imgNavBtnClickHandler}
              targetOption={target_sendImgBtn}
              isNextDescriptionLink>
              <Icon name="image" />
            </TargetContent>,
            // camera btn
            <Icon name="camera" />,
            // plus btn
            <TargetContent
              onClick={plusBtnClickHandler}
              targetOption={!plusClicked && open_option}>
              <Icon name="plus" />
            </TargetContent>,
          ],
        }}
        navOption_focused={{
          content: [<Icon name="chevron-right" />],
        }}
        defaultEnteredMessage={
          message_fill && target_resend
            ? "결혼식 주소입니다. OO특별시 OO구 OO로 OOO번길 O, OOO 컨벤션"
            : ""
        }
        input={{
          className: "bg-[#e3e3e3cc] rounded-xl",
          onClick: backClickHandler,
        }}
        setMessageContent={setMessageContent}
        sendBtn={{ className: "bg-[#b8b8b8cc]" }}
        sendBtn_default={{
          className: "bg-[#e3e3e3cc]",
        }}
        onSendBtnClickHandler={() => {
          setChoicedImgs([]);
          setSendBtnClicked(true);
        }}
        sendBtnTriger={
          !sendBtnClicked &&
          (choicedImgs.length !== 0 ||
            (open_optionInfo && !target_reserveMessage))
        }></MessageSendLine>
      {/* options */}
      {open_option && (
        <NoScrollBar className={`animate-fadeInUp `}>
          <Grid_4x4
            className={"bg-[#e3e3e3cc]"}
            items={gridContent}
            iconClassName_common={`bg-white rounded-full p-[6px]`}
          />
        </NoScrollBar>
      )}
      {/* imgs */}
      {open_imgOption && !sendBtnClicked && (
        <NoScrollBar className={`ml-1`}>
          <ChoiceFile
            fileType_img
            className={""}
            choiceFile={choicedImgs}
            setChoicedFileArray={setChoicedImgs}
            num="7"
          />
        </NoScrollBar>
      )}
    </>
  );
}

export default Message;
