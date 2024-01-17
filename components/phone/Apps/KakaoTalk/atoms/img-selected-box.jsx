import styled from "@emotion/styled";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.label`
  display: flex;
  background-color: rgb(250, 235, 215);
  cursor: pointer;
`;

const ImgSelectedBox = ({
  style = { width: "38px", height: "38px" },
  onClick,

  id,
  icon = { name: "x" },
}) => {
  return (
    <Container style={style} onClick={onClick} id={`choiced_${id}`}>
      <Icon
        id={`choiced_${id}`}
        name={icon.name}
        style={{
          borderRadius: "4px",
          maxWidth: "fit-content",
          maxHeight: "fit-content",
          padding: "3px",
          fontSize: "0.5rem",
          width: "20px",
          height: "15px",
          color: "white",
          backgroundColor: "rgba(70, 70, 70, 0.328)",
          marginBottom: "auto",
          marginTop: "-4px",
          marginLeft: "auto",
          marginRight: "-2px",
          ...icon.style,
        }}
      />
    </Container>
  );
};
export default ImgSelectedBox;
