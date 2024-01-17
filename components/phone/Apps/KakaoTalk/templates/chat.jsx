import { useState } from "react";

import classes from "./chat.module.css";
import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";
import ChatList from "@/components/DisplayBox/AppDisplays/_components/UI/ChatList";

import FlexContent from "@/components/DisplayBox/AppDisplays/_components/list/FlexContent";
import MessageSendLine from "@/components/DisplayBox/AppDisplays/_components/UI/MessageSendLine";

import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import StackedListWrap from "@/components/DisplayBox/AppDisplays/_components/list/StackedListWrap";
import Checkbox from "@/components/DisplayBox/AppDisplays/_components/UI/Checkbox";

import Button from "@/components/DisplayBox/AppDisplays/_components/UI/Button";
import Alert from "@/components/DisplayBox/AppDisplays/_components/UI/Alert";
import GetDate from "@/components/DisplayBox/AppDisplays/_components/GetDate";
import Phone from "@/components/phone/molecules/phone";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";
import CancelBtn from "@/components/phone/atoms/cancel-btn";
import SubmitBtn from "@/components/phone/atoms/submit-btn";

import Modal_downUp from "@/components/phone/molecules/modal-down-up";
import ChatOptionBox from "@/components/phone/Apps/KakaoTalk/organisms/chat-option-box";
import ChatSideMenu from "@/components/phone/Apps/KakaoTalk/organisms/chat-side-menu";
import ChatContentOptionModal from "@/components/phone/Apps/KakaoTalk/organisms/chat-content-option-modal";
import TargetBox from "@/components/phone/atoms/target-box";

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import ShareModalContent_Default from "@/components/phone/organisms/shareModalContent_default";
import ShareModalContent from "@/components/phone/Apps/KakaoTalk/organisms/share-modal-content";
import ImgOptionBox from "@/components/phone/Apps/KakaoTalk/organisms/img-option-box";
import Icon from "@/components/phone/atoms/icon";
import CheckBox from "@/components/phone/Apps/KakaoTalk/atoms/check-box";
import Flex from "@/components/phone/atoms/flex";

function Chat({
  content = {
    name: "영희",
    chat: "좋은 아침 ^^",
    num: null,
    chatName: "영희",
    sendChatContent: null,
    modalTitle: "이 기기에서 삭제",
    modalContent: (
      <>
        나가기를 하면 대화내용이 모두 삭제되고
        <br />
        채팅 목록에서도 삭제됩니다.
      </>
    ),
    modalBtn: "나가기",
  },
  inputLocked,
  target = {
    sendChatContent: false,
    sendImg: false,
    sendPhoneNum: false,
    resend: false,
    optionBtn: false,
    menu: false,
    reserveMessage: false,
    leave_quietly: false,
    leave: false,
    setting: false,
    chatOption: false,
    option_call: false,
    option_videoCall: false,
    modalBtn: false,
  },
  target_option = {
    gallery: false,
    img_totalBtn: false,
  },
  target_chat = {
    delete: false,
  },
  open = {
    chat: true,
    contentOption: false,
    sendedChat: false,
    option: false,
    optionSetting: false,
    menu: false,
    alert: false,
    topAlert: false,
    modal: false,
    shareModal: false,
    shareModal_default: false,
    imgOption: false,
    deleteMode: false,
  },
  share = { friend2: false, shareOut: false },
  reopen = { optionSetting: false },
}) {
  //message
  const [messageContent, setMessageContent] = useState("");

  // modal
  const [isCheckbox, setIsCheckbox] = useState(false);

  // option setting
  const [optionInput, setOptionInput] = useState("");
  const [isOptionInputSubmit, setIsOptionInputSubmit] = useState(false);
  //
  const [choicedImgs, setChoicedImgs] = useState([]);
  const [isChecked, setIsChecked] = useState(open.deleteMode);

  function backClickHandler() {
    setOptionInput("");
  }

  return (
    <Phone>
      {/* Modal */}
      {open.modal && (
        <Modal modalStyle={{ top: "80px" }}>
          <ModalContents
            title={{
              content: target.option_videoCall
                ? "통화하기"
                : content.modalTitle,
              style: { fontWeight: "bold" },
            }}
            subTitle={{
              content: !target.option_videoCall && content.modalContent,
            }}
            buttons={
              !target.option_videoCall && {
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
                    condition={
                      (isCheckbox && (target.leave_quietly || target.leave)) ||
                      target.modalBtn
                    }>
                    {content.modalBtn}
                  </SubmitBtn>,
                ],
              }
            }>
            {target.leave_quietly && (
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
            {(target.option_videoCall || target.option_call) && (
              <div style={{ fontSize: "0.8rem", marginLeft: "5px" }}>
                <TargetBox
                  condition={target.option_call}
                  style={{ padding: "3px 2px", width: "100%" }}>
                  보이스톡
                </TargetBox>
                <TargetBox
                  condition={target.option_videoCall}
                  style={{ padding: "3px 2px", width: "100%" }}>
                  페이스톡
                </TargetBox>
              </div>
            )}
          </ModalContents>
        </Modal>
      )}
      {open.topAlert && (
        <Modal
          backdropStyle={{ backgroundColor: "transparent" }}
          modalStyle={{
            left: "0",
            width: "175px",
            backgroundColor: "rgb(97, 97, 97)",
            borderRadius: "0",
            padding: "2px",
            height: "70px",
          }}>
          <StackedList_Profile
            profile={{
              name: "person-fill",
              style: {
                color: "white",
                backgroundColor: "var(--kakao-skyblue)",
              },
            }}
            title={{
              content: "철수 채팅방에 메시지를 전달하였습니다.",
              style: { color: "white", fontSize: "0.7rem" },
            }}
            info={{
              content: "채팅방 이동",
              style: { color: "yellow", fontSize: "0.7rem" },
            }}
          />
        </Modal>
      )}
      {/* setting option */}
      {(open.optionSetting || reopen.optionSetting) && (
        <Modal_downUp onClickBackDrop={backClickHandler} top="43px">
          <StackedListWrap
            className={``}
            listTitle={{
              content: (
                <TargetContent
                  targetOption={
                    open.optionSetting &&
                    target.reserveMessage &&
                    optionInput === "" &&
                    !isOptionInputSubmit
                  }>
                  <input
                    placeholder="메시지 입력"
                    className="w-full text-sm"
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
            <div className={`text-xs text-gray-400`}>일시</div>
            <input
              className={`text-xs cursor-pointer w-[140px]`}
              type="datetime-local"
              defaultValue={GetDate().y_m_d_h_plus1_m}
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

          <div className={`text-xs text-gray-400 my-0.5 flex`}>
            <Icon
              name="info-circle"
              style={{
                fontSize: "0.6rem",
                color: "rgb(156 163 175)",
                marginRight: "0.25rem",
              }}
            />
            예약 메시지가 많을 경우, 약간의 시간 오차가 발생할 수 있습니다.
          </div>
          <FlexContent
            className={`mb-1 mt-4`}
            items={[
              <TargetContent targetOption={reopen.optionSetting}>
                <Button
                  btnColor={`#efefef`}
                  className={`text-xs font-bold`}
                  width={`70px`}
                  content={"예약 목록 보기"}
                />
              </TargetContent>,
              <TargetContent
                targetOption={
                  target.reserveMessage &&
                  optionInput !== "" &&
                  !isOptionInputSubmit
                }
                isNextDescriptionLink={true}>
                <Button
                  btnColor={`${optionInput === "" ? "#fafafa" : "#fff200"}`}
                  className={`text-xs font-bold`}
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
        </Modal_downUp>
      )}
      {/* Side Menu */}
      {open.menu && (
        <ChatSideMenu onClickBackDrop={backClickHandler} target={target} />
      )}
      {/* chat content option */}
      {open.contentOption && (
        <ChatContentOptionModal
          onClickBackDrop={backClickHandler}
          target={{ ...target, ...target_chat }}
        />
      )}
      {open.shareModal && (
        <Modal
          modalStyle={{
            width: "175px",
            left: "0",
            borderRadius: "0",
            top: "134px",
          }}>
          <ShareModalContent
            target={{ shareOut: share.shareOut, friend2: share.friend2 }}
          />
        </Modal>
      )}
      {open.shareModal_default && (
        <Modal_downUp
          modalStyle={{
            width: "175px",
            left: "0",
            borderRadius: "0",
          }}
          top="68px">
          <ShareModalContent_Default
            content={{ title: "좋은 아침^^", icon: "list" }}
            target={{ kakaotalk: true }}
          />
        </Modal_downUp>
      )}
      {/* messages */}
      <NoScrollBar
        height={`${
          open.option || open.optionSetting || open.imgOption
            ? "150px"
            : "275px"
        }`}
        className={`bg-[#b2c6d9] p-1`}
        onClick={backClickHandler}>
        {/* normal mode header */}

        <AppHeader
          onClick={backClickHandler}
          className={`bg-[#b2c6da] h-[35px]`}
          leftItem={[
            <BackBtn></BackBtn>,
            <div
              style={{
                fontSize: "0.875rem",
                marginLeft: "0.25rem",
                fontWeight: "700",
                verticalAlign: "middle",
              }}>
              {content.chatName}
            </div>,
            <div
              style={{
                fontSize: "0.875rem",
                marginLeft: "0.25rem",
                verticalAlign: "middle",
              }}>
              {content.num}
            </div>,
          ]}
          rightItem={[
            <Icon
              name="search"
              style={{ margin: "0.25rem", verticalAlign: "middle" }}
            />,
            <TargetContent targetOption={target.menu} isNextDescriptionLink>
              <Icon
                name="list"
                style={{ margin: "0.25rem", verticalAlign: "middle" }}
              />
            </TargetContent>,
          ]}></AppHeader>

        {/* delete mode mode header */}
        {open.deleteMode && (
          <>
            <AppHeader
              onClick={backClickHandler}
              style={{
                backgroundColor: "white",
                height: "35px",
                width: "175px",
                marginLeft: "-4px",
                marginTop: "-4px",
                borderBottom: "1px solid rgb(228, 228, 228)",
                position: "relative",
                top: "-35px",
              }}
              leftItem={[
                <BackBtn></BackBtn>,
                <div
                  style={{
                    fontSize: "0.875rem",
                    marginLeft: "0.25rem",
                    fontWeight: "700",
                    verticalAlign: "middle",
                  }}>
                  삭제
                </div>,
              ]}
              rightItem={[
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    verticalAlign: "middle",
                  }}>
                  선택 해제
                </div>,
              ]}></AppHeader>
            <div
              style={{
                backgroundColor: "white",
                height: "20px",
                fontSize: "10px",
                textAlign: "center",
                position: "relative",
                top: "-35px",
                width: "175px",
                marginLeft: "-4px",
              }}>
              삭제할 메시지를 선택하세요
            </div>
          </>
        )}
        {/* normal mode messges */}
        {!open.deleteMode && open.chat && (
          <ChatList
            isGetList={true}
            className=""
            profile={{
              className: "bg-kakaoSkyblue",
              content: <Icon name="person-fill" style={{ color: "white" }} />,
            }}
            name={{
              content: content.name,
              className: "",
            }}
            message={{
              className: "bg-white",
              content: (
                <TargetBox
                  condition={target.chatOption && !open.contentOption}
                  onMouseDown={target.chatOption && (() => {})}>
                  {content.chat}
                </TargetBox>
              ),
            }}
            timeStamp={{
              className: "",
              content: "오후 2:05",
            }}
          />
        )}
        {(messageContent || (open.sendedChat && content.sendChatContent)) &&
          !open.deleteMode && (
            <ChatList
              isSendList={true}
              className="mt-2"
              message={{
                className: "bg-kakaoYellow",
                content:
                  messageContent ||
                  (open.sendedChat && content.sendChatContent),
              }}
              timeStamp={{
                className: "",
                content: "오전 9:54",
              }}
            />
          )}
        {/* delete mode messages */}
        {open.deleteMode && open.chat && (
          <>
            <CheckBox setIsChecked={setIsChecked} isChecked={isChecked}>
              <ChatList
                isGetList={true}
                className=""
                profile={{
                  className: "bg-kakaoSkyblue",
                  content: (
                    <Icon name="person-fill" style={{ color: "white" }} />
                  ),
                }}
                name={{
                  content: content.name,
                  className: "",
                }}
                message={{
                  className: "bg-white",
                  content: (
                    <TargetBox
                      condition={target.chatOption && !open.contentOption}
                      onMouseDown={target.chatOption && (() => {})}>
                      {content.chat}
                    </TargetBox>
                  ),
                }}
                timeStamp={{
                  className: "",
                  content: "오후 2:05",
                }}
              />
            </CheckBox>
            <CheckBox>
              <ChatList
                isGetList={true}
                message={{
                  className: "bg-white ml-2 mt-1",
                  content: (
                    <TargetBox
                      condition={target.chatOption && !open.contentOption}
                      onMouseDown={target.chatOption && (() => {})}>
                      밥 먹었나?
                    </TargetBox>
                  ),
                }}
                timeStamp={{
                  className: "",
                  content: "오후 2:06",
                }}
              />
            </CheckBox>
          </>
        )}
        {(messageContent || open.sendedChat) && open.deleteMode && (
          <CheckBox>
            <ChatList
              isSendList={true}
              className="mt-2"
              message={{
                className: "bg-kakaoYellow",
                content:
                  messageContent ||
                  (open.sendedChat && content.sendChatContent),
              }}
              timeStamp={{
                className: "",
                content: "오전 9:54",
              }}
            />
          </CheckBox>
        )}
        {/* alert */}
        {open.alert && (
          <Alert
            style={{ top: "200px" }}
            content="메시지를 예약했습니다."
            icon={{
              name: "chat-fill",
              style: {
                backgroundColor: "var(--kakao-yellow",
                color: "#3e3404",
              },
            }}
          />
        )}
      </NoScrollBar>

      {/* input line */}
      {!inputLocked && !open.deleteMode && (
        <MessageSendLine
          navOption_focused={{
            content: [
              !open.option ? (
                <TargetContent
                  targetOption={target.optionBtn}
                  isNextDescriptionLink={true}>
                  <Icon name="plus-lg" />
                </TargetContent>
              ) : (
                <Icon name="x-lg" />
              ),
            ],
          }}
          input={{}}
          onSendBtnClickHandler={() => {}}
          setMessageContent={setMessageContent}
          sendBtnTriger={choicedImgs.length >= 1 ? true : false}
          sendBtn={{
            className: "send-fill bg-[#f7e540]",
            condition: choicedImgs.length >= 1,
          }}
          sendBtn_default={{
            content: <Icon name="hash" />,
          }}></MessageSendLine>
      )}
      {inputLocked && !open.deleteMode && (
        <FlexContent
          items={[
            <Icon name="plus-lg" />,
            <div className="leading-4 text-gray-400 text-2xs text-start">
              대화에 주의가 필요한 방입니다.
            </div>,
            <TargetContent targetOption={inputLocked} isNextDescriptionLink>
              <div className={classes.sendIcon}>
                <Icon name="lock" style={{ backgroundColor: "#f7e540" }} />
              </div>
            </TargetContent>,
          ]}
        />
      )}
      {open.deleteMode && (
        <TargetBox
          condition={open.deleteMode && isChecked}
          style={{ margin: "0 auto" }}>
          <Flex
            style={{
              backgroundColor: "white",
              color: "rgb(235, 37, 37)",
              justifyContent: "center",
            }}
            items={[
              <div style={{ color: "rgb(235, 37, 37)" }}>삭제하기</div>,
              <div style={{ fontWeight: "bold", color: "rgb(235, 37, 37)" }}>
                1
              </div>,
            ]}
          />
        </TargetBox>
      )}
      {/* Option Box */}
      {open.option && (
        <ChatOptionBox target={{ ...target, ...target_option }} />
      )}
      {open.imgOption && (
        <ImgOptionBox
          target={{ totalBtn: target_option.img_totalBtn }}
          setChoicedImgs={setChoicedImgs}
          choicedImgs={choicedImgs}
        />
      )}
    </Phone>
  );
}

export default Chat;
