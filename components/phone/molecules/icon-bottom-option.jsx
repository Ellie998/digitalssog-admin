/* eslint-disable no-unused-vars */

import styled from "@emotion/styled";

import IconBottom from "./icon-bottom";
import TargetBox from "@/components/phone/atoms/target-box";

const Container = styled.div`
  ${(props) => (props.style ? props.style : null)}
`;
const OptionContainer = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;
  font-size: 0.8rem;
  text-align: left;
  border-radius: 12px;
  top: 110px;
  left: 50px;
  box-shadow: 0 0 6px rgba(1, 1, 1, 0.378);
  padding: 10px;
  width: max-content;
  height: max-content;
  animation: opacity0to100Pure 0.5s;

  ${(props) => null || props.style};
`;

const IconBottom_Option = ({
  icon,
  description,
  style,
  onClick,
  children,
  target = { condition: false, isNextTriger: false },
}) => {
  return (
    <Container style={style} onClick={onClick} id="icon_bottom_option">
      <TargetBox
        condition={target.condition}
        isNextTriger={target.isNextTriger}>
        <IconBottom
          style={{ width: "40px" }}
          icon={{
            name: null || icon.name,
            content: null || icon.content,
            style: {
              backgroundColor: icon.backgroundColor,
              color: icon.color,
              fontSize: "1rem",
              padding: "4px",
              width: "24px",
              height: "24px",
              fontWeight: "bold",
              boxShadow: "0 0 2px rgb(91, 91, 91)",
            },
          }}
          description={{
            content: description,
            style: { fontSize: "10px" },
          }}></IconBottom>
      </TargetBox>
      {children && <OptionContainer style={style}>{children}</OptionContainer>}
    </Container>
  );
};

export default IconBottom_Option;
