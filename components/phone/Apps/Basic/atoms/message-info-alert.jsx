import styled from "@emotion/styled";

const Container = styled.div`
  color: rgb(255 255 255);
  font-weight: 700;
  background-color: rgb(249, 115, 22);
  width: 1rem /* 16px */;
  border-radius: 9999px;
  text-align: center;
  margin-left: auto;
`;

const MessageInfoAlert = ({ style, children }) => {
  return <Container style={style}>{children}</Container>;
};
export default MessageInfoAlert;
