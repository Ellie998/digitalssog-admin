import styled from "@emotion/styled";

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  animation: fadeInDown 0.5s;

  @keyframes fadeInDown {
    0% {
      opacity: 0.5;
      transform: translate3d(0, -10px, 0);
    }
    90% {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
  ${(props) => (props.style ? props.style : null)}
`;

const TitleContainer = styled.div`
  font-size: 0.5rem /* 8px */;
  font-weight: 700;
  ${(props) => (props.style ? props.style : null)}
`;
const SubTitleContainer = styled.div`
  font-size: 0.5rem /* 8px */;
  font-weight: 700;
  ${(props) => (props.style ? props.style : null)}
`;

export default function ListOption({
  title,
  subTitle,
  onClick,
  children,
  style,
}) {
  return (
    <Container onClick={onClick} style={style}>
      {/* title */}
      {title !== undefined && (
        <TitleContainer style={title.style}>{title.content}</TitleContainer>
      )}
      {/* subTitle */}
      {subTitle !== undefined && (
        <SubTitleContainer style={subTitle.style}>
          {subTitle.content}
        </SubTitleContainer>
      )}
      {children}
    </Container>
  );
}
