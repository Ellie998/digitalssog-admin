import styled from "@emotion/styled";
import { useState } from "react";

import StackedList_Profile from "@/components/phone/molecules/stacked-list-profile";
import Icon from "@/components/phone/atoms/icon";
import Modal from "@/components/phone/molecules/modal";
import Flex from "@/components/phone/atoms/flex";
import TargetBox from "@/components/phone/atoms/target-box";

const BtnContainer = styled.div`
  font-size: 0.7rem;
  border: 1px solid rgb(225, 225, 225);
  border-radius: 12px;
  padding: 3px 6px;
  text-align: center;
`;

const ChatHeader = ({
  onClick,
  target = { call: false },
  open,
  name = "홍길동",
}) => {
  const [isHeaderOptionOpen, setIsHeaderOptionOpen] = useState(false);
  return (
    <>
      {!isHeaderOptionOpen && (
        <StackedList_Profile
          onClick={onClick}
          profile={{
            content: name.slice(0, 1),
            style: { backgroundColor: "rgb(254 215 170)" },
            onClick: () => setIsHeaderOptionOpen(true),
          }}
          title={{
            onClick: () => setIsHeaderOptionOpen(true),
            content: (
              <TargetBox
                style={{ display: "flex" }}
                isNextTriger={false}
                condition={open}>
                <div style={{ marginRight: "4px" }}>{name}</div>
                <Icon name="chevron-down" />
              </TargetBox>
            ),
            style: { gridColumnEnd: "5" },
          }}
          info={{
            style: { gridColumnStart: "6" },
            content: <Icon name={`three-dots-vertical`} />,
          }}
        />
      )}
      {isHeaderOptionOpen && (
        <Modal
          backdrop={{ isBackTriger: false }}
          onClickBackDrop={() => setIsHeaderOptionOpen(false)}
          backdropStyle={{ backgroundColor: "rgb(255,255,255,0.6)" }}
          modalStyle={{
            left: "0px",
            width: "173px",
            padding: "2px 2px 10px 2px",
            boxShadow: "0 2px 10px -3px rgb(0,0,0,0.1);",
          }}>
          <>
            <StackedList_Profile
              profile={{ name: "chevron-up" }}
              title={{}}
              info={{
                content: (
                  <Flex
                    style={{ width: "45px" }}
                    items={[
                      <TargetBox key="call_icon" condition={target.call}>
                        <Icon name="telephone" />
                      </TargetBox>,
                      <Icon key="info_icon" name="info-circle" />,
                    ]}
                  />
                ),
              }}
            />
            <StackedList_Profile
              style={{ margin: "2px 2px 6px 2px" }}
              profile={{
                content: name.slice(0, 1),
                style: {
                  backgroundColor: "rgb(254, 215, 170)",
                  padding: "20px",
                  fontSize: "20px",
                  margin: "0 auto",
                  gridColumnEnd: "3",
                },
              }}
              title={{
                content: name,
                style: { marginLeft: "4px", gridColumnStart: "3" },
              }}
              subTitle={{
                content: "010-0000-0000",
                style: { marginLeft: "4px", gridColumnStart: "3" },
              }}
            />
            <Flex
              style={{ marginTop: "20px", justifyContent: "center" }}
              items={[
                // <BtnContainer key="btn1">연락처에 추가</BtnContainer>,
                // <BtnContainer key="btn2">수신 차단</BtnContainer>,
                <BtnContainer key="btn3">수신인 추가/삭제</BtnContainer>,
              ]}
            />
          </>
        </Modal>
      )}
    </>
  );
};

export default ChatHeader;
