import Icon from "@/components/phone/atoms/icon";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";

const OpenChatTab = () => {
  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">오픈채팅</div>]}
        rightItem={[
          <Icon name="plus-circle" className="text-sm " />,
          <Icon name="chat" className="ml-1 text-sm" />,
          <Icon name="gear" className="ml-1 text-sm" />,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default OpenChatTab;
