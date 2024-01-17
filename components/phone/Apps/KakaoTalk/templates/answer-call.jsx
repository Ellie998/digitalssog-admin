import styled from "@emotion/styled";

import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import Icon from "@/components/phone/atoms/icon";

import Top from "@/components/phone/atoms/top";
import Phone from "@/components/phone/molecules/phone";

const Container = styled.div`
  text-align: center;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
`;

const AnswerCall = ({ content = { name: "철수" } }) => {
  return (
    <Phone>
      <Container>
        <Top
          style={{ marginTop: "40px" }}
          title={{ content: content.name }}
          subTitle={{ content: "보이스톡 해요." }}
          childrenTop={
            <Icon
              name="person-fill"
              style={{
                backgroundColor: "#92caff8a",
                borderRadius: "16px",
                color: "#e5f5ff",
                fontSize: "1.5rem",
                width: "40px",
                height: "40px",
                boxShadow: "0 0px 2px rgb(0 0 0 / 0.1)",
                margin: "0 auto",
              }}
            />
          }></Top>

        <BtnContainer>
          <Icon
            name="telephone-fill"
            style={{
              color: "rgb(220 38 38)",
              width: "40px",
              height: "40px",
              boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
            }}
          />

          <TargetContent targetOption={true} isNextDescriptionLink={true}>
            <Icon
              name="telephone-fill"
              style={{
                color: "rgb(37 99 235)",
                width: "40px",
                height: "40px",
                boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
              }}
            />
          </TargetContent>
        </BtnContainer>
      </Container>
    </Phone>
  );
};

export default AnswerCall;
