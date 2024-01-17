import styled from "@emotion/styled";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.label`
  display: flex;
  background-color: rgb(250, 235, 215);
  cursor: pointer;
`;

const InputContainer = styled.input`
  display: block;
  cursor: pointer;
  margin-top: 4px;
  margin-bottom: auto;
  margin-left: 2px;
`;

const ImgSelectBox = ({
  style = { width: "48px", height: "48px" },
  onChangeHandler,
  onIconClickHandler,
  onMouseDown,
  choicedImgs,
  icon = { style: {}, name: "arrows-fullscreen" },
  id,
}) => {
  return (
    <Container
      htmlFor={`box${id}`}
      style={style}
      onChange={onChangeHandler}
      onMouseDown={(e) => {
        setTimeout(() => {
          onMouseDown(e);
        }, 1000);
      }}>
      <InputContainer
        type="checkbox"
        id={`box${id}`}
        checked={choicedImgs?.includes(`box${id}`) ? true : false}
        readOnly></InputContainer>
      <Icon
        id={`box${id}_icon`}
        onClick={onIconClickHandler}
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
          marginLeft: "auto",
          marginBottom: "4px",
          marginTop: "auto",
          marginRight: "4px",
          ...icon.style,
        }}
      />
    </Container>
  );
};
export default ImgSelectBox;
