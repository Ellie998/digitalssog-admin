/* eslint-disable no-unused-vars */

import styled from "@emotion/styled";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 20px;
  display: grid;
  grid-template-columns: auto;
`;

const ProfileIcons = ({ style, onClick, btn = { name: "camera-fill" } }) => {
  return (
    <Container id="profile_icons" style={{ ...style }} onClick={onClick}>
      <Icon
        name="person-fill"
        style={{
          backgroundColor: "var(--kakao-skyblue)",
          height: "25px",
          width: "25px",
          margin: "0 auto",
          gridColumn: "1/3",
          gridRow: "1/2",
          color: "white",
          fontSize: "16px",
        }}
      />

      <Icon
        name="person-fill"
        style={{
          backgroundColor: "var(--kakao-blue)",
          height: "25px",
          width: "25px",
          margin: "0 auto",
          gridColumn: "1/2",
          gridRow: " 2/3",
          color: "white",
          fontSize: "16px",
        }}
      />

      <Icon
        name="person-fill"
        style={{
          backgroundColor: "var(--kakao-purple)",
          height: "25px",
          width: "25px",
          margin: "0 auto",
          gridColumn: "2/3",
          gridRow: "2/3",
          color: "white",
          fontSize: "16px",
        }}
      />

      <Icon
        name={btn.name}
        style={{
          backgroundColor: "#4d4d4d",
          height: "15px",
          width: "15px",
          margin: "0 auto",
          gridColumn: "3/4",
          gridRow: "2/3",
          color: "#ededed",
          fontSize: "6px",
          position: "relative",
          left: "-6px",
          top: "9px",
        }}
      />
    </Container>
  );
};
export default ProfileIcons;
