import Icon from "@/components/phone/atoms/icon";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";

const ShoppingTab = () => {
  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">쇼핑</div>]}
        rightItem={[
          <Icon name="bag-check" className="text-sm" />,
          <Icon name="gear" className="ml-1 text-sm" />,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default ShoppingTab;
