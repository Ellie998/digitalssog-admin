import TargetBox from "@/components/phone/atoms/target-box";
import Icon from "@/components/phone/atoms/icon";

export default function BackBtn({
  style,
  condition,
  isNextTriger,
  onClick,
  isBackTriger,
}) {
  return (
    <TargetBox
      onClick={onClick}
      condition={condition}
      isNextTriger={isNextTriger}
      isBackTriger={isBackTriger}>
      <Icon name="arrow-left" style={style} />
    </TargetBox>
  );
}
