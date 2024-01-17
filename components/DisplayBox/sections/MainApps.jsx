import styled from "@emotion/styled";
import AppLine from "stories/phone/molecules/AppLine";

const Container = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: repeat(8, 37px);
  font-size: 0.8rem;
  align-self: center;
  padding: 0 5px;
`;

const MainApps = ({ kakaotalk, call, message }) => {
  return (
    <Container>
      <AppLine />
      <AppLine />
      <AppLine />
      <AppLine />
      {/*  */}
      <AppLine />
      <AppLine />
      <AppLine appList={[{ name: "chat-fill", targetOption: kakaotalk }]} />
      <AppLine
        appList={[
          { name: "telephone", targetOption: call },
          { name: "camera", targetOption: false },
          { name: "clock", targetOption: false },
          { name: "browser-chrome", targetOption: false },
          { name: "chat-dots", targetOption: message },
        ]}
      />
    </Container>
  );
};

export default MainApps;
