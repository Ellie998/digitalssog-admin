import { db } from '@/lib/db';
import ScreenRecoilRoot from './_components/screen-recoil-root';

const ScreenIdPage = async ({
  params,
}: {
  params: {
    screenId: string;
  };
}) => {
  const screenWithAllTemplate = await db.screen.findUnique({
    where: {
      id: params.screenId,
    },
    include: {
      template: true,
    },
  });
  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-xl text-center">
        <b>{params.screenId}</b> 스크린의 Edit Page
      </h1>
      <div className=" ml-auto">
        <div>created_at : {screenWithAllTemplate?.created_at + ''}</div>
        <div>updated_at : {screenWithAllTemplate?.updated_at + ''}</div>
      </div>

      <ScreenRecoilRoot data={screenWithAllTemplate} />
    </div>
  );
};

export default ScreenIdPage;
