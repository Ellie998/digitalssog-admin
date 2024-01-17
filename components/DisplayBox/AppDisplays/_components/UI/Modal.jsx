import styled from "@emotion/styled";
import TargetBox from "@/components/phone/atoms/target-box";

const Container = styled.div`
  position: absolute;
  animation: opacity0to100 0.5s;
  z-index: 100;
`;
const ModalContainer = styled.div`
  width: 150px;
  height: max-content;
  position: absolute;
  padding: 10px;
  z-index: 100;
  border-radius: 4px;

  left: 10px;
`;

export default function Modal({
  style,
  onClickBackDrop,
  children,
  modalStyle,
}) {
  return (
    <Container className={`modalWrap`} style={style}>
      <TargetBox
        style={{
          backgroundColor: "#2a2a2a6a",
          width: "175px",
          height: "305px",
          position: "absolute",
        }}
        onClick={onClickBackDrop}
        isBackTriger={true}
        isNextTriger={false}></TargetBox>
      <ModalContainer className={`modal`} style={modalStyle}>
        {children}
      </ModalContainer>
    </Container>
  );
}
