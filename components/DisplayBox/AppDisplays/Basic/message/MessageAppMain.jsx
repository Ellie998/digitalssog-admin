import { useState } from "react";

import { NoScrollBar } from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import { AppTitle_center } from "components/DisplayBox/AppDisplays/components/layout/AppTitle_center";
import { TargetContent } from "components/DisplayBox/AppDisplays/components/TargetContent";
import { Button } from "components/DisplayBox/AppDisplays/components/UI/Button";
import { AppHeader } from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import { StackedList_Profile } from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import BlurModal from "components/DisplayBox/AppDisplays/components/UI/BlurModal";
import { FlexContent } from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import { Icon } from "stories/phone/atoms/Icon";

function MessageAppMain({
  target_sendMessage,
  target_seeMessage,
  target_unreadMessage,
}) {
  const [isOptionOpened, setIsOptionOpened] = useState(false);
  const iconStyle =
    " rounded-full px-1 py-1  cursor-pointer hover:shadow-sm hover:bg-gray-200";
  const iconStyleShadow = "rounded-full shadow-md  border-1 drop-shadow-2xl ";

  return (
    <>
      <NoScrollBar height={`${!isOptionOpened ? "305px" : "374px"}`}>
        {/* title : message */}
        {(target_sendMessage || target_seeMessage) && (
          <AppTitle_center title={{ content: "Messages" }}></AppTitle_center>
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
        <AppHeader
          rightItem={[
            <Icon name="funnel-fill" className={`${iconStyle} text-sm`} />,
            <Icon name="search" className={`${iconStyle} text-sm`} />,
            <Icon
              name="three-dots-vertical"
              className={`${iconStyle} text-sm`}
            />,
          ]}></AppHeader>
        <AppHeader
          leftItem={[
            <div className="underline cursor-pointer underline-offset-4">
              전체
            </div>,
            <Icon name="plus" className={`${iconStyle}`} />,
          ]}></AppHeader>
        {/* message */}
        <TargetContent
          targetOption={target_seeMessage}
          isNextDescriptionLink={true}>
          <StackedList_Profile
            profile={{ className: "bg-gray-200", content: "홍" }}
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
              className:
                target_seeMessage || target_unreadMessage
                  ? "alert--yellow"
                  : "",
              content: target_seeMessage || target_unreadMessage ? "1" : "",
            }}></StackedList_Profile>
        </TargetContent>
        {/* message plus btn */}
        {!isOptionOpened && (
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
      {isOptionOpened && (
        <>
          <BlurModal
            className={`left-[30%] bottom-8`}
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
        </>
      )}
    </>
  );
}

export default MessageAppMain;
