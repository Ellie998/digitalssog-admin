import { useContext } from "react";
//
import Home from "@/components/phone/Apps/Basic/home";
import DisplayError from "@/components/phone/organisms/Main/Display/display-error";
import Default from "@/components/phone/organisms/Main/default";
// call

import Main from "@/components/phone/Apps/KakaoTalk/templates/main";

import ETCSetting from "@/components/phone/Apps/KakaoTalk/templates/etc-setting";
import Setting_Display from "@/components/phone/Apps/KakaoTalk/templates/setting-display";
import Setting_FontSize from "@/components/phone/Apps/KakaoTalk/templates/setting-font-size";
import { UrlContext } from "@/components/phone/templates/display-box";

function KakaotalkSettings({ functionName, methodId, descriptionId }) {
  const { functionName_controlFontSize } = useContext(UrlContext);

  let choicedComponent = <Default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_controlFontSize:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ ETC: true }}
            target_ETC={{ setting: true }}
          />,
          <ETCSetting key="etc_setting" target={{ display: true }} />,
          <Setting_Display key="setting_display" target={{ fontSize: true }} />,
          <Setting_FontSize key="settig_fontsize" />,
        ][descriptionId];
      break;
    default:
      choicedComponent = <DisplayError />;
  }

  return choicedComponent;
}

export default KakaotalkSettings;
