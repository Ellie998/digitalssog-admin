import { default as SubmitBtnDefault } from "stories/phone/atoms/SubmitBtn";

const SubmitBtn = ({ style, onClick, condition, children = "" }) => {
  return (
    <SubmitBtnDefault
      condition={condition}
      onClick={onClick}
      style={{ ...style }}>
      {children}
    </SubmitBtnDefault>
  );
};
export default SubmitBtn;
