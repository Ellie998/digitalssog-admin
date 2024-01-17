import TemplateTable from './template-table';

const TemplateForm = async () => {
  const templateData: Array<{
    id: string;
    appName: string;
    version: string;
    created_date: string;
    updated_date: string;
  }> = [
    {
      id: 'dasjldaj-dasdak-dmqlwd',
      appName: '기본',
      version: '0.1.2',
      created_date: '2023.01.23',
      updated_date: '2023.10.23',
    },
  ];

  return (
    <div className="w-full shadow-md">
      <TemplateTable
        data={templateData?.map((data) => ({
          id: data.id,
          appName: data.appName,
          version: data.version,
          created_date: data.created_date,
          updated_date: data.updated_date,
        }))}
      />
    </div>
  );
};

export default TemplateForm;
