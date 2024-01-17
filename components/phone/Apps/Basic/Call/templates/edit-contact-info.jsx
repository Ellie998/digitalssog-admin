import styled from "@emotion/styled";
import Flex from "@/components/phone/atoms/flex";

import Icon from "@/components/phone/atoms/icon";
import NoScrollbar from "@/components/phone/atoms/no-scroll-bar";
import TargetBox from "@/components/phone/atoms/target-box";

import Phone from "@/components/phone/molecules/phone";
import StackedListWrap from "@/components/phone/molecules/stacked-list-wrap";

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";

const NavContainer = styled.div`
  background: rgb(244, 244, 244);
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 100;
  top: -34px;
  font-size: 0.85rem;
  padding: 8px;
  font-weight: bold;
`;

const Edit_ContactInfo = ({
  content = { name: "영희" },
  state = { name: null, setName: () => {} },
}) => {
  return (
    <Phone backgroundColor={"rgb(244,244,244)"}>
      <NoScrollbar height={"300px"}>
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
        <StackedList_Profile
          style={{
            padding: "4px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderRadius: "12px",
          }}
          profile={{ name: "person", style: { color: "rgb(44, 106, 221)" } }}
          title={{
            content: (
              <input
                type="text"
                placeholder={state.name || content.name}
                onChange={(e) => {
                  state.setName(e.target.value);
                }}
                value={undefined || state.name}
                style={{ width: "100px" }}
              />
            ),
          }}
          info={{ content: <Icon name="chevron-down" /> }}
        />
        <StackedListWrap
          style={{
            padding: "8px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}>
          <StackedList_Profile
            profile={{
              name: "telephone",
              style: { color: "rgb(44, 106, 221)" },
            }}
            title={{
              content: (
                <Flex
                  items={[
                    <div style={{ color: "rgb(44, 106, 221)" }} key="1">
                      휴대전화
                    </div>,
                    <Icon
                      style={{ color: "rgb(44, 106, 221)" }}
                      key="2"
                      name="chevron-down"
                    />,
                  ]}
                />
              ),
            }}
            subTitle={{
              style: {
                gridColumn: "2/6",
              },
              content: (
                <input
                  type="text"
                  value={"010-1234-0000"}
                  readOnly
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                    color: "rgb(25, 25, 25)",
                  }}
                />
              ),
            }}
            info={{
              content: <Icon name="dash-lg" style={{ color: "red" }} />,
              style: { gridColumn: "6/7" },
            }}
          />
        </StackedListWrap>
        <StackedListWrap
          style={{
            padding: "8px 0",
            backgroundColor: "white",
          }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "" }}
            title={{
              content: (
                <Flex
                  items={[
                    <div style={{ color: "rgb(44, 106, 221)" }} key="1">
                      휴대전화
                    </div>,
                    <Icon
                      style={{ color: "rgb(44, 106, 221)" }}
                      key="2"
                      name="chevron-down"
                    />,
                  ]}
                />
              ),
            }}
            subTitle={{
              content: (
                <input
                  type="text"
                  value={"+82 10-1234-0000"}
                  readOnly
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                    color: "rgb(25, 25, 25)",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
            info={{
              content: <Icon name="dash-lg" style={{ color: "red" }} />,
              style: { gridColumn: "6/7" },
            }}
          />
        </StackedListWrap>{" "}
        <StackedListWrap
          style={{
            padding: "4px 0",
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "plus" }}
            title={{
              content: (
                <input
                  type="text"
                  placeholder={"전화번호 추가"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        {/*  */}
        <StackedListWrap
          style={{
            border: "none",
            padding: "4px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderRadius: "12px",
          }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "envelope" }}
            title={{
              content: (
                <input
                  type="text"
                  placeholder={"이메일"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        {/*  */}
        <StackedListWrap
          style={{
            border: "none",
            padding: "4px 0",
            marginTop: "10px",
            backgroundColor: "white",
            borderRadius: "12px",
          }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "people", style: { color: "rgb(44, 106, 221)" } }}
            title={{
              content: (
                <div
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}>
                  긴급 연락처
                </div>
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        <div
          style={{
            margin: "10px auto 50px auto",
            display: "flex",
            justifyContent: "center",
            fontSize: "0.85rem",
          }}>
          <Icon name="chevron-down" style={{ color: "rgb(122, 122, 122)" }} />
          <div style={{ color: "rgb(122, 122, 122)" }}>항목 더보기</div>
        </div>
      </NoScrollbar>
      <NavContainer>
        <TargetBox condition={false}>취소</TargetBox>
        <TargetBox condition={true}>저장</TargetBox>
      </NavContainer>
    </Phone>
  );
};

export default Edit_ContactInfo;
