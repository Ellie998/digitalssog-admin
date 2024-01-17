export default function DownUp({
  className,
  backDropClassName,
  onClickBackDrop,
  children,
  downUpClassName,
}) {
  return (
    <div
      className={`${downUpClassName} h-[305px] absolute animate-opacity0to100 z-50 flex flex-col justify-between bg-[#2a2a2a6a]`}>
      <div
        className={`${backDropClassName}  w-[175px] h-full`}
        onClick={onClickBackDrop}></div>
      <div
        className={` ${className} bg-gray-100  w-[175px] h-max px-[10px] pb-[10px] pt-[5px] rounded-t-lg `}>
        <div className="bg-gray-300 w-[20px] h-0.5 mx-auto mb-1 rounded-sm"></div>
        <div className={`p-1 bg-white rounded-sm drop-shadow-sm`}>
          {children}
        </div>
      </div>
    </div>
  );
}
