/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import classes from "./chat.module.css";
import ChoiceFile from "@/components/DisplayBox/AppDisplays/_components/layout/ChoiceFile";
import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import Icon from "@/components/DisplayBox/AppDisplays/_components/UI/Icon";
import ChatList from "@/components/DisplayBox/AppDisplays/_components/UI/ChatList";
import MessageSendLine from "@/components/DisplayBox/AppDisplays/_components/UI/MessageSendLine";
import Grid_4x4 from "@/components/DisplayBox/AppDisplays/_components/layout/Grid_4x4";
import ChoicedFile from "@/components/DisplayBox/AppDisplays/_components/UI/ChoicedFile";
import Input from "@/components/DisplayBox/AppDisplays/_components/UI/Input";
import Checkbox from "@/components/DisplayBox/AppDisplays/_components/UI/Checkbox";
import GetDate from "@/components/DisplayBox/AppDisplays/_components/GetDate";
//
import Phone from "@/components/phone/molecules/phone";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";
import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";
import SubmitBtn from "@/components/phone/atoms/submit-btn";
import CancelBtn from "@/components/phone/atoms/cancel-btn";
import Button from "@/components/phone/atoms/button";
import ChatHeader from "@/components/phone/Apps/Basic/Message/organisms/chat-header";
import TargetBox from "@/components/phone/atoms/target-box";
import CheckBox from "@/components/phone/Apps/Basic/atoms/check-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";

function Chat({
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
  target = { call: false, message: false },
  open = {
    profile: false,
    contentOption: false,
    selectMode: false,
    chat: true,
  },
  content = { name: "홍길동" },
  target_option = { delete: false },
}) {
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [plusClicked, setPlusClicked] = useState(false);
  const [isChecked1, setIsChecked] = useState(true);

  // Choice IMG
  const [choicedImgs, setChoicedImgs] = useState([]);
  useEffect(() => {
    setMessageContent("");
    setSendBtnClicked(false);
    setPlusClicked(false);
  }, [open_option, open_optionInfo, open_modal, open_imgOption]);

  function backClickHandler() {
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
      modalStyle: { top: "90px" },
      title: { content: "메시지 예약 전송" },
      subTitle: {},
      buttons: {
        style: { justifyContent: "space-around" },
        content: [
          <CancelBtn key="cancel" condition={true}>
            취소
          </CancelBtn>,
          <SubmitBtn key="submit" condition={true}>
            완료
          </SubmitBtn>,
        ],
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
      modalStyle: { top: "180px" },
      title: {},
      subTitle: {
        content: `이 메시지는 ${GetDate().m_d} ${
          GetDate().h_plus1_m
        } 에 전송됩니다.`,
      },
      buttons: {
        style: { justifyContent: "space-around" },
        content: [
          <Button
            key="btn1"
            id="btn1"
            style={{
              borderRight: "1px solid #e3e3e3",
            }}>
            지금 보내기
          </Button>,
          <Button
            key="btn2"
            id="btn2"
            style={{
              borderRight: "1px solid #e3e3e3",
            }}>
            삭제
          </Button>,
          <Button key="btn3" id="btn3" style={{}}>
            편집
          </Button>,
        ],
      },
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
          style={{ width: "fit-content" }}
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
          style={{ width: "fit-content" }}
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
    <Phone>
      {open_modal && (
        <Modal modalStyle={modalContent[modalNum].modalStyle}>
          <ModalContents
            title={modalContent[modalNum].title}
            subTitle={modalContent[modalNum].subTitle}
            buttons={modalContent[modalNum].buttons}>
            {modalContent[modalNum].children}
          </ModalContents>
        </Modal>
      )}
      <div
        style={{
          height: `${
            plusClicked || (open_imgOption && !sendBtnClicked)
              ? "170px"
              : "260px"
          }`,
        }}>
        {!open.selectMode && (
          <ChatHeader
            onClick={backClickHandler}
            open={open.profile}
            target={target}
            name={message_fill ? "홍길순" : content.name}
          />
        )}
        {open.selectMode && (
          <div style={{ display: "flex" }}>
            <CheckBox
              setIsChecked={setIsChecked}
              isChecked={isChecked1}
              style={{ margin: "0 5px", display: "block" }}>
              <div style={{ fontSize: "10px" }}>전체</div>
            </CheckBox>
            {isChecked1 && <div>1개 선택됨</div>}
            {!isChecked1 && <div>메시지 선택</div>}
          </div>
        )}

        {!message_fill && !open.selectMode && open.chat && (
          <ChatList
            onClick={backClickHandler}
            isGetList
            className={`mb-2 `}
            message={{
              className: "bg-gray-200 ml-1",
              content: (
                <TargetBox
                  condition={
                    (!open.contentOption && target_resend) || target.message
                  }
                  onMouseDown={() => {}}>
                  결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
                  OO로 OOO번길 O, OOO 컨벤션
                </TargetBox>
              ),
            }}
            timeStamp={{
              className: "",
              content: "오전 8:03",
            }}></ChatList>
        )}
        {!message_fill && open.selectMode && open.chat && (
          <CheckBox setIsChecked={setIsChecked} isChecked={isChecked1}>
            <ChatList
              onClick={backClickHandler}
              isGetList
              className={`mb-2 `}
              message={{
                className: "bg-gray-200 ml-1",
                content: (
                  <TargetBox
                    condition={
                      (!open.contentOption && target_resend) || target.message
                    }
                    onMouseDown={() => {}}>
                    결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
                    OO로 OOO번길 O, OOO 컨벤션
                  </TargetBox>
                ),
              }}
              timeStamp={{
                className: "",
                content: "오전 8:03",
              }}></ChatList>
          </CheckBox>
        )}

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
                      style={{
                        width: "90px",
                        backgroundColor: "rgb(229 231 235)",
                        borderRadius: "0.375rem",
                        padding: "4px 0",
                      }}
                      profile={{
                        name: "play",
                        style: { fontSize: "16px", margin: "0 4px" },
                      }}
                      title={{
                        content: "audio.mp3",
                        style: { textAlign: "center" },
                      }}
                    />
                  )}
                  {target_sendPhoneNum && (
                    <StackedList_Profile
                      style={{
                        width: "65px",
                        backgroundColor: "rgb(229 231 235)",
                        borderRadius: "0.375rem",
                        padding: "4px 0",
                      }}
                      profile={{
                        name: "person-fill",
                        style: { fontSize: "16px", margin: "0 4px" },
                      }}
                      title={{
                        content: "홍길순",
                        style: { textAlign: "center" },
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
                        style={{
                          width: "90px",
                          backgroundColor: "rgb(229 231 235)",
                          borderRadius: "0.375rem",
                          padding: "4px 0",
                        }}
                        profile={{
                          name: "play",
                          style: { fontSize: "16px", margin: "0 4px" },
                        }}
                        title={{
                          content: "audio.mp3",
                          style: { textAlign: "center" },
                        }}
                      />
                    )}
                    {target_sendPhoneNum && (
                      <StackedList_Profile
                        style={{
                          width: "65px",
                          backgroundColor: "rgb(229 231 235)",
                          borderRadius: "0.375rem",
                          padding: "4px 0",
                        }}
                        profile={{
                          name: "person-fill",
                          style: { fontSize: "16px", margin: "0 4px" },
                        }}
                        title={{
                          content: "홍길순",
                          style: { textAlign: "center" },
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
                  <Icon name="clock" className={"p-1"} />
                </TargetContent>
              ) : (
                "오전 9:54"
              ),
            }}></ChatList>
        )}
        {/*  */}

        {open.contentOption && (
          <div className={classes.options}>
            <TargetBox condition={target_option.delete}>삭제</TargetBox>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            <TargetBox condition={target_resend}>전달</TargetBox>
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
            className={`h-[65px] mt-[80px] p-1 text-xs py-[5px] border-t flex  items-start border-t-gray-200`}>
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
      </div>
      {/* bottom line */}
      {!open.selectMode && (
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
          sendBtn={{ className: "bg-[#b8b8b8cc] " }}
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
      )}
      {open.selectMode && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            boxShadow: "0 0 8px -1px rgba(118, 118, 118, 0.335)",
          }}>
          <TargetBox condition={isChecked1}>
            <IconBottom
              icon={{ name: "trash" }}
              description={{
                content: isChecked1 ? "모두 삭제" : "삭제",
                style: { fontSize: "10px" },
              }}
            />
          </TargetBox>
        </div>
      )}
      {/* options */}
      {open_option && plusClicked && (
        <NoScrollbar height={"100px"}>
          <Grid_4x4 className={"bg-[#e3e3e3cc]"} items={gridContent} />
        </NoScrollbar>
      )}
      {/* imgs */}
      {open_imgOption && !sendBtnClicked && (
        <NoScrollbar className={`ml-1`}>
          <ChoiceFile
            fileType_img
            className={""}
            choiceFile={choicedImgs}
            setChoicedFileArray={setChoicedImgs}
            num="7"
          />
        </NoScrollbar>
      )}
    </Phone>
  );
}

export default Chat;
