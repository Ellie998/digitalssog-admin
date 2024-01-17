import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  text-align: center;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 34px;
`;

const KeypadLine = ({ items }) => {
  return (
    <Container>
      {items?.map((item) => (
        <ItemContainer key={item}>{item}</ItemContainer>
      ))}
    </Container>
  );
};
export default KeypadLine;
