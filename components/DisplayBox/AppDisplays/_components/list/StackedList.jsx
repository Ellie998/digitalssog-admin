export default function StackedList({
  className,
  title,
  subTitle,
  onClick,
  children,
  id,
}) {
  return (
    <>
      <div
        key={id}
        className={`w-50 cursor-pointer hover:bg-gray-100 py-1 ${className}`}
        onClick={onClick}>
        {/* title */}
        {title !== undefined && (
          <div className={`display_title  ${title.className}`}>
            {title.content}
          </div>
        )}
        {/* subTitle */}
        {subTitle !== undefined && (
          <div className={`display_subTitle--light ${subTitle.className}`}>
            {subTitle.content}
          </div>
        )}
      </div>
      {children}
    </>
  );
}
