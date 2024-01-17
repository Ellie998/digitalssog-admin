import ScreenRecoilRoot from './_components/screen-recoil-root';

const ScreenIdPage = async ({
  params,
}: {
  params: {
    screenId: string;
  };
}) => {
  const screenData: {
    id: string;
    name: string;
    appName: string;
    version: string;
    main_color: string;
    sub_color: string;
    templateId: string;
    created_date: string;
    updated_date: string;
  } = {
    id: 'dks-23123-dasmlfsm',
    name: '스크린1',
    appName: '기본',
    version: '0.1.2',
    main_color: '#f18282',
    sub_color: '#ffffff',
    templateId: 'djodwj9-dsajdk-dadlj',
    created_date: '2023.01.23',
    updated_date: '2023.10.23',
  };

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-xl text-center">
        <b>{params.screenId}</b> 스크린의 Edit Page
      </h1>
      <div className=" ml-auto">
        created_at : {screenData.created_date}, updated_at : {screenData.updated_date}
      </div>

      <ScreenRecoilRoot data={screenData} />
    </div>
  );
};

export default ScreenIdPage;
