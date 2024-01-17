import ImgBox_CheckBox from "../UI/ImgBox_CheckBox";

function ChoiceFile({
  fileType_img,
  className,
  num,
  choiceFile,
  setChoicedFileArray,
}) {
  const numArray = [];
  for (let i = 0; i < num; i++) {
    numArray.push(i);
  }

  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = event.target.id;
    event.target.checked === true &&
      setChoicedFileArray((prevObject) => [...prevObject, updatedValue]);

    event.target.checked === false &&
      setChoicedFileArray((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }

  return (
    <div
      className={`grid grid-cols-4 gap-1 pt-1 animate-fadeInUp ${className}`}>
      {fileType_img &&
        numArray.map((i) => (
          <ImgBox_CheckBox
            choicedImgs={choiceFile}
            key={i}
            id={i}
            onChangeHandler={imgCheckHandler}
          />
        ))}
    </div>
  );
}

export default ChoiceFile;
