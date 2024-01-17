import NoScrollBar from "../layout/NoScrollBar";
import ImgBox_CheckBox from "./ImgBox_CheckBox";

function ChoicedFile({
  fileType_img,

  fileArray,
  setChoicedFileArray,
}) {
  function deleteBtnHandler(event) {
    const deleteItem = event.target.id;
    setChoicedFileArray((prevObject) => {
      prevObject = prevObject.filter((item) => item !== deleteItem);
      return [...prevObject];
    });
  }

  return (
    <NoScrollBar>
      <div
        className={` border-t-[1px] border-[#e2e2e2] pt-1 flex mx-auto justify-center items-center w-full h-[44px]`}>
        {fileType_img &&
          fileArray?.map((item, i) => (
            <ImgBox_CheckBox
              id={item.slice(3, 4)}
              key={i}
              className={`mr-1`}
              icon={{ name: "dash-circle", className: "text-[#ff0000] " }}
              onIconClickHandler={deleteBtnHandler}
            />
          ))}
      </div>
    </NoScrollBar>
  );
}

export default ChoicedFile;
