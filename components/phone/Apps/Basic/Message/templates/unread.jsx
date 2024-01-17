import classes from "./unread.module.css";

import TargetContent from "@/components/DisplayBox/AppDisplays/_components/TargetContent";
import StackedList_Profile from "@/components/DisplayBox/AppDisplays/_components/list/StackedList_Profile";
import Phone from "@/components/phone/molecules/phone";

function Unread() {
  return (
    <Phone>
      <section className={classes.layout}>
        <div className={classes.header}>
          <div>읽지 않은 메시지</div>
          <div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>

        <TargetContent targetOption={true} isNextDescriptionLink={true}>
          <StackedList_Profile
            profile={{ className: "bg-gray-200", content: "홍" }}
            title={{ className: "ml-1", content: "홍길동" }}
            info={{
              className: "text-end",
              content: "오전 8:03",
            }}
            subTitle={{
              className: "ml-1 col-end-6",
              content: "결혼식 장소 정보입니다...",
            }}
            subInfo={{
              className: "alert--yellow",
              content: "1",
            }}></StackedList_Profile>
        </TargetContent>

        {/* </div> */}
      </section>
    </Phone>
  );
}

export default Unread;
