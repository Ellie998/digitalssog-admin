import styled from "@emotion/styled";

import classes from "./tab.module.css";
import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";

const Container = styled.div`
  display: flex;
  height: 2rem /* 32px */;
  justify-content: space-around;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  align-items: center;
  transition-delay: 500ms;
  padding-top: 0.5rem /* 8px */;
  padding-bottom: 0.5rem /* 8px */;
  ${(props) => props.style};
`;

const Tab = ({
  items,
  style,
  setClickedTab,
  targetTab,
  clickedTab,
  clickEvent,
  clickedColor,
}) => {
  return (
    <Container style={style}>
      {items?.map((item, i) => (
        <TargetContent
          targetOption={targetTab === item.id && clickedTab !== item.id}
          key={`tab${i}`}
          className={clickedTab === item.id ? classes[clickEvent] : ""}
          onClick={() => {
            setClickedTab(item.id);
          }}
          style={clickedTab === item.id ? { color: clickedColor } : null}>
          {clickedTab === item.id
            ? item.clicked
              ? item.clicked
              : item.content
              ? item.content
              : item.id
            : item.content
            ? item.content
            : item.id}
        </TargetContent>
      ))}
    </Container>
  );
};
export default Tab;
