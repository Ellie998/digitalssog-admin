// import { useState } from "react";

/** insert color rgb og rgba of #... into theme prop */
export default function Radio({ title, id }) {
  // export default function Radio({ title, onChange, label, id }) {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={`flex text-2xs my-2`}>
      <input className="mr-[10px]" id={id} type="radio"></input>
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
