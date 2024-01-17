import styled from "@emotion/styled";

import Header from "@/components/phone/organisms/header";
import Nav from "@/components/phone/organisms/nav";
import PhoneBackground from "@/components/phone/atoms/phone-background";

const MainContainer = styled.div`
  height: 300px;
  overflow: hidden;
  width: 175px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

function Phone({ children, main, backgroundColor }) {
  return (
    <PhoneBackground>
      <Header backgroundColor={backgroundColor} />
      <MainContainer backgroundColor={backgroundColor}>
        {children ? children : main}
      </MainContainer>
      <Nav />
    </PhoneBackground>
  );
}

export default Phone;
