import TargetContent from "../TargetContent";
import IconBottom from "@/components/phone/molecules/icon-bottom";

function Grid_4x4({ className, items, iconClassName_common, iconClassName }) {
  return (
    <div
      className={`${className} mt-1 mx-1 grid grid-cols-4 gap-y-1 rounded-lg p-2 animate-fadeInUp text-center`}>
      {items?.map((item, i) => (
        <TargetContent
          className={`cursor-pointer mx-auto`}
          key={i}
          targetOption={item.targetOption}
          isNextDescriptionLink={item.isNextDescriptionLink}
          onClick={item.onClick}>
          <IconBottom
            icon={{
              name: item.iconName,
              style: {
                fontSize: "12px",
                backgroundColor: item.backgroundColor
                  ? item.backgroundColor
                  : "white",
                padding: "6px",
                width: "fit-content",
                color: item.color ? item.color : "black",
              },
            }}
            description={{
              content: item.content,
              style: { fontSize: "10px", marginTop: "0.25rem" },
            }}
            className={`${iconClassName_common} ${
              iconClassName ? iconClassName[i] : ""
            } text-2xs`}
          />
        </TargetContent>
      ))}
    </div>
  );
}

export default Grid_4x4;
