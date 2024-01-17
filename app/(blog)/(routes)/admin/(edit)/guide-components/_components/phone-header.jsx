import Icon from "stories/phone/atoms/Icon/index";
import Flex from "stories/phone/atoms/Flex/index";

const PhoneHeader = ({ backgroundColor = "white" }) => {
  return (
    <Flex
      style={{
        width: "175px",
        backgroundColor: backgroundColor,
        paddingRight: "5px",
      }}
      items={[
        <Icon key="left" name={"brightness-high"} />,
        <Flex
          key="right"
          items={[
            <Icon key="battery" name="battery-full" />,
            <div key="time">9:54</div>,
          ]}
        />,
      ]}></Flex>
  );
};

export default PhoneHeader;
