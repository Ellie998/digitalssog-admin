import classes from "./KakaoProfileDetail.module.css";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

function KakaoProfileDetail() {
  return (
    <section className={classes.layout}>
      <section className={classes.mainLayout}>
        <div className={classes.profileImg}>
          <i className="bi bi-person-fill"></i>
        </div>
        <div className={classes["text_center--white"]}>철수</div>
      </section>

      <div className={classes.listLayout}>
        <div>
          <i className="bi bi-chat-fill"></i>
          <div className={classes.iconDescription}>1:1채팅</div>
        </div>
        <div>
          <TargetContent targetOption={true} isNextDescriptionLink={true}>
            <i className="bi bi-telephone-fill"></i>
            <div className={classes.iconDescription}>통화하기</div>
          </TargetContent>
        </div>
        <div>
          <i className="bi bi-camera-video-fill"></i>
          <div className={classes.iconDescription}>페이스톡</div>
        </div>
        <div>
          <i className="bi bi-quote"></i>
          <div className={classes.iconDescription}>스토리</div>
        </div>
      </div>
    </section>
  );
}

export default KakaoProfileDetail;
