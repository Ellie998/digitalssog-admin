import styled from "@emotion/styled";

const Container = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: ${(props) => (props.height ? props.height : "auto")};
  ${(props) => (props.style ? props.style : null)};
`;

export default function NoScrollBar({
  className,
  children,
  height,
  onClick,
  style,
}) {
  return (
    <Container
      onClick={onClick}
      id="NoScrollBar"
      className={` ${className}`}
      height={height}
      style={style}>
      {children}
    </Container>
  );
}
