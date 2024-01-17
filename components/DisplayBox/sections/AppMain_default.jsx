import { useContext, useState } from "react";
import UrlContext from "../../page_context/UrlContext";
import Button from "../AppDisplays/components/UI/Button";

import PowerSwitch from "../AppDisplays/components/UI/PowerSwitch";

function AppMain_default() {
  const { setMyAppName, setMyMethodId, setMyDescriptionId } =
    useContext(UrlContext);
  const [isClicked, setIsClicked] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const onClass = "gradient-background";
  const offClass = "bg-slate-950";

  return (
    <div
      className={`w-44 relative h-[382px] bottom-10 rounded-xl p-4 transition duration-100 ease-in-out ${
        startAnimation ? "animate-closeAnimation" : ""
      }
      ${!isClicked ? offClass : onClass} 
      `}>
      {!isClicked && (
        <div className="">
          <PowerSwitch
            className="relative mx-auto top-32"
            iconClassName=" hover:animate-bounce hover:animate-pulse"
            setIsClicked={() => {
              setStartAnimation(true);
              setTimeout(() => {
                setIsClicked(true);
              }, 300);
            }}></PowerSwitch>

          <div className="relative mx-auto top-40 text-center text-sm text-gray-200  hover:animate-pulse">
            전원 버튼을 클릭하면 <br></br>화면이 켜집니다.
          </div>
        </div>
      )}

      {isClicked && (
        <div className="my-auto  ">
          <div className="display_title ml-0 bg-[#fbfbfb79] px-4 py-9 mt-12 rounded-lg">
            <div className={`hover:font-bold mb-2  text-gray-900 flex`}>
              <p className="mr-1">1️⃣ </p>
              <p>화면을 누르면 실제 스마트폰과 동일하게 동작합니다.</p>
            </div>
            <div className={`hover:font-bold mb-4  text-gray-900 flex`}>
              <p className="mr-1">2️⃣ </p>
              <p>설명을 따라하며 기능을 체험할 수 있습니다.</p>
            </div>

            <Button
              className=" font-bold shadow-sm hover:shadow-xl"
              width="100%"
              btnColor="rgba(255, 255, 255, 0.532)"
              textColor="rgb(21, 21, 21)"
              content="기능 체험하기"
              onClick={(e) => {
                const appName =
                  e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children[1].firstChild.firstChild.innerText.split(
                    " 어플",
                    1
                  );
                setMyAppName(appName[0]);
                setMyMethodId("1");
                setMyDescriptionId("0");
              }}></Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppMain_default;
