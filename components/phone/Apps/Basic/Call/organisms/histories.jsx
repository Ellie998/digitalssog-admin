import { useState } from "react";

import ListOption from "@/components/DisplayBox/AppDisplays/_components/list/ListOption";
import FlexContent from "@/components/DisplayBox/AppDisplays/_components/list/FlexContent";

import Top from "@/components/phone/atoms/top";
import Icon from "@/components/phone/atoms/icon";
import FlexInFlex from "@/components/phone/atoms/flex-in-flex";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";
import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import TargetBox from "@/components/phone/atoms/target-box";
import CheckBox from "@/components/phone/Apps/Basic/atoms/check-box";
import IconBottom from "@/components/phone/molecules/icon-bottom";

const Histories = ({
  targetTab,
  clickedTapName,
  open = { selectMode: false, person1: true, person2: true },
  target = {
    call: false,
    person1: false,
    videoCall: false,
    onMouseDown: false,
    delete: false,
  },
}) => {
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
  const optionlistContent = (
    <FlexContent
      items={[
        <TargetBox
          key="telephone"
          condition={targetTab === clickedTapName && target.call}>
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
            key="chat"
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

  return (
    <>
      <Top title={{ content: open.selectMode ? "항목 선택" : "전화" }} />
      {!open.selectMode && (
        <FlexInFlex
          rightItem={[
            <Icon key="1" name="filter" style={{ fontSize: "0.875rem" }} />,
            <Icon key="2" name="search" style={{ fontSize: "0.875rem" }} />,
            <Icon
              key="3"
              name="three-dots-vertical"
              style={{ fontSize: "0.875rem" }}
            />,
          ]}
        />
      )}
      {open.selectMode && (
        <FlexInFlex
          leftItem={[
            <CheckBox
              key="1"
              setIsChecked={(value) => {
                setIsChecked1(value);
                setIsChecked2(value);
              }}
              isChecked={isChecked1 && isChecked2}
              style={{ margin: "0 5px", display: "block" }}>
              <div style={{ fontSize: "10px" }}>전체</div>
            </CheckBox>,
          ]}
          rightItem={[
            <Icon key="2" name="search" style={{ fontSize: "0.875rem" }} />,
          ]}
        />
      )}
      <StackedListWrap
        style={{ border: "none", marginTop: "10px" }}
        listTitle={{ content: "6월 17일" }}>
        {!open.selectMode && (
          <>
            {open.person1 && (
              <TargetBox
                condition={!isListClicked1 && target.person1}
                isNextTriger={target.onMouseDown ? true : false}
                onMouseDown={target.onMouseDown ? () => {} : null}>
                <StackedList_Profile
                  style={{
                    padding: "4px 0",
                    backgroundColor: "white",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderTop: "none",
                  }}
                  profile={{
                    name: "telephone-outbound-fill",
                    style: { color: "rgb(21 128 61)" },
                  }}
                  title={{ content: "영희" }}
                  info={{
                    content: "오후 7:38",
                  }}
                  onClick={showListOption1}>
                  {isListClicked1 && (
                    <ListOption
                      style={{
                        backgroundColor: "white",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                      title={{ content: "휴대전화 010-1234-0000" }}
                      subTitle={{ content: "휴대전화 발신전화, 0분 33초" }}>
                      {optionlistContent}
                    </ListOption>
                  )}
                </StackedList_Profile>
              </TargetBox>
            )}
            {open.person2 && (
              <TargetBox
                condition={!isListClicked2 && target.person2}
                isNextTriger={target.onMouseDown ? true : false}
                onMouseDown={target.onMouseDown ? () => {} : null}>
                <StackedList_Profile
                  style={{
                    padding: "4px 0",
                    backgroundColor: "white",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    borderTop: "1px solid rgb(233,233,233)",
                  }}
                  profile={{
                    name: "telephone-outbound-fill",
                    style: { color: "rgb(21 128 61)" },
                  }}
                  title={{
                    content: "철수",
                  }}
                  info={{
                    content: "오후 5:20",
                  }}
                  onClick={showListOption2}>
                  {isListClicked2 && (
                    <ListOption
                      style={{
                        backgroundColor: "white",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                      }}
                      title={{ content: "휴대전화 010-1234-0000" }}
                      subTitle={{ content: "휴대전화 발신전화, 0분 24초" }}>
                      {optionlistContent}
                    </ListOption>
                  )}
                </StackedList_Profile>
              </TargetBox>
            )}
          </>
        )}
        {open.selectMode && (
          <>
            <TargetBox
              condition={!isListClicked1 && target.person1}
              isNextTriger={target.onMouseDown ? true : false}
              onMouseDown={target.onMouseDown ? () => {} : null}>
              <CheckBox
                style={{
                  padding: "4px 4px",
                  backgroundColor: "white",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                }}
                setIsChecked={setIsChecked1}
                isChecked={isChecked1}>
                <StackedList_Profile
                  style={{
                    width: "150px",
                  }}
                  profile={{
                    name: "telephone-outbound-fill",
                    style: { color: "rgb(21 128 61)" },
                  }}
                  title={{ content: "영희" }}
                  info={{
                    content: "오후 7:38",
                  }}
                  onClick={showListOption1}></StackedList_Profile>
              </CheckBox>
            </TargetBox>
            <TargetBox
              condition={!isListClicked2 && target.person2}
              isNextTriger={target.onMouseDown ? true : false}
              onMouseDown={target.onMouseDown ? () => {} : null}>
              <CheckBox
                style={{
                  padding: "4px 4px",
                  backgroundColor: "white",
                  borderTopLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: !isListClicked2 ? "12px" : "0px",
                  borderBottomRightRadius: !isListClicked2 ? "12px" : "0px",
                  borderTop: "1px solid rgb(233,233,233)",
                }}
                setIsChecked={setIsChecked2}
                isChecked={isChecked2}>
                <StackedList_Profile
                  style={{
                    width: "150px",
                  }}
                  profile={{
                    name: "telephone-outbound-fill",
                    style: { color: "rgb(21 128 61)" },
                  }}
                  title={{
                    content: "철수",
                  }}
                  info={{
                    content: "오후 5:20",
                  }}
                  onClick={showListOption2}></StackedList_Profile>
              </CheckBox>
            </TargetBox>
          </>
        )}
      </StackedListWrap>
      {open.selectMode && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            width: "175px",
            marginTop: "74px",
            background: "white",
            boxShadow: "0 0 8px -1px rgba(118, 118, 118, 0.335)",
          }}>
          <TargetBox condition={isChecked1}>
            <IconBottom
              icon={{ name: "trash" }}
              description={{
                content: isChecked1 && isChecked2 ? "모두 삭제" : "삭제",
                style: { fontSize: "10px" },
              }}
            />
          </TargetBox>
        </div>
      )}
    </>
  );
};

export default Histories;
