import { db } from "@/lib/db";
import MethodTable from "./method-table";
import { decodeUrl } from "@/lib/utils";

const FunctionMethodForm = async ({
  functionName,
}: {
  functionName: string;
}) => {
  const methods = await db.method.findMany({
    where: {
      functionName: decodeUrl(functionName),
    },
    include: { guides: true },
    orderBy: [
      {
        appName: "asc",
      },
      { order: "asc" },
    ],
  });

  return (
    <div className="w-full shadow-md">
      <MethodTable
        data={methods?.map((method) => ({
          id: method.id,
          order: method.order,
          description: method.description,
          guideLength: method.guides.length,
          appName: method.appName,
        }))}
        functionName={decodeUrl(functionName)}
      />
    </div>
  );
};

export default FunctionMethodForm;
