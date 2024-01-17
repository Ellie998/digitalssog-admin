import styled from "@emotion/styled";

import Button from "@/components/phone/atoms/button";
import Flex from "@/components/phone/atoms/flex";
import Icon from "@/components/phone/atoms/icon";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";
import TargetBox from "@/components/phone/atoms/target-box";

import Top from "@/components/phone/atoms/top";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import Phone from "@/components/phone/molecules/phone";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";
import { BsChevronRight } from "react-icons/bs";

const NavContainer = styled.div`
  background: rgb(244, 244, 244);
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  top: -40px;
  font-size: 0.75rem;
  padding: 4px;
`;

const ContactInfo = ({
  content = { name: "영희" },
  target = { edit: false },
}) => {
  return (
    <Phone backgroundColor={"rgb(244,244,244)"}>
      <NoScrollbar height={"300px"}>
        <Icon name="chevron-left" style={{ width: "30px" }} />
        <Top
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
          title={{ content: content.name }}
          subTitle={{
            content: (
              <div
                style={{
                  display: "flex",
                  padding: "4px auto 4px 10px",
                  width: "100%",
                  justifyContent: "space-around",
                  cursor: "pointer",
                }}>
                <div style={{ color: "rgb(144,144,144)" }}>휴대전화</div>
                <div style={{ fontSize: "0.9rem" }}>010-1234-0000</div>
                <BsChevronRight name="chevron-right" color="white" />
              </div>
            ),
          }}
          childrenTop={
            <Icon
              name="camera-fill"
              style={{
                color: "white",
                backgroundColor: "rgb(240, 173, 173)",
                padding: "10px",
                width: "50px",
                height: "50px",
                margin: "0 auto",
              }}
            />
          }></Top>
        <Flex
          style={{
            padding: "6px 0px",
            width: "175px",
            justifyContent: "space-around",
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
          items={[
            <Icon
              key="call_icon"
              style={{
                backgroundColor: "rgb(22, 163, 74)",
                color: "white",
                padding: "4px",
              }}
              name="telephone-fill"
            />,
            <Icon
              key="chat"
              style={{
                backgroundColor: "rgb(69, 127, 243)",
                color: "white",
                padding: "4px",
              }}
              name="chat-fill"
            />,
            <Icon
              key="camera"
              style={{
                backgroundColor: "rgb(22 ,163 ,74)",
                color: "white",
                padding: "4px",
              }}
              name="camera-video-fill"
            />,
          ]}
        />

        <StackedListWrap
          listTitle={{ content: "휴대전화" }}
          style={{
            padding: "4px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}>
            <div style={{ fontSize: "0.8rem" }}>+82 10-1234-0000</div>
            <Flex
              style={{ width: "70px", margin: "6px auto" }}
              items={[
                <Icon
                  key="call_icon"
                  style={{
                    color: "rgb(22, 163, 74)",
                    fontSize: "0.6rem",
                  }}
                  name="telephone-fill"
                />,
                <Icon
                  key="chat"
                  style={{
                    color: "rgb(69, 127, 243)",
                    fontSize: "0.6rem",
                  }}
                  name="chat-fill"
                />,
                <Icon
                  key="camera"
                  style={{
                    color: "rgb(22 ,163 ,74)",
                    fontSize: "0.6rem",
                  }}
                  name="camera-video-fill"
                />,
              ]}
            />{" "}
          </div>
        </StackedListWrap>
        <StackedListWrap
          listTitle={{ content: "그룹" }}
          style={{
            border: "none",
            padding: "4px 0",
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}>
          <div style={{ fontSize: "0.8rem", padding: "0 8px" }}>
            긴급 연락처
          </div>
        </StackedListWrap>
        {/*  */}
        <StackedListWrap
          listTitle={{ content: "선물하기" }}
          style={{
            padding: "4px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 8px ",
            }}>
            <div style={{ fontSize: "0.8rem" }}>Samsung Pay</div>
            <Icon
              key="pay"
              style={{
                backgroundColor: "rgb(63, 0, 210)",
                fontSize: "0.6rem",
                color: "white",
              }}
              content={"Pay"}
            />
          </div>
        </StackedListWrap>
        <StackedListWrap
          listTitle={{ content: "송금하기" }}
          style={{
            border: "none",
            padding: "4px 0",
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 8px ",
            }}>
            <div style={{ fontSize: "0.8rem" }}>Toss</div>
            <Icon
              key="pay"
              style={{
                color: "rgb(28, 0, 210)",
                fontSize: "0.6rem",
              }}
              name="lightning-fill"
            />
          </div>
        </StackedListWrap>
        <div style={{ margin: "10px 0 50px 0" }}>
          <Button
            style={{
              backgroundColor: "rgb(233,233,233)",
              padding: "4px 20px",
              width: "100px",
              textAlign: "center",
              borderRadius: "12px",
            }}>
            기록
          </Button>
          <Button
            style={{
              backgroundColor: "rgb(233,233,233)",
              padding: "4px 20px",
              width: "100px",
              textAlign: "center",
              borderRadius: "12px",
            }}>
            저장위치
          </Button>
        </div>
      </NoScrollbar>
      <NavContainer>
        <IconBottom
          icon={{ name: "star", style: { fontSize: "0.75rem" } }}
          description={{ content: "즐겨찾기" }}
        />
        <TargetBox condition={target.edit}>
          <IconBottom
            icon={{ name: "pencil", style: { fontSize: "0.75rem" } }}
            description={{ content: "편집" }}
          />
        </TargetBox>
        <IconBottom
          icon={{ name: "share-fill", style: { fontSize: "0.75rem" } }}
          description={{ content: "공유" }}
        />
        <IconBottom
          icon={{ name: "three-dots-vertical", style: { fontSize: "0.75rem" } }}
          description={{ content: "더보기" }}
        />
      </NavContainer>
    </Phone>
  );
};

export default ContactInfo;
