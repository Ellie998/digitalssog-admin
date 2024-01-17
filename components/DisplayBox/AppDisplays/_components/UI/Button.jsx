export default function Button({
  className,
  btnColor,
  textColor,
  borderColor,
  width,
  onClick,
  content,
}) {
  return (
    <div
      className={`rounded p-1 text-center z-0 hover:cursor-pointer mx-auto ${className}`}
      onClick={onClick}
      style={{
        width: width ? width : "160px",
        backgroundColor: btnColor ? btnColor : "rgb(255, 255, 255)",
        color: textColor ? textColor : "rgb(30, 30, 30)",
        border: borderColor
          ? `1px solid ${borderColor}`
          : "1px solid transparent",
      }}>
      {content}
    </div>
  );
}
