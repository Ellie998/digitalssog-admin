'use client';
import React from 'react';

import { useRecoilValue } from 'recoil';
import { canvasCategoryState } from './canvas-atom';

import DetailBg from './(category-details)/detail-bg';
// import DetailText from './(category-details)/detail-text';
import DetailElement from './(category-details)/detail-element';

import ScreenAppNameForm from './(category-details)/(template)/appName_form';
import ScreenVersionForm from './(category-details)/(template)/version_form';
import ScreenNameForm from './(category-details)/(template)/name_form';
//
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';

const CanvasCategoryDetail = ({
  data,
}: {
  data?: {
    id: string;
    name: string;
    appName: string;
    version: string;
    main_color: string;
    sub_color: string;
    templateId: string;
    created_date: string;
    updated_date: string;
  };
}) => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  switch (canvasCategory) {
    case '템플릿':
      return (
        <>
          <ScreenNameForm name={data?.name || ''} id={data?.id || ''} />
          <ScreenAppNameForm appName={data?.appName || ''} id={data?.id || ''} />
          <ScreenVersionForm version={data?.version || ''} id={data?.id || ''} />
        </>
      );
      break;
    case '요소':
      return <DetailElement />;
      break;

    case '배경':
      return <DetailBg />;
      break;
    case '테마':
      return (
        <>
          <div className="py-4 flex flex-col gap-y-2">
            <Label htmlFor="main_color" className="text-lg  ">
              Main Color : {data?.main_color}
            </Label>
            <Input type="color" value={data?.main_color} id="main_color" />
          </div>
          <div className="py-4 flex flex-col gap-y-2">
            <Label htmlFor="sub_color" className="text-lg  ">
              Sub Color : {data?.sub_color}
            </Label>
            <Input type="color" value={data?.sub_color} id={'sub_color'} />
          </div>
          <Button variant={'secondary'} className="block mt-20 ml-auto">
            <Link href={`/admin/templates/${data?.templateId}`}>Go To Edit Template</Link>
          </Button>
        </>
      );
      break;
    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
