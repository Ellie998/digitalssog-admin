import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: ${(props) =>
    props.style.marginTop ? props.style.marginTop : "1.25rem"};
  text-align: center;
  vertical-align: middle;
  ${(props) => (props.style ? props.style : null)}
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
  ${(props) => (props.style ? props.style : null)}
`;

const SubTitle = styled.div`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  color: rgb(156 163 175);
  ${(props) => (props.style ? props.style : null)}
`;

const Top = ({
  title,
  subTitle,
  childrenTop,
  children,
  style = { marginTop: "1.25rem" },
}) => {
  return (
    <Container style={style}>
      {childrenTop}
      {title && <Title style={title.style}>{title.content}</Title>}
      {subTitle && (
        <SubTitle style={subTitle.style}>{subTitle.content}</SubTitle>
      )}
      {children}
    </Container>
  );
};
export default Top;
