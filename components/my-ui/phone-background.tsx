"use client";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: white;
  width: 200px;
  height: 400px;
  padding: 30px 14px 25px 11px;
  background-image: url("/assets/images/cellphone.png");
  background-size: contain;
  border-radius: 34px;
  display: grid;
  grid-template-rows: 20px auto auto auto 24px;
  justify-self: center;
  overflow: hidden;
  margin: auto;
`;

const PhoneBackground = ({ children }: { children?: React.ReactNode }) => {
  return <Container id="phone_bg">{children}</Container>;
};
export default PhoneBackground;
