import AppHeader from "@/components/DisplayBox/AppDisplays/_components/layout/AppHeader";
import classes from "./CallConnected.module.css";
import { AppTitle_center } from "@/components/DisplayBox/AppDisplays/_components/layout/AppTitle_center";
import { Phone } from "@/components/phone/molecules/phone";

const CallConnected = ({ appName_basic, appName_kakaotalk }) => {
  return (
    <Phone>
      {appName_basic && (
        <section className={`text-center w-full`}>
          <AppHeader rightItem={["..."]} className={`text-lg font-bold`} />
          <AppTitle_center
            title={{ content: "010-0000-0000", className: "text-sm" }}
          />

          <div className={`${classes.main_optionBox} mt-[30px] `}>
            <div>
              <i className="bi bi-cassette-fill"></i> <div>녹음</div>
            </div>
            <div>
              <i className="bi bi-camera-video-fill"></i> <div>영상통화</div>
            </div>
            <div>
              <i className="bi bi-bluetooth"></i> <div>블루투스</div>
            </div>

            <div>
              <i className="bi bi-volume-up-fill"></i> <div>스피커</div>
            </div>
            <div>
              <i className="bi bi-mic-mute-fill"></i> <div>내 소리 차단</div>
            </div>
            <div>
              <i className="bi bi-grip-horizontal"></i>
              <div>키패드</div>
            </div>

            <div className={classes["main_optionIcon--redBack"]}>
              <i className="bi bi-telephone-x-fill"></i>
            </div>
          </div>
        </section>
      )}
      {appName_kakaotalk && (
        <section className={`text-center w-full`}>
          <div className={`${classes["profileBox"]} mt-[10px]}`}>
            <div>
              <i className="bi bi-person-fill"></i>
            </div>
          </div>

          <div className={classes.content_title}>
            <div>철수</div>
          </div>
          <div className={classes["content_sub"]}>00:04</div>
          <div className={`${classes["main_optionBox--kakao"]} mt-[10px]}`}>
            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-mic-mute-fill"></i>
              </div>
              <div>음소거</div>
            </div>
            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-volume-up-fill"></i>
              </div>
              <div>스피커</div>
            </div>
            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-filter"></i>
              </div>
              <div>음성필터</div>
            </div>
            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-plus-lg"></i>
              </div>
              <div>대화상대 초대</div>
            </div>

            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-arrows-angle-contract"></i>
              </div>
              <div>화면 숨김</div>
            </div>
            <div>
              <div className={classes["main_optionIcon--border"]}>
                <i className="bi bi-camera-video-fill"></i>
              </div>
              <div>페이스톡</div>
            </div>
          </div>
          <div className={classes["main_optionIcon--redBack"]}>
            <i className="bi bi-telephone-x-fill"></i>
          </div>
        </section>
      )}
    </Phone>
  );
};

export default CallConnected;
