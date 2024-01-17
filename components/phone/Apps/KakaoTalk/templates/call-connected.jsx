import styled from "@emotion/styled";

import Phone from "@/components/phone/molecules/phone";
import Top from "@/components/phone/atoms/top";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import Icon from "@/components/phone/atoms/icon";
import { useState } from "react";

const Container = styled.div`
  text-align: center;
`;

const IconsContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
`;

const BtnContainer = styled.div`
  grid-column: 1 / 4;
  background-color: red;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 auto;
`;

const CallConnected = () => {
  const [time, setTime] = useState(0);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);

  const iconContents = [
    { name: "cassette-fill", description: "녹음" },
    { name: "camera-video-fill", description: "영상통화" },
    { name: "bluetooth", description: "블루투스" },
    { name: "volume-up-fill", description: "스피커" },
    { name: "mic-mute-fill", description: "내 소리 차단" },
    { name: "grip-horizontal", description: "키패드" },
  ];

  return (
    <Phone>
      <Container>
        <Top
          style={{ marginTop: "12px" }}
          childrenTop={
            <Icon
              style={{
                backgroundColor: "rgb(141, 200, 253)",
                width: "40px",
                height: "40px",
                borderRadius: "16px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                marginTop: "10px",
                color: " rgb(214, 240, 255)",
                fontSize: "24px",
              }}
              name="person-fill"
            />
          }
          title={{
            content: "영희",
            style: { fontSize: "0.875rem" },
          }}>
          <div style={{ fontSize: "0.7rem" }}>
            {time > 9 ? `00:${time.toString()}` : `00:0${time.toString()}`}
          </div>
        </Top>
        <IconsContainer>
          {iconContents?.map((content, i) => (
            <IconBottom
              key={i}
              style={{ margin: "5px", fontSize: "0.6rem" }}
              icon={{
                name: content.name,
                style: {
                  fontSize: "18px",
                  width: "40px",
                  height: "40px",
                  margin: "0 auto",
                  border: "0.5px solid rgb(207, 207, 207)",
                  borderRadius: "100%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  hover: { backgroundColor: "rgb(207, 207, 207)" },
                },
              }}
              description={{ content: content.description }}
            />
          ))}
          <BtnContainer>
            <Icon
              name="telephone-x-fill"
              style={{
                color: "white",
                fontSize: "1rem",
              }}
            />
          </BtnContainer>
        </IconsContainer>
      </Container>
    </Phone>
  );
};

export default CallConnected;
