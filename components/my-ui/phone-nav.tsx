import { BsChevronDoubleLeft, BsList, BsSquare } from "react-icons/bs";
import Flex from "../phone-ui/flex";

function PhoneNav() {
  return (
    <div
      style={{
        width: "170px",
        zIndex: "10",
        fontSize: "0.7rem",
        gridRow: "5/6",
        padding: "0 10px",
      }}>
      <Flex
        items={[
          <BsList key="list" />,
          <BsSquare key="home" />,
          <BsChevronDoubleLeft key="back" />,
        ]}
        children={undefined}
      />
    </div>
  );
}

export default PhoneNav;
