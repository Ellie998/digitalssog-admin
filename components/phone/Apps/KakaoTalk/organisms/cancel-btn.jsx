import { default as CancelBtnDefault } from "stories/phone/atoms/CancelBtn";

const CancelBtn = ({ style, onClick, condition, children = "취소" }) => {
  return (
    <CancelBtnDefault
      condition={condition}
      onClick={onClick}
      style={{ ...style }}>
      {children}
    </CancelBtnDefault>
  );
};
export default CancelBtn;
