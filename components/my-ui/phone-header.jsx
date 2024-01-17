import Flex from "@/components/phone-ui/flex";
import { BsBatteryFull, BsBrightnessHigh } from "react-icons/bs";
const Header = ({ backgroundColor = "white" }) => {
  return (
    <Flex
      style={{
        width: "175px",
        backgroundColor: backgroundColor,
        paddingRight: "5px",
      }}
      items={[
        <BsBrightnessHigh key="left" />,
        <Flex
          key="right"
          items={[<BsBatteryFull key="battery" />, <div key="time">9:54</div>]}
        />,
      ]}></Flex>
  );
};

export default Header;
