import styled from "@emotion/styled";
import Modal from "@/components/phone/molecules/modal";

const Container = styled.div`
  padding: 0.25rem /* 4px */;
  background-color: rgb(255 255 255);
  border-radius: 0.125rem /* 2px */;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
`;

const ModalBar = styled.div`
  background-color: rgb(209 213 219);
  width: 20px;
  height: 0.125rem /* 2px */;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.25rem /* 4px */;
  border-radius: 0.125rem /* 2px */;
`;

const Modal_downUp = ({ children, onClickBackDrop, top = "92px" }) => {
  return (
    <Modal
      onClickBackDrop={onClickBackDrop}
      modalStyle={{
        top: top,
        backgroundColor: "rgb(243 244 246)",
        width: "175px",
        height: "max-content",
        padding: "5px 10px 10px 10px",
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
        left: "0px",
      }}>
      <ModalBar></ModalBar>
      <Container>{children}</Container>
    </Modal>
  );
};

export default Modal_downUp;
