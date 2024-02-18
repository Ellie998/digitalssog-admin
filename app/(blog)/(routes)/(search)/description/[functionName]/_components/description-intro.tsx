import { Function as FunctionData } from '@prisma/client';

import DescriptionBox from '@/components/description_box';
import DescriptionTitle from '@/components/description_title';

export default async function DescriptionIntro({
  functionData,
  uniqueApps,
}: {
  functionData: FunctionData | null;
  uniqueApps: Array<string | null>;
}) {
  return (
    <section className={`w-4/5 mx-auto text-center pt-10 pb-20`}>
      <DescriptionTitle>
        <b>{functionData ? `${functionData.icon} ${functionData.title} ` : ''}</b>
        기능 소개
      </DescriptionTitle>
      <ul className="flex flex-col items-center justify-center gap-8 mx-auto my-8 md:grid md:grid-cols-2">
        <li className="w-full" key={'description-box1'}>
          <DescriptionBox title="특징">{functionData?.description}</DescriptionBox>
        </li>
        <li className="w-full" key={'description-box2'}>
          <DescriptionBox title="관련 어플">
            {uniqueApps.map((appName) => (
              <div key={'releated_app_name_' + appName}>{appName}</div>
            ))}
          </DescriptionBox>
        </li>
      </ul>
    </section>
  );
}
