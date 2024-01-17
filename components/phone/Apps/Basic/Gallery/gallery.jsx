// kakaotalk/sendImg/4

import Icon from "@/components/phone/atoms/icon";

import Phone from "@/components/phone/molecules/phone";

import { useState } from "react";

import ShareModalContent_Default from "@/components/phone/organisms/shareModalContent_default";
import Modal_downUp from "@/components/phone/molecules/modal-down-up";
import Tab from "@/components/phone/atoms/tab";
import ImgTab from "@/components/phone/Apps/Basic/Gallery/img-tab";
import GalleryTab from "@/components/phone/Apps/Basic/Gallery/gallery-tab";
import StoryTab from "@/components/phone/Apps/Basic/Gallery/story-tab";

const Gallery = ({
  num = 13,
  target_imgTab = { shareBtn: false },
  open = { shareOption: false },
  target_share = { kakaotalk: false },
}) => {
  const [isTabOpen, setIsTabOpen] = useState(true);
  const [clickedTab, setClickedTab] = useState("사진");
  const imgNum = [];
  for (let i = 0; i < num; i++) {
    imgNum.push(i);
  }

  return (
    <Phone>
      {!open.shareOption && (
        <>
          {clickedTab === "사진" && (
            <ImgTab target={target_imgTab} setIsTabOpen={setIsTabOpen} />
          )}
          {clickedTab === "앨범" && (
            <GalleryTab target={target_imgTab} setIsTabOpen={setIsTabOpen} />
          )}
          {clickedTab === "스토리" && (
            <StoryTab target={target_imgTab} setIsTabOpen={setIsTabOpen} />
          )}

          {isTabOpen && (
            <div style={{ display: "flex" }}>
              <Tab
                style={{ width: "140px" }}
                setClickedTab={setClickedTab}
                clickedTab={clickedTab}
                clickedColor="rgb(35, 35, 35)"
                clickEvent="underBar"
                items={[{ id: "사진" }, { id: "앨범" }, { id: "스토리" }]}
              />
              <Icon name="list" />
            </div>
          )}
        </>
      )}
      {open.shareOption && (
        <Modal_downUp top="57px">
          <ShareModalContent_Default
            open={{ kakaotalkOption: false }}
            target={target_share}
            content={{
              title: (
                <>
                  <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                    항목 1개
                  </div>
                  <div style={{ display: "flex", fontSize: "10px" }}>
                    <div
                      style={{
                        color: "rgb(166, 166, 166)",
                        marginRight: "4px",
                      }}>
                      261.61KB
                    </div>
                    <div
                      style={{ display: "flex", color: "rgb(57, 149, 255)" }}>
                      옵션
                      <Icon
                        style={{ color: "rgb(57, 149, 255)", fontSize: "10px" }}
                        name="chevron-right"
                      />
                    </div>
                  </div>
                </>
              ),
            }}
          />
        </Modal_downUp>
      )}
    </Phone>
  );
};

export default Gallery;
