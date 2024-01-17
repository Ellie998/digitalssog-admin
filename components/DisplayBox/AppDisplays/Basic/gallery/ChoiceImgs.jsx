import { useState } from "react";

import classes from "./ChoiceImgs.module.css";

import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

function ChoiceImgs() {
  const [choicedImgs, setChoicedImgs] = useState([]);

  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = `${event.target.nextSibling.attributes[0].nodeValue}`;
    if (choicedImgs.length < 10) {
      updatedValue &&
        event.target.checked === true &&
        setChoicedImgs((prevObject) => [...prevObject, updatedValue]);
    }
    updatedValue &&
      event.target.checked === false &&
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }
  function deleteBtnHandler(event) {
    if (event.target.tagName === "I") {
      const deleteItem =
        event.target.parentNode.previousElementSibling.innerText;
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== deleteItem);
        return [...prevObject];
      });
    } else {
      const deleteItem = event.target.previousElementSibling.innerText;
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== deleteItem);
        return [...prevObject];
      });
    }
    // console.dir(event.target);
  }

  return (
    <>
      <section className={classes.mainLayout}>
        <div className={classes.headerLayout}>
          {choicedImgs.length === 0 && <div>항목 선택</div>}
          {choicedImgs.length !== 0 && (
            <div>
              <div>{choicedImgs.length}/10</div>
              <TargetContent targetOption={true} isNextDescriptionLink={true}>
                <div>완료</div>
              </TargetContent>
            </div>
          )}
          {choicedImgs.length === 0 && (
            <div className={classes.choicedImgsListNone}>
              선택한 항목이 없습니다.
            </div>
          )}
          {choicedImgs.length !== 0 && (
            <div className={classes.choicedImgsList}>
              {choicedImgs.map((choicedImg) => (
                <div key={`choiced${choicedImg}Wrap`}>
                  <div key={`choiced${choicedImg}`}>{choicedImg}</div>
                  <div key={`delete${choicedImg}`} onClick={deleteBtnHandler}>
                    <i className="bi bi-dash-circle"></i>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={classes.iconWrap}>
            <i className="bi bi-chevron-up"></i>
          </div>
        </div>

        <div className={classes.imgLayout}>
          <div className={`${classes.imgListsGallery} ${classes.imgLists}`}>
            {numArray.map((num) => (
              <div key={`img` + num}>
                <input
                  id={`img` + num}
                  type="checkbox"
                  onChange={imgCheckHandler}
                  checked={
                    choicedImgs.includes(`img` + num) ? true : false
                  }></input>
                <label htmlFor={`img` + num}></label>
                <div className={classes.iconWrap}>
                  <i className="bi bi-arrows-angle-expand"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.headerTap}>
          <div>사진</div>
          <div>앨범</div>
        </div>
      </section>
    </>
  );
}

export default ChoiceImgs;
