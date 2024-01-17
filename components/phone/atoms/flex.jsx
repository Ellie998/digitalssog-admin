import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  width: ${(props) => (props.style.width ? props.style.width : "100%")};
  ${(props) => props.style}
`;

const FlexItem = styled.div`
  margin-left: 0.25rem /* 4px */;
`;

const Flex = ({ items, style = { width: "100%" }, children }) => {
  return (
    <>
      <Container style={style}>
        {items?.map((item, i) => (
          <FlexItem key={`flexItem${i}`}>{item}</FlexItem>
        ))}
      </Container>
      {children}
    </>
  );
};
export default Flex;
