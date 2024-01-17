import styled from "@emotion/styled";

const Container = styled.div`
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  margin-left: 0.5rem /* 8px */;
  color: rgb(38 38 38);
  text-align: start;
  font-weight: bold;
  ${(props) => (props.style ? props.style : null)}
`;

const Title = ({ children, style }) => {
  return (
    <Container id="display_title" style={style}>
      {children}
    </Container>
  );
};

export default Title;
