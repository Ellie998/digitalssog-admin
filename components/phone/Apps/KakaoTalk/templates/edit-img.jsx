import styled from "@emotion/styled";
import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";

import Flex from "@/components/phone/atoms/flex";
import Icon from "@/components/phone/atoms/icon";
import TargetBox from "@/components/phone/atoms/target-box";
import Phone from "@/components/phone/molecules/phone";

const ImgContainer = styled.div`
  width: 175px;
  height: 175px;
  background-color: antiquewhite;
  margin: 30px 0;
`;

const EditImg = ({ target = { submit: false } }) => {
  return (
    <Phone backgroundColor={"rgb(32, 32, 32)"}>
      <Flex
        items={[
          <BackBtn key="1" style={{ color: "white" }} />,
          <TargetBox
            key="2"
            style={{ color: "white" }}
            condition={target.submit}>
            확인
          </TargetBox>,
        ]}
      />
      <ImgContainer />
      <Flex
        style={{ padding: "5px" }}
        items={[
          <Icon key="1" name="magic" style={{ color: "white" }} />,
          <Icon
            key="2"
            name="bounding-box-circles"
            style={{ color: "white" }}
          />,
          <Icon key="3" name="arrow-repeat" style={{ color: "white" }} />,
          <Icon key="4" name="fonts" style={{ color: "white" }} />,
          <Icon key="5" name="emoji-smile" style={{ color: "white" }} />,
          <Icon key="6" name="pencil-square" style={{ color: "white" }} />,
        ]}
      />
    </Phone>
  );
};

export default EditImg;
