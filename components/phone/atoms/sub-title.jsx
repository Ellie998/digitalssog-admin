import styled from "@emotion/styled";

const Container = styled.div`
  line-height: 1rem /* 16px */;
  font-size: 0.75rem;
  margin-left: 0.5rem /* 8px */;
  color: rgb(133, 133, 133);
  text-align: start;
  ${(props) => (props.style ? props.style : null)}
`;

const SubTitle = ({ children, style }) => {
  return (
    <Container style={style} id="display_subTitle">
      {children}
    </Container>
  );
};

export default SubTitle;
