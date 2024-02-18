import { db } from "@/lib/db";

import FunctionTable from "./function-table";

const FunctionForm = async () => {
  const functionData = await db.function.findMany({
    include: {
      apps: true,
      methods: true,
    },
  });

  return (
    <div className="w-full shadow-md">
      <FunctionTable
        data={functionData?.map((data) => ({
          id: data.id,
          categoryName: data.categoryName,
          title: data.title,
          icon: data.icon,
          description: data.description,
          methodLength: data.methods.length,
        }))}
      />
    </div>
  );
};

export default FunctionForm;
