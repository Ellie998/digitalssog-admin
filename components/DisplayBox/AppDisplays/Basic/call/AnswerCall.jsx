import TargetContent from "../../components/TargetContent";
import Icon from "../../components/UI/Icon";

const AnswerCall = ({ appName_basic, appName_kakaotalk }) => {
  const profileStyle = ` bg-kakaoBlue w-[40px] h-[40px] rounded-2xl mt-[50px] mx-auto flex justify-center items-end overflow-hidden`;
  return (
    <>
      {appName_basic && (
        <div className={` text-center w-full`}>
          <div className={` mt-[40px]`}>이름</div>
          <div className={`text-xs`}>010-0000-0000</div>
          <div className={`mt-[100px] text-base flex justify-around  `}>
            <TargetContent targetOption={true} isNextDescriptionLink={true}>
              <Icon
                name="telephone-fill"
                className={` w-[40px] h-[40px] shadow-xl rounded-full  text-blue-600 flex  flex-col justify-center m-1`}
              />
            </TargetContent>

            <Icon
              name="telephone-x-fill"
              className={` w-[40px] h-[40px] shadow-xl rounded-full  text-red-600 flex  flex-col justify-center m-1`}
            />
          </div>
          <div className={`mt-[20px]`}>
            <p>문자 보내기</p>
          </div>
        </div>
      )}
      {appName_kakaotalk && (
        <div className={` text-center w-full`}>
          <div className={`${profileStyle}`}>
            <Icon name="person-fill" className={`text-[#e5f5ff] text-2xl`} />
          </div>
          <div>철수</div>
          <div className={`text-xs text-gray-400`}>보이스톡 해요.</div>
          <div className={`mt-[80px] text-base flex justify-around `}>
            <Icon
              name="telephone-x-fill"
              className={` w-[40px] h-[40px] shadow-xl rounded-full  text-red-600 flex  flex-col justify-center m-1`}
            />

            <TargetContent targetOption={true} isNextDescriptionLink={true}>
              <Icon
                name="telephone-fill"
                className={` w-[40px] h-[40px] shadow-xl rounded-full  text-blue-600 flex  flex-col justify-center m-1`}
              />
            </TargetContent>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerCall;
