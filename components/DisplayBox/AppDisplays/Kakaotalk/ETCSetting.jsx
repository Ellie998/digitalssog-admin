import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import StackedList_Profile from "@/components/DisplayBox/AppDisplays/_components/list/StackedList_Profile";

import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";

import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";

import StackedListWrap from "@/components/DisplayBox/AppDisplays/_components/list/StackedListWrap";

function ETCSetting({ target_lab, target_backBtn }) {
  const settingMenuContents1 = [
    // 개인/보안
    {
      profile: "lock",
      title: "개인/보안",
    },
    // 친구
    {
      profile: "person",
      title: "친구",
    },
    // 알림
    {
      profile: "bell",
      title: "알림",
    },
    // 화면
    {
      profile: "brightness-low",
      title: "화면",
    },
    // 기본테마
    {
      profile: "palette",
      title: "기본테마",
    },
    // 채팅
    {
      profile: "chat",
      title: "채팅",
    },
    // 통화
    {
      profile: "telephone",
      title: "통화",
    },
    // 언어
    {
      profile: "globe",
      title: "언어",
      subTitle: "시스템 기본 언어",
    },
    // 실험실
    {
      targetOption: target_lab,
      profile: "lightbulb",
      title: "실험실",
    },
    // 기타
    {
      profile: "three-dots",
      title: "기타",
    },
  ];
  const settingMenuContents2 = [
    // 공지사항
    {
      profile: "megaphone",
      title: "공지사항",
    },
    // 카톡 안녕 가이드
    {
      profile: "emoji-smile",
      title: "카톡 안녕 가이드",
    },

    // 고객센터/운영정책
    {
      profile: "question-circle",
      title: "고객센터/운영정책",
    },

    // 언어
    {
      profile: "globe",
      title: "앱 관리",
      subTitle: "10.2.8",
    },
  ];

  return (
    <NoScrollBar height="305px">
      {/* setting page */}

      <>
        <AppHeader
          leftItem={[
            <BackBtn
              targetOption={target_backBtn}
              isNavTriger={true}
              onClick={() => {}}></BackBtn>,
            "설정",
          ]}
        />
        {/* 나 */}
        <StackedListWrap>
          <StackedList_Profile
            className="h-8"
            profile={{
              className: "bg-kakaoPurple ",
              content: <i className="text-white bi bi-person-fill"></i>,
            }}
            title={{
              className: "ml-2",
              content: "나",
            }}
            info={{
              className: "borderGray",
              content: "프로필 관리",
            }}
            subTitle={{
              className: "col-end-7 ml-2",
              content: "+82 10-0000-0000",
            }}
            subInfo={{}}></StackedList_Profile>
        </StackedListWrap>
        {/*  settingMenuContents1 */}
        <StackedListWrap>
          {settingMenuContents1?.map((menu, i) => (
            <TargetContent
              key={i}
              isNextDescriptionLink
              targetOption={menu.targetOption}
              onClick={menu.onClick}>
              <StackedList_Profile
                className="h-10 hover:bg-gray-100"
                profile={{
                  className: "",
                  content: (
                    <i className={`text-base bi bi-${menu.profile}`}></i>
                  ),
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: menu.title,
                }}
                subTitle={
                  menu.subTitle
                    ? { content: menu.subTitle, className: "ml-2" }
                    : undefined
                }></StackedList_Profile>
            </TargetContent>
          ))}
        </StackedListWrap>
        {/*  settingMenuContents2 */}
        <StackedListWrap>
          {settingMenuContents2?.map((menu, i) => (
            <TargetContent
              key={i}
              targetOption={menu.targetOption}
              onClick={menu.onClick}>
              <StackedList_Profile
                className="h-10 hover:bg-gray-100"
                profile={{
                  className: "",
                  content: (
                    <i className={`text-base bi bi-${menu.profile}`}></i>
                  ),
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: menu.title,
                }}
                subTitle={
                  menu.subTitle
                    ? { content: menu.subTitle, className: "ml-2" }
                    : undefined
                }></StackedList_Profile>
            </TargetContent>
          ))}
        </StackedListWrap>
      </>
    </NoScrollBar>
  );
}

export default ETCSetting;
