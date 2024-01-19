import { db } from '@/lib/db';
import ScreenForm from '../../screens/_components/screen_form';
import TemplateAppNameForm from './_components/appName_form';
import TemplateMainColorForm from './_components/main_color_form';
import TemplateSubColorForm from './_components/sub_color_form';
import TemplateVersionForm from './_components/version_form';
const TemplateIdPage = async ({
  params,
}: {
  params: {
    templateId: string;
  };
}) => {
  const templateData = await db.template.findUnique({ where: { id: params.templateId } });

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-20">
      <h1 className="text-xl text-center">
        <b>{params.templateId}</b> 템플릿의 Edit Page
      </h1>
      <div className="ml-auto">
        <div>created_at : {templateData?.created_at + ''}</div>
        <div>updated_at : {templateData?.updated_at + ''}</div>
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        <TemplateAppNameForm appName={templateData?.appName || ''} id={params.templateId} />
        <TemplateVersionForm version={templateData?.version || ''} id={params.templateId} />
        <TemplateMainColorForm main_color={templateData?.main_color || ''} id={params.templateId} />
        <TemplateSubColorForm sub_color={templateData?.sub_color || ''} id={params.templateId} />

        <div className="col-start-1 col-end-3">
          <ScreenForm templateId={params.templateId} />
        </div>
      </div>
    </div>
  );
};

export default TemplateIdPage;
