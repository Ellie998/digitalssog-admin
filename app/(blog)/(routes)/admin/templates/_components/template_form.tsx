import { db } from '@/lib/db';
import TemplateTable from './template-table';

const TemplateForm = async () => {
  const templateWithScreenId = await db.template.findMany({
    where: {},
    include: {
      screens: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <div className="w-full shadow-md">
      <TemplateTable
        data={templateWithScreenId?.map((data) => ({
          ...data,
        }))}
      />
    </div>
  );
};

export default TemplateForm;
