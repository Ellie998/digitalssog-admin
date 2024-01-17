import TemplateAppNameForm from './_components/appName_form';
import TemplateNameForm from './_components/name_form';
import TemplateVersionForm from './_components/version_form';

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
    created_date: string;
    updated_date: string;
  } = {
    id: 'dks-23123-dasmlfsm',
    name: '스크린1',
    appName: '기본',
    version: '0.1.2',
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
      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        <TemplateNameForm name={screenData?.name || ''} id={params.screenId} />
        <TemplateAppNameForm appName={screenData?.appName || ''} id={params.screenId} />
        <TemplateVersionForm version={screenData?.version || ''} id={params.screenId} />
      </div>
    </div>
  );
};

export default ScreenIdPage;
