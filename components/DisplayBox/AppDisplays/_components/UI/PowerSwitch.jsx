import { cn } from "@/lib/utils";
import Icon from "./Icon";

export default function PowerSwitch({ className, onClick, iconClassName }) {
  return (
    <div className={cn(` cursor-pointer`, className)} onClick={onClick}>
      <Icon
        name="power"
        className={cn(
          `text-2xl block text-center text-white `,
          iconClassName
        )}></Icon>
    </div>
  );
}
