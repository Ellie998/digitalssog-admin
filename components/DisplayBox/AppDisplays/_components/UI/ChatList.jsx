export default function ChatList({
  isSendList,
  isGetList,
  className,
  profile,
  name,
  message,

  timeStamp,
  onClick,
  children,
  onPointerDown,

  fontSize,
}) {
  return (
    <>
      {isGetList && (
        <div
          className={`grid grid-cols-6 w-fit max-w-90p cursor-pointer ${className}`}
          onClick={onClick}>
          {/* profile */}
          {profile !== undefined && (
            <div
              className={`col-start-1 col-end-2 row-start-1 row-end-2  self-center profileIconWrap ${profile.className}`}>
              {profile.content}
            </div>
          )}
          {/* name */}
          {name !== undefined && (
            <div
              style={{ fontSize: fontSize ? fontSize : null }}
              className={`text-xs text-left col-start-2 row-start-1 col-end-7
          row-end-2 ${name.className}`}>
              {name.content}
            </div>
          )}
          {/* message */}
          {message !== undefined && (
            <div
              style={{ fontSize: fontSize ? fontSize : null }}
              className={`text-xs w-fit text-gray-700 rounded-xl py-1 px-2  col-end-5  row-start-2 row-end-3 ${
                message.className
              }
              ${
                profile !== undefined && name !== undefined
                  ? "col-start-2"
                  : "col-start-1"
              }`}
              onPointerDown={onPointerDown}>
              {message.content}
            </div>
          )}

          {/* timeStamp */}
          {timeStamp !== undefined && (
            <div
              style={{ fontSize: fontSize ? fontSize : null }}
              className={`ml-1 text-2xs self-end row-start-2 row-end-3 col-start-5 col-end-7  ${timeStamp.className}`}>
              {timeStamp.content}
            </div>
          )}
        </div>
      )}
      {isSendList && (
        <div
          className={`ml-auto flex w-fit max-w-90p  cursor-pointer ${className}`}
          onClick={onClick}>
          {/* timeStamp */}
          {timeStamp !== undefined && (
            <div
              className={`mr-1 text-2xs text-end self-end ${timeStamp.className}`}>
              {timeStamp.content}
            </div>
          )}
          {/* message */}
          {message !== undefined && (
            <div
              className={`text-xs w-fit text-gray-700 rounded-xl py-1 px-2 ${message.className}`}
              onPointerDown={onPointerDown}>
              {message.content}
            </div>
          )}
        </div>
      )}
      {children}
    </>
  );
}
