import { useState } from "react";

/** insert color rgb og rgba of #... into theme prop */
export default function Checkbox({
  className,
  title,
  onChangeHandler,
  label,
  id,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`hover:bg-gray-100 ${className}`}>
      {title && (
        <div className={`display_title ${title.className}`}>
          {title.content}
        </div>
      )}
      <label className={`flex cursor-pointer ${label.className}`} htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          onChange={() => {
            onChangeHandler && onChangeHandler();
            isChecked && setIsChecked(false);
            !isChecked && setIsChecked(true);
          }}></input>
        <div
          className={
            isChecked ? `display_subTitle` : "display_subTitle--light"
          }>
          {label.content}
        </div>
      </label>
    </div>
  );
}
