import TargetContent from "../TargetContent";
import classes from "./Tab.module.css";
/**iconItems is object contain tabname, clickedContent, content
 * textItems requires theme, clickEvent props
 */
export default function Tab({
  className,
  iconItems,
  textItems,
  theme,
  clickEvent,
  setClickedTab,
  defaultTab,
  clickedTab,
}) {
  return (
    <div
      className={`flex h-8 justify-around text-sm cursor-pointer transition-all items-center  delay-500 py-2 ${className}`}>
      {iconItems &&
        iconItems.map((item, i) => (
          <TargetContent
            targetOption={
              defaultTab === item.tabname && clickedTab !== item.tabname
            }
            key={`tabName${i}`}
            onClick={(e) => {
              setClickedTab(e.target.dataset.tabname);
            }}>
            <i
              data-tabname={item.tabname}
              className={
                clickedTab === item.tabname ? item.clickedContent : item.content
              }></i>
          </TargetContent>
        ))}
      {textItems &&
        textItems.map((item, i) => (
          <TargetContent
            key={i}
            targetOption={defaultTab === item && clickedTab !== item}
            className={` ${
              clickedTab === item
                ? `text-${theme} ${classes[`${clickEvent}`]}`
                : ""
            }`}
            onClick={() => {
              setClickedTab(item);
            }}>
            {item}
          </TargetContent>
        ))}
    </div>
  );
}
