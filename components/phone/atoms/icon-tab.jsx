import styled from "@emotion/styled";
import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import Icon from "@/components/phone/atoms/icon";

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

const IconTab = ({ items, style, setClickedTab, targetTab, clickedTab }) => {
  return (
    <Container style={style}>
      {items?.map((item, i) => (
        <TargetContent
          targetOption={targetTab === item.id && clickedTab !== item.id}
          key={`tab${i}`}
          onClick={() => setClickedTab(item.id)}>
          {clickedTab === item.id ? (
            <Icon
              name={item.clicked}
              style={{ ...item.style, padding: "4px" }}
            />
          ) : (
            <Icon
              name={item.content}
              style={{ ...item.style, padding: "4px" }}
            />
          )}
        </TargetContent>
      ))}
    </Container>
  );
};
export default IconTab;
