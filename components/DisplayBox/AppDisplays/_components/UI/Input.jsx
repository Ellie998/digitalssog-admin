/** insert color rgb og rgba of #... into theme prop */
export default function Input({
  className,
  onChangeHandler,
  label,
  input,
  id,
}) {
  return (
    <div className={`hover:bg-gray-100 flex justify-between ${className}`}>
      <label htmlFor={id} className={`mr-[10px] ${label.className}`}>
        {label.content}
      </label>
      <input
        id={id}
        className={`indent-1  ${input.className}`}
        type={input.type}
        defaultValue={input.defaultValue}
        onChange={(e) => {
          onChangeHandler && onChangeHandler(e.target.value);
        }}
      />
    </div>
  );
}
