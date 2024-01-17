import { useState } from "react";

import ListOption from "components/DisplayBox/AppDisplays/_components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/_components/list/FlexContent";

import Icon from "@/components/phone/atoms/icon";
import Top from "@/components/phone/atoms/top";
import FlexInFlex from "@/components/phone/atoms/flex-in-flex";

import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import TargetBox from "@/components/phone/atoms/target-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import CheckBox from "@/components/phone/Apps/Basic/atoms/check-box";
import Flex from "@/components/phone/atoms/flex";

const Contacts = ({
  targetTab,
  clickedTapName,
  target = {
    call: false,
    videoCall: false,
    chat: false,
    info: false,
    person1: false,
    onMouseDown: false,
    delete: false,
  },
  open = { selectMode: false, person1: true, person2: true },
}) => {
  // const scrollElement = document.getElementById("NoScrollbar");

  const [isListClicked1, setIsListClicked1] = useState(false);
  const [isListClicked2, setIsListClicked2] = useState(false);

  const [isChecked1, setIsChecked1] = useState(open.selectMode);
  const [isChecked2, setIsChecked2] = useState(false);

  const showListOption1 = () => {
    !isListClicked1 && setIsListClicked1(true);
    isListClicked1 && setIsListClicked1(false);
    setIsListClicked2(false);
  };
  const showListOption2 = () => {
    !isListClicked2 && setIsListClicked2(true);
    isListClicked2 && setIsListClicked2(false);
    setIsListClicked1(false);
  };
  // 연락처 누르면 생기는 옵션 elements
  const optionlistContent = (
    <FlexContent
      className=""
      items={[
        <TargetBox
          key="telephone"
          condition={targetTab === clickedTapName && target.call}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(22, 163, 74)",
              color: "white",
              padding: "4px",
            }}
            name="telephone-fill"
          />
        </TargetBox>,
        <TargetBox
          key="chat"
          condition={targetTab === clickedTapName && target.chat}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(69, 127, 243)",
              color: "white",
              padding: "4px",
            }}
            name="chat-fill"
          />
        </TargetBox>,
        <TargetBox
          key="camera"
          condition={targetTab === clickedTapName && target.videoCall}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(22 ,163 ,74)",
              color: "white",
              padding: "4px",
            }}
            name="camera-video-fill"
          />
        </TargetBox>,
        <TargetBox
          key="info"
          condition={targetTab === clickedTapName && target.info}
          isNextTriger={true}>
          <Icon
            key="info"
            style={{
              backgroundColor: "rgb(97, 97, 97)",
              color: "white",
              padding: "4px",
            }}
            name="info"
          />
        </TargetBox>,
      ]}
    />
  );
  // 연락처 tap에 만들 list 정보
  const contactContents1 = [
    //진수
    {
      id: `contactList1`,
      style: { height: "2rem" },
      profile: {
        style: { backgroundColor: "rgb(249 168 212)", color: "white" },
        name: "person-fill",
      },
      title: {
        content: "진수",
      },
    },
    // 즐겨찾는 연락처 추가
    {
      id: `contactList2`,
      style: { height: "2rem" },
      profile: {
        style: { backgroundColor: "rgb(254 240 138)", color: "white" },
        name: "star-fill",
      },
      title: {
        content: "즐겨찾는 연락처 추가",
      },
    },

    //그룹
    {
      id: `contactList3`,
      style: { height: "2rem" },
      profile: {
        style: { color: "white", backgroundColor: "rgb(229 231 235)" },
        name: "people-fill",
      },
      title: {
        content: "그룹",
      },
    },
  ];

  return (
    <>
      <Top
        title={{
          content: !open.selectMode
            ? "전화"
            : isChecked1 && isChecked2
            ? "2개 선택됨"
            : isChecked1 || isChecked2
            ? "1개 선택됨"
            : "연락처 선택",
        }}
        subTitle={{
          content: !open.selectMode
            ? !open.person1 || !open.person2
              ? "전화번호가 저장된 연락처 1개"
              : "전화번호가 저장된 연락처 2개"
            : null,
        }}
      />
      {!open.selectMode && (
        <FlexInFlex
          rightItem={[
            <Icon key="plus" name="plus" style={{ fontSize: "0.875rem" }} />,
            <Icon
              key="search"
              name="search"
              style={{ fontSize: "0.875rem" }}
            />,
            <Icon
              key="dots"
              name="three-dots-vertical"
              style={{ fontSize: "0.875rem" }}
            />,
          ]}
        />
      )}
      {open.selectMode && (
        <Flex
          style={{ display: "flex", justifyContent: "space-between" }}
          items={[
            <CheckBox
              style={{
                fontSize: "10px",
                display: "block",
              }}
              isChecked={isChecked1 && isChecked2}
              setIsChecked={(value) => {
                setIsChecked1(value);
                setIsChecked2(value);
              }}
              key="1">
              전체
            </CheckBox>,
            <Icon
              key="search"
              name="search"
              style={{ fontSize: "0.875rem" }}
            />,
          ]}
        />
      )}
      <StackedListWrap
        style={{ border: "none" }}
        listTitle={{ content: "내 프로필" }}>
        {contactContents1.map((prop) => (
          <StackedList_Profile
            key={prop.id}
            onClick={prop.onClick}
            style={{
              backgroundColor:
                isChecked1 || isChecked2 ? "rgb(250, 250, 250)" : "white",
              marginBottom: "8px",
              borderRadius: "12px",
              ...prop.style,
            }}
            profile={prop.profile}
            title={{
              content: prop.title.content,
              style: {
                color:
                  isChecked1 || isChecked2
                    ? "rgb(184, 184, 184)"
                    : "rgb(35, 35, 35)",
              },
            }}>
            {prop.children}
          </StackedList_Profile>
        ))}
      </StackedListWrap>
      {/* contacts */}
      {!open.selectMode && (
        <>
          {open.person1 && (
            <StackedListWrap
              listTitle={{ content: "ㅇ" }}
              style={{
                border: "none",
              }}>
              <TargetBox
                condition={target.person1 && !isListClicked1}
                isNextTriger={
                  target.person1 && target.onMouseDown ? true : false
                }
                onMouseDown={
                  target.person1 && target.onMouseDown ? () => {} : null
                }>
                <StackedList_Profile
                  onClick={() => {
                    showListOption1();
                    // scrollElement.scroll(0, 315);
                  }}
                  style={{
                    height: "2rem",
                    backgroundColor: "white",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: !isListClicked1 && "12px",
                    borderBottomRightRadius: !isListClicked1 && "12px",
                  }}
                  //
                  profile={{
                    style: {
                      color: "white",
                      backgroundColor: "rgb(251 207 232)",
                      padding: "4px 4px",
                    },
                    content: "영",
                  }}
                  title={{
                    content: "영희",
                  }}>
                  {isListClicked1 && !target.onMouseDown && (
                    <ListOption
                      title={{
                        content: "휴대전화 010-1234-0000",
                        style: { color: "rgb(22, 163, 74)" },
                      }}
                      style={{
                        backgroundColor: "white",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}>
                      {optionlistContent}
                    </ListOption>
                  )}
                </StackedList_Profile>
              </TargetBox>
            </StackedListWrap>
          )}
          {open.person2 && (
            <StackedListWrap
              listTitle={{ content: "ㅊ" }}
              style={{ border: "none" }}>
              <TargetBox
                condition={false}
                isNextTriger={
                  target.person2 && target.onMouseDown ? true : false
                }
                onMouseDown={
                  target.person2 && target.onMouseDown ? () => {} : null
                }>
                <StackedList_Profile
                  onClick={() => {
                    showListOption2();
                    // scrollElement.scroll(0, 340);
                  }}
                  style={{
                    height: "2rem",
                    backgroundColor: "white",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: !isListClicked2 && "12px",
                    borderBottomRightRadius: !isListClicked2 && "12px",
                  }} //
                  profile={{
                    style: {
                      color: "white",
                      backgroundColor: "rgb(254 215 170)",
                      padding: "4px 4px",
                    },
                    content: "철",
                  }}
                  title={{
                    content: "철수",
                  }}>
                  {isListClicked2 && !target.onMouseDown && (
                    <ListOption
                      style={{
                        backgroundColor: "white",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                      title={{
                        content: "휴대전화 010-1234-0001",
                        style: { color: "rgb(22, 163, 74)" },
                      }}>
                      {optionlistContent}
                    </ListOption>
                  )}
                </StackedList_Profile>
              </TargetBox>
            </StackedListWrap>
          )}
        </>
      )}
      {open.selectMode && (
        <>
          <StackedListWrap
            listTitle={{ content: "ㅇ" }}
            style={{
              border: "none",
            }}>
            <TargetBox
              condition={target.person1 && !isChecked1}
              isNextTriger={false}
              onMouseDown={
                target.person1 && target.onMouseDown ? () => {} : null
              }>
              <CheckBox
                display={isChecked1}
                isChecked={isChecked1}
                setIsChecked={setIsChecked1}
                style={{
                  padding: "0 5px",
                  height: "2rem",
                  backgroundColor: "white",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  borderBottomLeftRadius: !isListClicked1 && "12px",
                  borderBottomRightRadius: !isListClicked1 && "12px",
                }}>
                <StackedList_Profile
                  style={{ width: isChecked1 ? "150px" : "175px" }}
                  profile={
                    !isChecked1 && {
                      style: {
                        color: "white",
                        backgroundColor: "rgb(251 207 232)",
                        padding: "4px 4px",
                      },
                      content: "영",
                    }
                  }
                  title={{
                    content: "영희",
                    style: {
                      gridColumnStart: isChecked1 ? "1" : "2",
                      marginLeft: isChecked1 ? "5px" : "0",
                    },
                  }}></StackedList_Profile>
              </CheckBox>
            </TargetBox>
          </StackedListWrap>
          <StackedListWrap
            listTitle={{ content: "ㅊ" }}
            style={{ border: "none" }}>
            <TargetBox
              condition={false}
              isNextTriger={false}
              onMouseDown={
                target.person2 && target.onMouseDown ? () => {} : null
              }>
              <CheckBox
                display={isChecked2}
                isChecked={isChecked2}
                setIsChecked={setIsChecked2}
                style={{
                  padding: "0 5px",
                  height: "2rem",
                  backgroundColor: "white",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  borderBottomLeftRadius: !isListClicked2 && "12px",
                  borderBottomRightRadius: !isListClicked2 && "12px",
                }}>
                <StackedList_Profile
                  style={{ width: isChecked2 ? "150px" : "175px" }}
                  profile={
                    !isChecked2 && {
                      style: {
                        color: "white",
                        backgroundColor: "rgb(254 215 170)",
                        padding: "4px 4px",
                      },
                      content: "철",
                    }
                  }
                  title={{
                    content: "철수",
                    style: {
                      gridColumnStart: isChecked2 ? "1" : "2",
                      marginLeft: isChecked2 ? "5px" : "0",
                    },
                  }}></StackedList_Profile>
              </CheckBox>
            </TargetBox>
          </StackedListWrap>
        </>
      )}
      {/* bottom modal */}
      {open.selectMode && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-around",
            width: "175px",
            height: "35px",
            marginTop: "-70px",
            background: "rgb(244,244,244)",
            boxShadow: "0 0 8px -1px rgba(118, 118, 118, 0.335)",
          }}>
          {(isChecked1 || isChecked2) && (
            <>
              <TargetBox condition={null}>
                <IconBottom
                  icon={{ name: "chat" }}
                  description={{
                    content: "채팅",
                    style: { fontSize: "10px" },
                  }}
                />
              </TargetBox>
              <TargetBox condition={null}>
                <IconBottom
                  icon={{ name: "share-fill" }}
                  description={{
                    content: "공유",
                    style: { fontSize: "10px" },
                  }}
                />
              </TargetBox>
              <TargetBox condition={isChecked1 && target.delete}>
                <IconBottom
                  icon={{ name: "trash" }}
                  description={{
                    content: isChecked1 && isChecked2 ? "모두 삭제" : "삭제",
                    style: { fontSize: "10px" },
                  }}
                />
              </TargetBox>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Contacts;
