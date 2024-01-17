import Tab from "@/components/phone/atoms/tab";

const CallTab = ({ targetTab, clickedTapName, setClickedTapName }) => {
  return (
    <Tab
      items={[{ id: "키패드" }, { id: "최근기록" }, { id: "연락처" }]}
      targetTab={targetTab}
      clickedTab={clickedTapName}
      setClickedTab={setClickedTapName}
      clickedColor="rgb(22, 163, 74)"
      clickEvent="underBar"
    />
  );
};

export default CallTab;
