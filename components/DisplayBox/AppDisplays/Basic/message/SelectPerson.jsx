import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";

function SelectPerson({ target_person1, target_person2 }) {
  return (
    <NoScrollBar className={`bg-[#f1f1f1] w-[174px]`} height={`305px`}>
      <AppHeader leftItem={["대화 멤버 선택"]} className={`py-1`} />
      <StackedListWrap
        listTitle={{ content: "받는 사람", className: "text-gray-700" }}
        className={`border-none`}>
        <input
          type="text"
          placeholder="이름 또는 번호 입력"
          className={`text-sm  w-full rounded-2xl border-transparent bg-gray-300 indent-3`}></input>
      </StackedListWrap>

      <div className={`mt-[10px] bg-white rounded-xl h-max`}>
        <TargetContent
          targetOption={target_person1}
          isNextDescriptionLink={true}
          className={`p-1 border-b border-gray-200 mb-1`}
          isWidthFull>
          <StackedList_Profile
            profile={{ className: "bg-orange-400 text-white", content: "홍" }}
            title={{ className: "ml-1", content: "홍길동" }}
            subTitle={{
              className: "ml-1 col-end-6 text-neutral-700",
              content: "010-0000-0000",
            }}></StackedList_Profile>
        </TargetContent>

        <TargetContent
          isWidthFull
          targetOption={target_person2}
          isNextDescriptionLink={true}
          className={`p-1  mb-1 `}>
          <StackedList_Profile
            profile={{ className: "bg-orange-400 text-white", content: "홍" }}
            title={{ className: "ml-1", content: "홍길순" }}
            subTitle={{
              className: "ml-1 col-end-6 text-neutral-700",
              content: "010-0000-0000",
            }}></StackedList_Profile>
        </TargetContent>
      </div>
    </NoScrollBar>
  );
}

export default SelectPerson;
