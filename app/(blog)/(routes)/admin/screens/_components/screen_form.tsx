import ScreenTable from './screen-table';

const ScreenForm = async ({ id }: { id?: string }) => {
  const screenData: Array<{
    id: string;
    name: string;
    appName: string;
    version: string;
    main_color: string;
    sub_color: string;
    templateId: string;
    created_date: string;
    updated_date: string;
  }> = [
    {
      id: id ? id : 'dks-23123-dasmlfsm',
      name: '스크린1',
      appName: '기본',
      version: '0.1.2',
      main_color: '#f18282',
      sub_color: '#ffffff',
      templateId: 'djodwj9-dsajdk-dadlj',
      created_date: '2023.01.23',
      updated_date: '2023.10.23',
    },
  ];

  return (
    <div className="w-full shadow-md">
      <ScreenTable
        data={screenData?.map((data) => ({
          id: data.id,
          name: data.name,
          appName: data.appName,
          version: data.version,
          main_color: data.main_color,
          sub_color: data.sub_color,
          templateId: data.templateId,
          created_date: data.created_date,
          updated_date: data.updated_date,
        }))}
      />
    </div>
  );
};

export default ScreenForm;
