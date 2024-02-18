import { db } from "@/lib/db";
import ComponentCodeForm from "./_components/component-code-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GuideComponentEditPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const guide_component = await db.guide_component.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="flex flex-col px-10 pb-40 gap-y-10">
      <h1 className="text-2xl text-center">{guide_component?.id}</h1>
      <div className="ml-auto">
        <Button variant={"secondary"}>
          <Link href={`/admin/guides/${guide_component?.guideId}`}>
            Go To Linked Guide Page
          </Link>
        </Button>
      </div>
      <div className="">
        <ComponentCodeForm code="" id={params.id} />
      </div>
    </div>
  );
};

export default GuideComponentEditPage;
