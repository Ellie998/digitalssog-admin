import Phone from "stories/phone/molecules/Phone";
import classes from "./VideoCallConnected.module.css";

const VideoCallConnected = () => {
  return (
    <Phone>
      <section className={classes.layout}>
        <div className={classes.headerNav}>
          <div>
            <i className="bi bi-camera-video-fill"></i>
            00:12
          </div>
          <div>
            <i className="bi bi-telephone-fill"></i>
          </div>
          <div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className={classes.phoneNum}>
          <div>010-0000-0000</div>
        </div>
        <div className={classes.main_center}>☺</div>
        <div className={classes["main_subOptionLayout"]}>
          <div className={classes["main_subOption"]}>
            {/* <i className="bi bi-lock"></i> */}
            <i className="bi bi-unlock"></i>
          </div>
          <div className={classes["main_subOption"]}>
            AR 효과
            <div>
              <i className="bi bi-chevron-up"></i>
            </div>
          </div>
          <div className={classes["main_subOption"]}>
            <i className="bi bi-arrows-angle-contract"></i>
          </div>
        </div>
        <div className={classes.main_optionBox}>
          <div className={classes["main_optionIcon--selected"]}>
            <i className="bi bi-camera-video-fill"></i> <p>카메라</p>
            {/* <i className="bi bi-camera-video-off"></i> */}
          </div>
          <div>
            <i className="bi bi-arrow-repeat"></i> <p>전환</p>
          </div>

          <div className={classes["main_optionIcon--redBack"]}>
            <i className="bi bi-telephone-x"></i>
          </div>
          <div>
            <i className="bi bi-mic-mute"></i> <p>내 소리 차단</p>
          </div>
          <div className={classes["main_optionIcon--selected"]}>
            <i className="bi bi-volume-up-fill"></i> <p>스피커</p>
          </div>
        </div>
      </section>
    </Phone>
  );
};

export default VideoCallConnected;
