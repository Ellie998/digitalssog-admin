import styled from "@emotion/styled";

import FlexInFlex from "@/components/phone/atoms/flex-in-flex";
import Icon from "@/components/phone/atoms/icon";
import ImgSelectBox from "@/components/phone/Apps/KakaoTalk/atoms/img-select-box";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";
import TargetBox from "@/components/phone/atoms/target-box";

const ImgsContainer = styled.div`
  display: flex;
  width: max-content;
`;

const ImgOptionBox = ({
  onIconClickHandler,
  setChoicedImgs,
  choicedImgs,
  target = { totalBtn: false },
}) => {
  const imgNum = [0, 1, 2, 3, 4, 5, 6];
  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = event.target.id;
    event.target.checked === true &&
      setChoicedImgs((prevObject) => [...prevObject, updatedValue]);

    event.target.checked === false &&
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }

  return (
    <>
      <NoScrollbar height={"100px"}>
        <ImgsContainer>
          {imgNum.map((num) => (
            <ImgSelectBox
              onChangeHandler={imgCheckHandler}
              onIconClickHandler={onIconClickHandler}
              choicedImgs={choicedImgs}
              key={num}
              id={num}
              style={{ width: "100px", height: "100px", marginLeft: "4px" }}
            />
          ))}
        </ImgsContainer>
      </NoScrollbar>

      <FlexInFlex
        leftItem={[
          <TargetBox
            key="1"
            condition={target.totalBtn}
            style={{
              display: "flex",
              fontSize: "0.9rem",
            }}>
            <Icon name="grid-fill" />
            <div>전체</div>
          </TargetBox>,
        ]}
        rightItem={[
          <Icon key="1" name="magic" />,
          <Icon key="2" name="three-dots" />,
        ]}
      />
    </>
  );
};

export default ImgOptionBox;
