import styled from "@emotion/styled";

const IconContainer = styled.i`
  font-style: normal;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 999px;
  padding: ${(props) => (props.style.padding ? props.style.padding : "2px")};
  font-size: ${(props) =>
    props.style.fontSize ? props.style.fontSize : "0.875rem"};
  &:hover {
    ${(props) => (props.style.hover ? props.style.hover : null)}
  }
  ${(props) => (props.style ? props.style : null)}
`;

const Icon = ({
  id,
  name,
  content,
  style = { fontSize: "0.875rem", padding: "2px" },
  onClick,
}) => {
  return (
    <IconContainer
      style={style}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}`}>
      {content}
    </IconContainer>
  );
};
export default Icon;
