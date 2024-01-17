import Grid_4x4 from "@/components/DisplayBox/AppDisplays/_components/layout/Grid_4x4";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";

const ChatOptionBox = ({
  target = {
    reserveMessage: false,
    sendImg: false,
    sendAudio: false,
    sendPhoneNum: false,
    option_call: false,
    gallery: false,
  },
}) => {
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
      targetOption: target.gallery,
      isNextDescriptionLink: true,
      content: "앨범",
      iconName: "image",
      backgroundColor: "#9bcb5c",
      color: "white",
    },
    {
      content: "카메라",
      iconName: "camera",
      backgroundColor: "#668ecf",
      color: "white",
    },
    {
      content: "선물하기",
      iconName: "box2-heart",
      backgroundColor: "#53c575",
      color: "white",
    },
    {
      targetOption: target.option_call,
      isNextDescriptionLink: true,
      content: "통화하기",
      iconName: "telephone-fill",
      backgroundColor: "#ef666c",
      color: "white",
    },
    {
      content: "송금",
      iconName: "cash-coin",
      backgroundColor: "#58606b",
      color: "white",
    },
    {
      targetOption: target.reserveMessage,
      isNextDescriptionLink: true,
      content: "예약 메시지",
      iconName: "stopwatch",
      backgroundColor: "#907bee",
      color: "white",
    },
    {
      content: "일정",
      iconName: "calendar-date",
      backgroundColor: "#bd9e83",
      color: "white",
    },
    {
      targetOption: target.sendImg,
      isNextDescriptionLink: true,
      content: "지도",
      iconName: "geo-alt",
      backgroundColor: "#4ea6f3",
      color: "white",
    },
    {
      content: "캡처",
      iconName: "fullscreen",
      backgroundColor: "#51b59f",
      color: "white",
    },
    {
      targetOption: target.sendAudio,
      isNextDescriptionLink: true,
      content: "음성메시지",
      iconName: "mic",
      backgroundColor: "#f79955",
      color: "white",
    },
    {
      targetOption: target.sendPhoneNum,
      isNextDescriptionLink: true,
      content: "연락처",
      iconName: "person-badge",
      backgroundColor: "#d68fe5",
      color: "white",
    },
    {
      content: "파일",
      iconName: "paperclip",
      backgroundColor: "#6696f6",
      color: "white",
    },
    {
      content: "뮤직",
      iconName: "music-note-beamed",
      backgroundColor: "#78be80",
      color: "white",
    },
    {
      content: "라이브톡",
      iconName: "broadcast-pin",
      backgroundColor: "#dd4453",
      color: "white",
    },
  ];

  return (
    <NoScrollbar height={"120px"}>
      <Grid_4x4
        className={"bg-[#efefef3e]"}
        items={gridContent}
        iconClassName_common={`rounded-full p-[6px] text-white `}
        iconClassName={iconClassName}
      />
    </NoScrollbar>
  );
};

export default ChatOptionBox;
