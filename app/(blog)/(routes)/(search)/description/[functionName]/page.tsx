import { db } from '@/lib/db';
import { decodeUrl } from '@/lib/utils';

import DescriptionIntro from './_components/description-intro';
import DescriptionMain from './_components/description-main';

// or Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: {
    functionName: string;
  };
}) {
  const functionName = decodeUrl(params.functionName);

  return {
    // metadataBase: "/",
    charset: 'utf-8',
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    title: `${functionName} 기능 사용법`,
    description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
    url: `https://digitalssog.com/description/${functionName}`,
    verification: {
      naver: '55145f147d68935311d0493b0428d0a9843e5eb9',
    },
    robots: {
      index: true,
      follow: true,
    },
    keywords: ['digital', 'app', 'function', 'description', 'tech'],
    icons: {
      icon: [
        { url: '/assets/favicon/favicon.ico' },
        {
          url: '/assets/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/assets/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/assets/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      manifest: '/assets/favicon/site.webmanifest',
    },
    openGraph: {
      site_name: 'DigitalSSOG Description',
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionName}`,
      type: 'website',
      images: [
        {
          url: 'https://digitalssog.com/assets/ogTitle.png',
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      title: `${functionName} 기능 사용법 - 디지털쏙`,
      description: `${functionName} 기능을 사용하는 여러가지 방법을 공유합니다.`,
      url: `https://digitalssog.com/description/${functionName}`,
      type: 'website',
      images: [
        {
          url: 'https://digitalssog.com/assets/ogTitle.png',
          width: 800,
          height: 400,
        },
      ],
    },
  };
}

export default async function FunctionDescriptionPage({
  params,
  searchParams,
}: {
  params: {
    functionName: string;
  };
  searchParams: {
    appName?: string;
    methodOrder?: string;
    guideOrder?: string;
  };
}) {
  const functionData = await db.function.findUnique({
    where: {
      title: decodeUrl(params.functionName),
    },
  });

  const methods = await db.method.findMany({
    where: {
      functionName: decodeUrl(params.functionName),
    },
    include: {
      guides: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  });

  const apps = methods.map((methods) => methods.appName);
  const uniqueApps = apps.filter((app, i) => apps.indexOf(app) === i);

  return (
    <div className="w-full h-full">
      <DescriptionIntro functionData={functionData} uniqueApps={uniqueApps} />
      {/* add guide db */}
      <DescriptionMain
        functionData={functionData}
        uniqueApps={uniqueApps}
        methods={methods}
        params={params}
        searchParams={searchParams}
      />
    </div>
  );
}
