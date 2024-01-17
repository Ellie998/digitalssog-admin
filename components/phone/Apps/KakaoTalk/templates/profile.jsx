import classes from "./profile.module.css";

import Phone from "@/components/phone/molecules/phone";
import IconBottom from "@/components/phone/molecules/icon-bottom";
import TargetBox from "@/components/phone/atoms/target-box";
import Icon from "@/components/phone/atoms/icon";

import BackBtn from "@/components/DisplayBox/AppDisplays/_components/UI/BackBtn";
import Title from "@/components/phone/atoms/title";
import Flex from "@/components/phone/atoms/flex";
import Modal from "@/components/phone/molecules/modal";
import ModalContents from "@/components/phone/organisms/modal-contents";

function Profile({
  target = { call: false, chat: false, name: false, videoCall: false },
  target_edit = { img: false, submit: false },
  target_modal = { gallery: false },
  content = {
    name: "영희",
    profileStyle: {
      color: "rgb(226, 243, 255)",
      backgroundColor: "rgb(193, 229, 255)",
    },
  },
  content_modal = {
    title: "프로필 사진/동영상",
    children: (
      <div style={{ fontSize: "14px", marginLeft: "8px" }}>
        <TargetBox
          style={{ padding: "2px 0" }}
          condition={target_modal.gallery}>
          앨범에서 사진/동영상 선택
        </TargetBox>
        <TargetBox style={{ padding: "2px 0" }}>커스텀 프로필 만들기</TargetBox>
        <TargetBox style={{ padding: "2px 0" }}>카카오스토리로 설정</TargetBox>
        <TargetBox style={{ padding: "2px 0" }}>기본 이미지로 변경</TargetBox>
      </div>
    ),
  },
  open = { myProfile: false, edit: false, modal: false },
}) {
  return (
    <Phone>
      {open.modal && (
        <Modal modalStyle={{ top: "70px" }}>
          <ModalContents title={{ content: content_modal.title }}>
            {content_modal.children}
          </ModalContents>
        </Modal>
      )}
      {open.edit && (
        <Flex
          style={{
            zIndex: "10",
            position: "absolute",
            width: "175px",
            padding: "5px",
          }}
          items={[
            <div key="1" style={{ display: "flex" }}>
              <BackBtn key="1" style={{ color: "white" }} />
              <Title key="2" style={{ color: "white" }}>
                프로필 편집
              </Title>
            </div>,
            <div key="2" style={{ display: "flex" }}>
              <Icon style={{ color: "rgb(216, 216, 216)" }} name="trash3" />
              <TargetBox condition={target_edit.submit}>
                <Title style={{ color: "white" }}>완료</Title>
              </TargetBox>
            </div>,
          ]}
        />
      )}
      <section
        className={classes.layout}
        style={{ marginTop: open.edit ? "0" : "10px" }}>
        <section className={classes.mainLayout}>
          <TargetBox condition={target_edit.img} style={{ margin: "0 auto" }}>
            <IconBottom
              icon={{
                name: "person-fill",
                style: {
                  fontSize: "24px",
                  margin: "0 auto",
                  borderRadius: "22px",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  boxShadow: "0 0 4px rgb(164, 164, 164)",
                  ...content.profileStyle,
                },
              }}
              description={
                !open.edit && {
                  content: (
                    <TargetBox
                      style={{
                        color: "white",
                        padding: "4px",
                        display: "flex",
                      }}
                      condition={target.name}>
                      {content.name}
                      {!open.myProfile && (
                        <Icon
                          name="pencil"
                          style={{
                            color: "white",
                            fontSize: "10px",
                            marginLeft: "3px",
                          }}
                        />
                      )}
                    </TargetBox>
                  ),
                  style: { color: "white", fontSize: "1rem" },
                }
              }></IconBottom>
            {open.edit && (
              <Icon
                name="camera-fill"
                style={{
                  backgroundColor: "white",
                  width: "fit-content",
                  position: "absolute",
                  margin: "-15px 0 0 40px",
                }}
              />
            )}
          </TargetBox>
          {open.edit && (
            <>
              <div
                style={{
                  color: "white",
                  padding: "4px",
                  borderBottom: "0.5px solid white",
                }}>
                <TargetBox
                  style={{
                    color: "white",
                    margin: "0 auto",
                  }}
                  condition={target.name}>
                  {content.name}
                </TargetBox>
                <Icon
                  name="pencil-fill"
                  style={{
                    color: "white",
                    fontSize: "12px",
                    position: "absolute",
                    marginLeft: "145px",
                    marginTop: "-20px",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "white",
                  padding: "4px",
                  borderBottom: "0.5px solid white",
                }}>
                <TargetBox
                  style={{
                    color: "white",
                    margin: "0 auto",
                  }}
                  condition={false}>
                  상태메시지를 입력해 주세요.
                </TargetBox>
                <Icon
                  name="pencil-fill"
                  style={{
                    color: "white",
                    fontSize: "12px",
                    position: "absolute",
                    marginLeft: "145px",
                    marginTop: "-20px",
                  }}
                />
              </div>
            </>
          )}
          {open.edit && (
            <Flex
              items={[
                <TargetBox key="1">
                  <Icon
                    name="camera-fill"
                    style={{ backgroundColor: "white", fontSize: "12px" }}
                  />
                </TargetBox>,
                <TargetBox key="2">
                  <Icon
                    name="hand-index-thumb"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="3">
                  <Icon
                    name="emoji-smile"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="4">
                  <Icon
                    name="music-note-beamed"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="5">
                  <Icon
                    name="sticky"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="6">
                  <Icon
                    name="fonts"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="7">
                  <Icon
                    name="image"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="8">
                  <Icon
                    name="calendar-date"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
                <TargetBox key="9">
                  <Icon
                    name="grid"
                    style={{ color: "white", fontSize: "10px" }}
                  />
                </TargetBox>,
              ]}
            />
          )}
        </section>

        {!open.myProfile && !open.edit && (
          <div className={classes.listLayout}>
            <TargetBox
              condition={target.chat}
              isNextTriger={true}
              style={{ padding: "2px" }}>
              <IconBottom
                icon={{
                  name: "chat-fill",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "1:1채팅",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
            <TargetBox condition={target.call} isNextTriger={true}>
              <IconBottom
                style={{ padding: "2px" }}
                icon={{
                  name: "telephone-fill",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "통화하기",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
            <TargetBox condition={target.videoCall}>
              <IconBottom
                icon={{
                  name: "camera-video-fill",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "페이스톡",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
            <IconBottom
              icon={{
                name: "quote",
                style: {
                  color: "white",
                  fontSize: "16px",
                },
              }}
              description={{
                content: "스토리",
                style: {
                  color: "white",
                  fontSize: "10px",
                  fontWeight: "bold",
                },
              }}
            />
          </div>
        )}
        {open.myProfile && (
          <div className={classes.listLayout}>
            <TargetBox condition={target.chat} isNextTriger={true}>
              <IconBottom
                icon={{
                  name: "chat-fill",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "나와의 채팅",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
            <TargetBox condition={target.edit} isNextTriger={true}>
              <IconBottom
                style={{ padding: "2px" }}
                icon={{
                  name: "pencil-fill",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "프로필 편집",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
            <TargetBox condition={target.makePung}>
              <IconBottom
                icon={{
                  name: "plus-square-dotted",
                  style: {
                    color: "white",
                    fontSize: "16px",
                  },
                }}
                description={{
                  content: "펑 만들기",
                  style: {
                    color: "white",
                    fontSize: "10px",
                    fontWeight: "bold",
                  },
                }}
              />
            </TargetBox>
          </div>
        )}
      </section>
    </Phone>
  );
}

export default Profile;
