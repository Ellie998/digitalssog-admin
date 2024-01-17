import IconBottom from "@/components/phone/molecules/icon-bottom";
import TargetBox from "@/components/phone/atoms/target-box";

const AppIcon = ({ id, name, condition, style, content, description }) => {
  return (
    <TargetBox condition={condition} style={{}}>
      <IconBottom
        style={{
          width: "30px",
          height: "fit-content",
          fontSize: "12px",
          letterSpacing: "-1px",
          wordSpacing: "0px",
        }}
        id={id}
        icon={{
          name: null || name,
          content: null || content,
          style: {
            width: "24px",
            height: "24px",
            fontSize: "16px",
            padding: "4px",
            borderRadius: "10px",
            ...style,
          },
        }}
        description={description && { content: description, style: {} }}
      />
    </TargetBox>
  );
};
export default AppIcon;
