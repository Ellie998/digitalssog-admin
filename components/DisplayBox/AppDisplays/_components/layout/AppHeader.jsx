import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  margin-right: 0.25rem /* 4px */;
  ${(props) => (props.style ? props.style : null)}
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function AppHeader({
  className,
  leftItem,
  midItem,
  rightItem,
  children,
  onClick,
  style,
}) {
  return (
    <>
      <Container style={style} className={className} onClick={onClick}>
        {/* left item */}
        <FlexContainer>
          {leftItem?.map((item, i) => (
            <div key={i} style={{ marginLeft: "4px" }}>
              {item}
            </div>
          ))}
        </FlexContainer>
        {/* mid item */}
        <FlexContainer>
          {midItem?.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </FlexContainer>
        {/* right item */}
        <FlexContainer>
          {rightItem?.map((item, i) => (
            <div key={i} style={{ marginRight: "4px" }}>
              {item}
            </div>
          ))}
        </FlexContainer>
      </Container>
      {children}
    </>
  );
}
