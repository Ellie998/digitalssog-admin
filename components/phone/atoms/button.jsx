import TargetBox from "@/components/phone/atoms/target-box";

const Button = ({
  id = "button",
  style,
  onClick,
  children,
  isNextTriger = false,
  isBackTriger = false,
  condition = false,
}) => {
  return (
    <TargetBox
      id={id}
      style={{
        margin: "0.25rem auto 0 auto",

        color: "rgb(38 38 38)",
        textAlign: "start",
        fontWeight: "600",
        fontSize: "0.75rem",
        padding: "0 2px",
        ...style,
      }}
      onClick={onClick}
      isNextTriger={isNextTriger}
      isBackTriger={isBackTriger}
      condition={condition}>
      {children}
    </TargetBox>
  );
};
export default Button;
