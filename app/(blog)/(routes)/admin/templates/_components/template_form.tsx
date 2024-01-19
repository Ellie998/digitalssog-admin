import { db } from '@/lib/db';
import TemplateTable from './template-table';

const TemplateForm = async () => {
  const templateData = await db.template.findMany({
    where: {},
  });

  return (
    <div className="w-full shadow-md">
      <TemplateTable
        data={templateData?.map((data) => ({
          ...data,
        }))}
      />
    </div>
  );
};

export default TemplateForm;
