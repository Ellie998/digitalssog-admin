import { db } from "@/lib/db";
import GuideDescriptionForm from "./_components/guide-description-form";
import GuideOrderForm from "./_components/guide-order-form";
import GuideComponentButton from "./_components/guide-components-button";

import DisplayRecoilRoot from "./_components/display-recoil-root";

const GuideEditPage = async ({
  params,
}: {
  params: {
    guideId: string;
  };
}) => {
  const guide = await db.guide.findUnique({
    where: {
      id: params.guideId,
    },
    include: {
      guide_component: true,
    },
  });

  return (
    <div className="flex flex-col pb-40 gap-y-20">
      <h1 className="text-2xl text-center">{params.guideId}</h1>
      <div className="ml-auto">
        <GuideComponentButton
          guide={guide}
          guide_component_id={guide?.guide_component?.id || null}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        <GuideDescriptionForm
          id={params.guideId}
          description={guide?.description || ""}
        />
        <GuideOrderForm id={params.guideId} order={guide?.order || null} />
      </div>
      {/* guide component */}

      <DisplayRecoilRoot
        guide_component_id={guide?.guide_component?.id || null}
      />
    </div>
  );
};

export default GuideEditPage;
