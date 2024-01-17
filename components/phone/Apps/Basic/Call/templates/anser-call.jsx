import styled from "@emotion/styled";

import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";

import Top from "@/components/phone/atoms/top";
import Phone from "@/components/phone/molecules/phone";
import Icon from "@/components/phone/atoms/icon";

const Container = styled.div`
  text-align: center;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;
const OptionContainer = styled.div`
  margin-top: 20px;
  color: #232323;
  font-size: 0.8rem;
`;
const AnswerCall = () => {
  return (
    <Phone>
      <Container>
        <Top
          style={{ marginTop: "40px" }}
          title={{ content: "홍길동" }}
          subTitle={{ content: "010-0000-0000" }}
        />
        <BtnContainer>
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
          <Icon
            name="telephone-x-fill"
            style={{
              color: "rgb(220 38 38)",
              width: "40px",
              height: "40px",
              boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
            }}
          />
        </BtnContainer>
        <OptionContainer>문자 보내기</OptionContainer>
      </Container>
    </Phone>
  );
};

export default AnswerCall;
