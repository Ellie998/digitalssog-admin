import styled from "@emotion/styled";
import Title from "@/components/phone/atoms/title";
import SubTitle from "@/components/phone/atoms/sub-title";

const Container = styled.div`
  ${(props) => (props.style ? props.style : null)}
`;

const BtnsContainer = styled.div`
  display: flex;
  ${(props) => (props.style ? props.style : null)}
`;

export default function ModalContents({
  title = { style: {}, content: null },
  subTitle = { style: {}, content: null },
  children,
  buttons = { content: [], style: {} },
  style,
}) {
  return (
    <Container style={style}>
      <Title style={title.style}>{title.content}</Title>
      <SubTitle style={subTitle.style}>{subTitle.content}</SubTitle>
      {children}
      {buttons && (
        <BtnsContainer style={buttons.style}>
          {buttons.content?.map((item) => (
            <div key={`modal_btn_${Math.random()}`}>{item}</div>
          ))}
        </BtnsContainer>
      )}
    </Container>
  );
}

// kakao cancel text color text-blue-600
