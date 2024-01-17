import styled from "@emotion/styled";
import Modal from "@/components/DisplayBox/AppDisplays/_components/UI/Modal";
import Flex from "@/components/phone/atoms/flex";
import Icon from "@/components/phone/atoms/icon";

import TargetBox from "@/components/phone/atoms/target-box";

const Container = styled.div`
  background-color: white;
  box-shadow: 0 8px 8px rgba(184, 184, 184, 0.473);
  border-radius: 4px;
  font-size: 0.8rem;
  width: 140px;
  padding: 5px 5px;
  position: relative;
  top: 5px;
  z-index: 500;
`;

const OptionContainer = styled.div`
  margin-bottom: 5px;
  padding: 0 5px;
  &:hover {
    background-color: rgb(233, 233, 233, 0.9);
  }
`;

const ChatContentOptionModal = ({
  onClickBackDrop,
  closeChatOption,
  target = { resend: false, delete: false },
}) => {
  return (
    <Modal onClickBackDrop={onClickBackDrop}>
      <Container>
        <Flex
          style={{ width: "125px", padding: "2px 0", margin: "2px 0" }}
          items={[
            <Icon
              key="1"
              name="heart-fill"
              style={{
                fontSize: "8px",
                backgroundColor: "hotpink",
                color: "white",
                padding: "3px",
                marginLeft: "0",
              }}
            />,
            <Icon
              key="1"
              name="hand-thumbs-up-fill"
              style={{
                fontSize: "8px",
                backgroundColor: "rgb(132, 0, 255)",
                color: "white",
                padding: "3px",
                marginLeft: "0",
              }}
            />,
            <Icon
              key="1"
              name="check-lg"
              style={{
                fontSize: "8px",
                backgroundColor: "rgb(0, 110, 255)",
                color: "white",
                padding: "3px",
                marginLeft: "0",
                fontWeight: "bold",
              }}
            />,
            <Icon
              key="1"
              name="emoji-laughing"
              style={{
                fontSize: "18px",
                backgroundColor: "rgb(255, 216, 19)",
                color: "black",
                marginLeft: "0",
              }}
            />,
            <Icon
              key="1"
              name="emoji-dizzy"
              style={{
                fontSize: "18px",
                backgroundColor: "rgb(255, 216, 19)",
                color: "black",

                marginLeft: "0",
              }}
            />,
            <Icon
              key="1"
              name="emoji-frown"
              style={{
                fontSize: "18px",
                backgroundColor: "rgb(255, 216, 19)",
                color: "black",

                marginLeft: "0",
              }}
            />,
          ]}
        />

        <OptionContainer>복사</OptionContainer>
        <OptionContainer>선택 복사</OptionContainer>
        <OptionContainer>
          <TargetBox
            onClick={closeChatOption}
            condition={target.delete}
            style={{ width: "100%" }}>
            삭제
          </TargetBox>
        </OptionContainer>
        <OptionContainer>답장</OptionContainer>
        <OptionContainer>
          <TargetBox
            onClick={closeChatOption}
            condition={target.resend}
            style={{ width: "100%" }}>
            전달
          </TargetBox>
        </OptionContainer>

        <OptionContainer>외부 공유</OptionContainer>
        <OptionContainer>나에게</OptionContainer>
        <OptionContainer>공지</OptionContainer>
        <OptionContainer>책갈피 설정</OptionContainer>
        <OptionContainer>캡처</OptionContainer>
      </Container>
    </Modal>
  );
};

export default ChatContentOptionModal;
