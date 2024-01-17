import { useState } from "react";

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import Phone from "@/components/phone/molecules/phone";
import Icon from "@/components/phone/atoms/icon";
import TargetBox from "@/components/phone/atoms/target-box";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";
import SearchInput from "@/components/phone/Apps/KakaoTalk/atoms/search-input";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

function SelectPerson({
  header = "대화상대 초대",
  target = { person2: false, twoPerson: false },
}) {
  const [isPerson2Clicked, setIsPerson2Clicked] = useState(false);
  const [isTwoPerson1Clicked, setIsTwoPerson1Clicked] = useState(false);
  const [isTwoPerson2Clicked, setIsTwoPerson2Clicked] = useState(false);

  const friendListContents1 = [
    <StackedList_Profile
      key="younghee"
      onClick={() => {}}
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "영희", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person1" />,
      }}
    />,
    <TargetBox
      key="cherlsu"
      condition={!isPerson2Clicked && target.person2}
      isNextTriger={false}>
      <StackedList_Profile
        key="cherlsu"
        profile={{
          style: { backgroundColor: "var(--kakao-blue)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "철수", className: "" }}
        info={{
          content: <input type="checkbox" name="group" id="person2" />,
        }}
      />
    </TargetBox>,
  ];
  const friendListContents2 = [
    <StackedList_Profile
      onClick={() => {}}
      key="jiye"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "김지예", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person3" />,
      }}
    />,
    <TargetBox
      key="ceo"
      condition={!isTwoPerson1Clicked && target.twoPerson}
      isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-purple)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "사장님", className: "" }}
        info={{
          content: <input type="checkbox" name="group" id="person4" />,
        }}
      />
    </TargetBox>,
    <TargetBox
      key="daeri"
      condition={!isTwoPerson2Clicked && target.twoPerson}
      isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-blue)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "김대리", className: "" }}
        info={{
          content: <input type="checkbox" name="group" id="person5" />,
        }}
      />
    </TargetBox>,
  ];
  return (
    <Phone>
      {/* 305px */}
      <NoScrollbar>
        <StackedList_Profile
          profile={{
            content: <Icon name="arrow-left" />,
          }}
          title={{
            content: header,
            style: { fontWeight: "bold" },
          }}
          info={{
            content: (
              <TargetBox
                style={{
                  color:
                    (target.twoPerson &&
                      isTwoPerson1Clicked &&
                      isTwoPerson2Clicked) ||
                    (target.person2 && isPerson2Clicked)
                      ? "rgb(23,23,23)"
                      : "rgb(143, 143, 143)",
                  marginLeft: "auto",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
                condition={
                  (target.twoPerson &&
                    isTwoPerson1Clicked &&
                    isTwoPerson2Clicked) ||
                  (target.person2 && isPerson2Clicked)
                }>
                확인
              </TargetBox>
            ),
          }}
        />

        <SearchInput
          placeholder={"이름(초성), 전화번호 검색"}
          style={{
            display: "block",
            margin: "0 auto",
            width: "160px",
            backgroundColor: "rgb(239, 239, 239)",
            borderRadius: "4px",
            padding: "4px 12px",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        />

        <StackedListWrap listTitle={{ content: "즐겨찾기" }}>
          {friendListContents1.map((list, i) => (
            <label
              key={i}
              htmlFor={`person${i + 1}`}
              onChange={() => {
                i === 1 &&
                  target.person2 &&
                  setIsPerson2Clicked(!isPerson2Clicked);
              }}>
              {list}
            </label>
          ))}
        </StackedListWrap>
        <StackedListWrap
          listTitle={{ content: "친구" }}
          style={{ borderBottom: "none" }}>
          {friendListContents2.map((list, i) => (
            <label
              key={i}
              htmlFor={`person${i + 3}`}
              onChange={() => {
                i === 1 &&
                  target.twoPerson &&
                  setIsTwoPerson1Clicked(!isTwoPerson1Clicked);
                i === 2 &&
                  target.twoPerson &&
                  setIsTwoPerson2Clicked(!isTwoPerson2Clicked);
              }}>
              {list}
            </label>
          ))}
        </StackedListWrap>
      </NoScrollbar>
    </Phone>
  );
}

export default SelectPerson;
