import Icon from "./Icon";

export default function ImgBox_CheckBox({
  className,
  // btnColor,
  // textColor,
  // borderColor,
  // width,
  // onClick,
  // content,
  onChangeHandler,
  onIconClickHandler,
  choicedImgs,
  icon,
  id,
}) {
  return (
    <div className={`flex w-[38px] h-[38px] ${className}`}>
      <label
        htmlFor={`box${id}`}
        className="bg-[antiquewhite] w-[38px] h-[38px]">
        <div className={`relative flex justify-between`}>
          <input
            className={`block  cursor-pointer`}
            type="checkbox"
            id={`box${id}`}
            onChange={onChangeHandler}
            checked={choicedImgs?.includes(`box${id}`) ? true : false}
            readOnly></input>

          <div className="text-sm">{id}</div>
        </div>
        <Icon
          id={`box${id}`}
          onClick={onIconClickHandler}
          name={`${icon ? icon.name : "arrows-fullscreen"}`}
          className={`rounded-lg max-w-fit max-h-fit p-[3px] ml-[22px] mb-1 cursor-pointer ${
            icon ? icon.className : "text-2xs bg-white"
          }`}
        />
      </label>
    </div>
  );
}
