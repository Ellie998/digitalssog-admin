/* eslint-disable no-unused-vars */

import Icon from "@/components/phone/atoms/icon";
import NoScrollBar from "@/components/DisplayBox/AppDisplays/_components/layout/NoScrollBar";
import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";

import TargetBox from "@/components/phone/atoms/target-box";

const ETCTab = ({ target = { setting: false }, tab }) => {
  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">더보기</div>]}
        rightItem={[
          <Icon name="search" className="text-sm" />,
          <Icon name="upc-scan" className="ml-1 text-sm" />,
          <TargetBox condition={target.setting && tab}>
            <Icon name="gear" className="ml-1 text-sm" />
          </TargetBox>,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default ETCTab;
