export default function AppTitle_center({
  className,
  title,
  subTitle,
  children,
}) {
  return (
    <div
      className={`mt-5 h-[60px] text-center align-middle ${
        className ? className : ""
      }`}>
      {title && (
        <div
          className={`font-medium text-lg ${
            title.className !== undefined ? title.className : ""
          }`}>
          {title.content}
        </div>
      )}
      {subTitle && (
        <div
          className={`text-xs text-gray-400 ${
            subTitle.className !== undefined ? subTitle.className : ""
          }`}>
          {subTitle.content}
        </div>
      )}
      {children}
    </div>
  );
}
