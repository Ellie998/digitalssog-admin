import styled from '@emotion/styled';

const MainContainer = styled.div`
  height: 300px;
  overflow: hidden;
  width: 175px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
`;

function PhoneDisplay({ children, main, backgroundColor, onClick }) {
  return (
    <MainContainer backgroundColor={backgroundColor} onClick={onClick} id={'phone_display_main'}>
      {children ? children : main}
    </MainContainer>
  );
}

export default PhoneDisplay;
