import { db } from '@/lib/db';
import ScreenTable from './screen-table';

const ScreenForm = async ({ templateId }: { templateId?: string }) => {
  const screenData = await db.screen.findMany({
    where: {
      template_id: templateId,
    },
    include: {
      template: {
        select: {
          id: true,
          appName: true,
          version: true,
          phoneName: true,
        },
      },
    },
  });

  return (
    <div className="w-full shadow-md">
      <ScreenTable
        templateId={templateId}
        data={screenData?.map((data) => ({
          ...data,
        }))}
      />
    </div>
  );
};

export default ScreenForm;
