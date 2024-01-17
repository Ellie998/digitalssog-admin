import styled from "@emotion/styled";

const MainContainer = styled.div`
  height: 300px;
  overflow: hidden;
  width: 175px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

function PhoneDisplay({ children, main, backgroundColor }) {
  return (
    <MainContainer backgroundColor={backgroundColor}>
      {children ? children : main}
    </MainContainer>
  );
}

export default PhoneDisplay;
