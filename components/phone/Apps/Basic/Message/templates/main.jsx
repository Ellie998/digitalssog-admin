import { useState } from "react";

import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import AppTitle_center from "@/components/DisplayBox/AppDisplays/_components/layout/AppTitle_center";
import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import Button from "@/components/DisplayBox/AppDisplays/_components/UI/Button";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import BlurModal from "@/components/DisplayBox/AppDisplays/_components/UI/BlurModal";
import FlexContent from "@/components/DisplayBox/AppDisplays/_components/list/FlexContent";
import Icon from "@/components/DisplayBox/AppDisplays/_components/UI/Icon";

import Phone from "@/components/phone/molecules/phone";
import TargetBox from "@/components/phone/atoms/target-box";
import CheckBox from "@/components/phone/Apps/Basic/atoms/check-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import MessageInfoAlert from "@/components/phone/Apps/Basic/atoms/message-info-alert";
import StackedList from "@/components/phone/molecules/stacked-list";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";

function Main({
  target_sendMessage,
  target_seeMessage,
  target_unreadMessage,
  target = { onMouseDown: false, delete: false },
  open = { selectMode: false, modal_bottom: false, message: true },
}) {
  const [isOptionOpened, setIsOptionOpened] = useState(false);
  const [isRejectChecked, setRejectCheck] = useState(false);
  const [isChecked1, setIsChecked1] = useState(open.selectMode);
  const iconStyle =
    " rounded-full px-1 py-1  cursor-pointer hover:shadow-sm hover:bg-gray-200";
  const iconStyleShadow = "rounded-full shadow-md  border-1 drop-shadow-2xl ";

  return (
    // "374px"
    <Phone>
      <NoScrollBar height={`${!open.selectMode ? "300px" : "260px"}`}>
        {open.modal_bottom && (
          <Modal
            modalStyle={{
              width: "170px",
              top: isRejectChecked ? "110px" : "130px",
              left: "2px",
            }}
            backdropStyle={{
              position: "absolute",
              backgroundColor: "#2a2a2a6a",
              height: "260px",
              width: "175px",
            }}>
            <ModalContents
              title={{
                content: "이 대화를 휴지통으로 이동할까요?",
                style: { marginBottom: "5px" },
              }}
              buttons={{
                content: [
                  <div key="1" style={{ fontWeight: "bold", fontSize: "14px" }}>
                    취소
                  </div>,
                  <TargetBox
                    condition={target.delete}
                    key="2"
                    style={{ fontWeight: "bold", fontSize: "14px" }}>
                    휴지통으로 이동
                  </TargetBox>,
                ],
                style: { justifyContent: "space-between", marginTop: "5px" },
              }}>
              <>
                <label
                  htmlFor="modal_bottom_checkbox"
                  style={{ fontSize: "14px" }}>
                  <input
                    type="checkbox"
                    id="modal_bottom_checkbox"
                    style={{ marginRight: "4px" }}
                    onChange={(e) => setRejectCheck(e.target.checked)}
                  />
                  번호도 함께 차단
                </label>
                {isRejectChecked && (
                  <div style={{ marginLeft: "15px", fontSize: "10px" }}>
                    이 번호의 전화 또는 메시지를 더 이상 받지 않습니다.
                  </div>
                )}
              </>
            </ModalContents>
          </Modal>
        )}
        {/* title : message */}
        {!target_unreadMessage && (
          <AppTitle_center
            title={{
              content: open.selectMode ? "1개 선택됨" : "Messages",
            }}></AppTitle_center>
        )}
        {/* title : 읽지않은 메시지 */}
        {target_unreadMessage && (
          <TargetContent
            className={`mx-auto`}
            targetOption={target_unreadMessage}
            isNextDescriptionLink={true}>
            <AppTitle_center
              className={`h-fit text-center text-base `}
              title={{ content: "읽지 않은 메시지 1개" }}
              subTitle={{
                content: (
                  <Button
                    className={`text-2xs px-1 py-0.5 h-fit rounded-xl`}
                    btnColor={"#cdcdcd8a"}
                    width={"max-content"}
                    textColor={`var(--grey-600)`}
                    content={"보기"}></Button>
                ),
              }}></AppTitle_center>
          </TargetContent>
        )}
        {!open.selectMode && (
          <AppHeader
            rightItem={[
              <Icon name="funnel-fill" className={`${iconStyle} text-sm`} />,
              <Icon name="search" className={`${iconStyle} text-sm`} />,
              <Icon
                name="three-dots-vertical"
                className={`${iconStyle} text-sm`}
              />,
            ]}></AppHeader>
        )}
        {open.selectMode && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 5px",
            }}>
            <CheckBox
              setIsChecked={setIsChecked1}
              isChecked={isChecked1}
              style={{ margin: "0 5px", display: "block" }}>
              <div style={{ fontSize: "10px" }}>전체</div>
            </CheckBox>
            <Icon name="search" />
          </div>
        )}
        <AppHeader
          leftItem={[
            <div
              style={{
                textDecorationLine: "underline",
                textUnderlineOffset: "4px",
                cursor: "pointer",
                color: open.selectMode
                  ? "rgba(37, 59, 255, 0.608)"
                  : "rgb(37, 59, 255)",
              }}>
              전체
            </div>,
            <Icon
              name="plus"
              style={{
                color: open.selectMode
                  ? "rgba(111, 111, 111, 0.608)"
                  : "rgb(50, 50, 50)",
              }}
            />,
          ]}></AppHeader>
        {/* message */}
        {!open.selectMode && open.message && (
          <TargetBox
            condition={target_seeMessage}
            isNextTriger={true}
            onMouseDown={target.onMouseDown ? () => {} : null}>
            <StackedList_Profile
              profile={{
                content: "홍",
                style: { backgroundColor: "rgb(227, 227, 227)" },
              }}
              title={{ content: "홍길동", style: { marginLeft: "4px" } }}
              info={{
                content: "오전 8:03",
              }}
              subTitle={{
                content: "결혼식 장소 정보입니다...",
                style: {
                  gridColumnEnd: "6",
                  marginLeft: "4px",
                },
              }}
              subInfo={{
                content: <MessageInfoAlert>1</MessageInfoAlert>,
              }}></StackedList_Profile>
          </TargetBox>
        )}
        {open.selectMode && open.message && (
          <CheckBox
            isChecked={isChecked1}
            setIsChecked={setIsChecked1}
            checkboxStyle={{
              width: "25px",
              height: "25px",
              checkedColor: "rgb(0, 114, 253)",
              after: {
                left: "8px",
                top: "5px",
              },
            }}>
            <TargetBox
              condition={target_seeMessage}
              isNextTriger={true}
              onMouseDown={target.onMouseDown ? () => {} : null}>
              <StackedList
                style={{ width: "145px", margin: "0 5px" }}
                title={{ className: "ml-1", content: "홍길동" }}
                info={{
                  className: "text-end",
                  content: "오전 8:03",
                }}
                subTitle={{
                  className: "ml-1 col-end-6",
                  content: "결혼식 장소 정보입니다...",
                }}
                subInfo={{
                  content: <MessageInfoAlert>1</MessageInfoAlert>,
                }}></StackedList>
            </TargetBox>
          </CheckBox>
        )}
        {/* message plus btn */}
        {!isOptionOpened && target_sendMessage && (
          <TargetContent
            className={`relative  left-32 top-24`}
            targetOption={target_sendMessage}>
            <Icon
              name="envelope-plus"
              className={`${iconStyle} ${iconStyleShadow} text-lg`}
              onClick={() => {
                setIsOptionOpened(true);
              }}
            />
          </TargetContent>
        )}
      </NoScrollBar>
      {open.selectMode && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "0 0 8px -1px rgba(118, 118, 118, 0.335)",
          }}>
          <TargetBox condition={null}>
            <IconBottom
              icon={{ name: "bell-slash" }}
              description={{
                content: "알림",
                style: { fontSize: "10px" },
              }}
            />
          </TargetBox>
          <TargetBox
            condition={isChecked1 && target.delete && !open.modal_bottom}>
            <IconBottom
              icon={{ name: "trash" }}
              description={{
                content: isChecked1 ? "모두 삭제" : "삭제",
                style: { fontSize: "10px" },
              }}
            />
          </TargetBox>
          <TargetBox condition={null}>
            <IconBottom
              icon={{ name: "three-dots-vertical" }}
              description={{
                content: "더보기",
                style: { fontSize: "10px" },
              }}
            />
          </TargetBox>
        </div>
      )}
      {isOptionOpened && (
        <BlurModal
          style={{ bottom: "390px" }}
          className={`left-[30%] `}
          onClickBackDrop={() => {
            setIsOptionOpened(false);
          }}>
          <div>
            <TargetContent
              className={`mb-2`}
              targetOption={target_sendMessage}
              isNextDescriptionLink={true}>
              <FlexContent
                className={`w-24`}
                items={[
                  <div className={`cursor-pointer text-sm`}>1:1 대화</div>,
                  <Icon
                    name="chat"
                    className={`${iconStyle} ${iconStyleShadow}`}
                  />,
                ]}
              />
            </TargetContent>
            <TargetContent
              className={`mb-2`}
              targetOption={false}
              isNextDescriptionLink={true}>
              <FlexContent
                className={`w-24`}
                items={[
                  <div className={`cursor-pointer text-sm`}>그룹 채팅</div>,
                  <Icon
                    name="people"
                    className={`${iconStyle} ${iconStyleShadow}`}
                  />,
                ]}
              />
            </TargetContent>

            <TargetContent
              className={`mb-2`}
              targetOption={false}
              isNextDescriptionLink={true}>
              <FlexContent
                className={`w-24`}
                items={[
                  <div className={`cursor-pointer text-sm`}>단체 문자</div>,
                  <Icon
                    name="wechat"
                    className={`${iconStyle} ${iconStyleShadow}`}
                  />,
                ]}
              />
            </TargetContent>
            <TargetContent
              className={`mb-2`}
              targetOption={false}
              isNextDescriptionLink={true}>
              <FlexContent
                className={`w-24`}
                items={[
                  <div></div>,
                  <Icon
                    onClick={() => setIsOptionOpened(false)}
                    name="x-lg"
                    className={`${iconStyle} ${iconStyleShadow} text-lg`}
                  />,
                ]}
              />
            </TargetContent>
          </div>
        </BlurModal>
      )}
    </Phone>
  );
}

export default Main;
