import styled from "@emotion/styled";
import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";
import Flex from "@/components/phone/atoms/flex";
import TargetBox from "@/components/phone/atoms/target-box";

import Title from "@/components/phone/atoms/title";

import Phone from "@/components/phone/molecules/phone";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

const SettingTitle = styled.div`
  padding-left: 8px;
`;
const SettingContent = styled.div`
  padding-left: 8px;
  font-size: 12px;
  color: var(--gray-500);
`;

const Setting_Display = ({ target = { fontSize: false } }) => {
  return (
    <Phone>
      <Flex
        style={{ justifyContent: "left" }}
        items={[<BackBtn key="1" />, <Title key="2">화면</Title>]}
      />
      <TargetBox condition={target.fontSize}>
        <StackedListWrap style={{ border: "none", width: "170px" }}>
          <SettingTitle>글자 크기</SettingTitle>
          <SettingContent>15pt</SettingContent>
        </StackedListWrap>
      </TargetBox>
      <StackedListWrap style={{ border: "none", width: "170px" }}>
        <SettingTitle>배경 화면</SettingTitle>
        <Flex
          style={{ justifyContent: "left", paddingLeft: "8px" }}
          items={[
            <div
              style={{
                width: "12px",
                height: "20px",
                backgroundColor: "rgb(216, 236, 255)",
                borderRadius: "2px",
              }}
              key="1"></div>,
            <SettingContent key="2">색상</SettingContent>,
          ]}
        />
      </StackedListWrap>
      <StackedListWrap style={{ border: "none", width: "170px" }}>
        <SettingTitle>화면 방향</SettingTitle>
        <SettingContent>자동</SettingContent>
      </StackedListWrap>
    </Phone>
  );
};

export default Setting_Display;
