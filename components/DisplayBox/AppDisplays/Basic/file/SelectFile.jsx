import { useState } from "react";

import classes from "./SelectFile.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

function SelectFile({ target_sendImg, target_sendAudio }) {
  const [isFolderClicked, setFolderClicked] = useState(false);
  const [clickedFileId, setClickedFileId] = useState("");
  const checkboxes = document.getElementsByName("audio");

  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const numArray_folder = [0, 1, 2, 3, 4];

  function folderClickHandler() {
    setFolderClicked(true);
  }
  function fileClickHandler(event) {
    if (event.target.checked === true) {
      checkboxes.forEach((cb) => {
        cb.checked = false;
      });
      event.target.checked = true;
      setClickedFileId(event.target.id);
    } else {
      setClickedFileId("");
    }
  }

  return (
    <>
      {target_sendImg && (
        <section className={classes.layout}>
          <div className={classes["header--grid4"]}>
            <div>
              <i className="bi bi-list"></i>
            </div>
            <div className={classes["header_title"]}>최근</div>
            <div className={classes["header_nav"]}>
              <div>
                <i className="bi bi-search"></i>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </div>
          </div>
          <div className={classes.headerFilter}>
            <div
              className={`${classes["headerFilter_contentWrap"]} ${classes["headerFilter_contentWrap--selected"]}`}>
              <div>
                <i className="bi bi-file-earmark"></i>
              </div>
              <div>대용량 파일</div>
            </div>
            <div className={`${classes["headerFilter_contentWrap"]}`}>
              <div>
                <i className="bi bi-clock-history"></i>
              </div>
              <div>이번 주</div>
            </div>
          </div>
          <div className={classes.headerTap}>
            <div>개인</div>
            <div>직장</div>
          </div>

          <div className={classes["otherAppsLayout"]}>
            <div className={classes["otherAppsWrap_title"]}>
              다른 앱의 파일 탐색
            </div>
            <div className={classes.otherAppsWrap}>
              <div>
                <div>
                  <i className="bi bi-bug"></i>
                </div>
                <div>버그 신고</div>
              </div>
              <div>
                <TargetContent
                  targetOption={target_sendImg}
                  isNextDescriptionLink={true}>
                  <div>
                    <i className="bi bi-flower3"></i>
                  </div>
                  <div>갤러리</div>
                </TargetContent>
              </div>
              <div>
                <div>
                  <i className="bi bi-folder"></i>
                </div>
                <div>내 파일</div>
              </div>
            </div>
          </div>
          <div className={classes.listLayout}>
            <div className={classes["listSortWrap"]}>
              <div className={classes["listSortWrap_title"]}>최근 이미지</div>
              <div className={classes["listSortWrap_nav"]}>
                <div>
                  <i className="bi bi-card-list"></i>
                  {/* <i className="bi bi-grid-3x2"></i> */}
                </div>
              </div>
            </div>
            <div className={`${classes["listWrap_Gallery"]}`}>
              {numArray.map(() => (
                <div
                  key={Math.random()}
                  className={classes["listBox_Gallery--img"]}>
                  <div className={classes["listBigBtn_Gallery"]}>
                    <i className="bi bi-arrows-fullscreen"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {target_sendAudio && (
        <section className={classes.layout}>
          <div className={classes.header}>
            <div className={classes["header_title"]}>오디오 파일 선택</div>
            <div className={classes["header_nav"]}>
              {!isFolderClicked && (
                <div>
                  <i className="bi bi-file-earmark"></i>
                </div>
              )}
              <div>
                <i className="bi bi-search"></i>
              </div>
              <div>
                <i className="bi bi-list"></i>
              </div>
            </div>
          </div>
          {!isFolderClicked && (
            <div className={classes.headerFilter}>
              <div
                className={`${classes["headerFilter_contentWrap"]} ${classes["headerFilter_contentWrap--selected"]}`}>
                <div>
                  <i className="bi bi-file-earmark"></i>
                </div>
                <div>내장 저장공간</div>
              </div>
              <div className={classes["headerFilter_contentWrap"]}>
                <div>
                  <i className="bi bi-clock-history"></i>
                </div>
                <div>OneDrive</div>
              </div>

              <div className={classes["headerFilter_contentWrap"]}>
                <div>
                  <i className="bi bi-clock-history"></i>
                </div>
                <div>Google 드라이브</div>
              </div>
            </div>
          )}
          <div className={classes.listLayout}>
            <div className={classes["listSortWrap"]}>
              <div className={classes["listSortWrap_title"]}></div>
              <div className={classes["listSortWrap_nav"]}>
                <div className={classes["flex"]}>
                  <div>
                    <i className="bi bi-card-list"></i>
                  </div>
                  <div>이름</div>
                </div>
                <div>
                  <i className="bi bi-arrow-up"></i>
                </div>
              </div>
            </div>
            {/* folder list */}

            {!isFolderClicked && (
              <div className={`${classes["listWrap_Gallery"]}`}>
                {numArray_folder.map((num) => (
                  <div key={Math.random()} onClick={folderClickHandler}>
                    <div className={classes["listBox_Gallery"]}>
                      <i className="bi bi-folder"></i>
                    </div>
                    <div className={classes["listBoxTitle_Gallery"]}>
                      폴더 {num}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* file list */}
            {isFolderClicked && (
              <div className={`${classes["listWrap_Gallery"]}`}>
                {numArray_folder.map((num) => (
                  <div key={Math.random()}>
                    <label
                      htmlFor={`audio` + num}
                      className={`${classes["listBox_Gallery"]} ${classes["listBox_Gallery--selectAndBig"]}`}>
                      <input
                        name="audio"
                        id={`audio` + num}
                        type="checkbox"
                        onChange={fileClickHandler}
                        checked={
                          clickedFileId === `audio${num}` ? true : false
                        }></input>
                      <div>
                        <i className="bi bi-file-music-fill"></i>
                      </div>
                      <div>
                        <i className="bi bi-arrows-fullscreen"></i>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          {clickedFileId && (
            <TargetContent
              targetOption={target_sendAudio}
              isNextDescriptionLink={true}
              className={`mx-auto`}>
              <div className={classes["button_done"]}>완료</div>
            </TargetContent>
          )}
        </section>
      )}
    </>
  );
}

export default SelectFile;
