import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  vertical-align: middle;
  align-items: center;
  grid-template-columns: repeat(3, 57px);
  ${(props) => props.style}
`;
const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const FlexItem = styled.div`
  margin-left: 0.25rem /* 4px */;
`;

const FlexInFlex = ({
  leftItem,
  centerItem,
  rightItem,
  children,
  onClick,
  style,
  flexStyle,
}) => {
  return (
    <>
      <Container style={style} onClick={onClick}>
        {/* left item */}
        <FlexContainer style={flexStyle}>
          {leftItem?.map((item, i) => (
            <FlexItem key={`left${i}`}>{item}</FlexItem>
          ))}
        </FlexContainer>
        {/* mid item */}
        <FlexContainer style={flexStyle}>
          {centerItem?.map((item, i) => (
            <div key={`center${i}`}>{item}</div>
          ))}
        </FlexContainer>
        {/* right item */}
        <FlexContainer style={flexStyle}>
          {rightItem?.map((item, i) => (
            <FlexItem key={`right${i}`}>{item}</FlexItem>
          ))}
        </FlexContainer>
      </Container>
      {children}
    </>
  );
};
export default FlexInFlex;
