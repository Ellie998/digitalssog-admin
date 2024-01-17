import Icon from "@/components/phone/atoms/icon";
import Flex from "@/components/phone/atoms/flex";

const Header = ({ backgroundColor = "white" }) => {
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

export default Header;
