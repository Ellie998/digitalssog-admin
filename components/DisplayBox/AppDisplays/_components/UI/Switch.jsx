import { useState } from "react";
import classes from "./Switch.module.css";

/** insert color rgb og rgba of #... into theme prop */
export default function Switch({
  theme,
  title,
  subTitle,
  id,
  className,
  setCheckedSwitch,
  setIsSwitchChecked,
}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`items-center py-1 cursor-pointer hover:bg-gray-100 ${className}`}
      key={id}>
      <div className={`flex justify-between pb-1`}>
        <label htmlFor={id} className="">
          {title && <div className={"display_title"}>{title}</div>}
        </label>
        {theme && (
          <input
            type="checkbox"
            id={id}
            onChange={(e) => {
              setCheckedSwitch !== undefined &&
                e.target.checked &&
                setCheckedSwitch(id);
              setCheckedSwitch !== undefined &&
                !e.target.checked &&
                setCheckedSwitch("");
              //
              setIsSwitchChecked !== undefined &&
                e.target.checked &&
                setIsSwitchChecked(true);
              setIsSwitchChecked !== undefined &&
                !e.target.checked &&
                setIsSwitchChecked(false);
              //
              e.target.checked && setIsChecked(true);
              !e.target.checked && setIsChecked(false);
            }}
            className={`${classes.toggleInput}  `}></input>
        )}
        {theme && (
          <label
            className={` ${classes.toggleLabel}`}
            style={{ backgroundColor: isChecked && theme }}
            htmlFor={id}></label>
        )}
      </div>
      {subTitle && (
        <div className="display_subTitle--light leading-tight ml-2">
          {subTitle}
        </div>
      )}
    </div>
  );
}
