import { db } from '@/lib/db';
import TemplateTable from './template-table';

const TemplateForm = async () => {
  const templateWithScreenWithhoutGuideComId = await db.template.findMany({
    where: {},
    include: {
      screens: {
        select: {
          id: true,
          name: true,
          bgColor: true,
          elements: true,
        },
      },
    },
  });

  return (
    <div className="w-full shadow-md">
      <TemplateTable
        data={templateWithScreenWithhoutGuideComId?.map((data) => ({
          ...data,
        }))}
      />
    </div>
  );
};

export default TemplateForm;
