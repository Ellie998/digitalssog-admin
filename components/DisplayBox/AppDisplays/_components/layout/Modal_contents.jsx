import TargetContent from "../TargetContent";
import Modal from "../UI/Modal";

export default function Modal_contents({
  style,
  className,
  onClickBackDrop,
  title,
  subTitle,
  children,
  ButtonWrapStyle,
  cancelButton,
  submitButton,
  modalClassName,
  button,
}) {
  return (
    <Modal
      style={style}
      modalClassName={modalClassName}
      className={`${className} bg-white`}
      onClickBackDrop={onClickBackDrop}>
      <div className={`display_title ${title.className}`}>{title.content}</div>
      <div className={`display_subTitle--light ${subTitle.className}`}>
        {subTitle.content}
      </div>
      {children}
      {button && (
        <div className={`${ButtonWrapStyle}  flex justify-between`}>
          {button.map((item, i) => (
            <TargetContent
              key={i}
              targetOption={item.targetOption}
              isNextDescriptionLink={item.isNextDescriptionLink}
              className={`font-semibold cursor-pointer text-xs mt-1 px-0.5 ${
                item.className
              } ${i !== button.length - 1 ? "border-r border-gray-300" : ""}`}>
              {item.content}
            </TargetContent>
          ))}
        </div>
      )}
      {!button && (
        <div
          className={`${
            ButtonWrapStyle ? ButtonWrapStyle : "flex justify-end"
          }`}>
          <TargetContent
            className={`display_title--bold cursor-pointer ${cancelButton.className}`}
            onClick={onClickBackDrop}
            goBackDescription={cancelButton.goBackDescription}>
            {cancelButton.content}
          </TargetContent>
          <TargetContent
            targetOption={submitButton.targetOption}
            isNextDescriptionLink={submitButton.isNextDescriptionLink}>
            <div
              className={`display_title--bold cursor-pointer ${submitButton.className}`}>
              {submitButton.content}
            </div>
          </TargetContent>
        </div>
      )}
    </Modal>
  );
}

// kakao cancel text color text-blue-600
