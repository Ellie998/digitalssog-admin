'use client';
import React from 'react';

import { useRecoilValue } from 'recoil';
import { canvasCategoryState } from './canvas-atom';

import DetailBg from './(category-details)/detail-bg';
// import DetailText from './(category-details)/detail-text';
import DetailElement from './(category-details)/detail-element';

//
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import Link from 'next/link';

import { ScreenWithAllTemplate } from '@/lib/db';
import DetailTemplate from './(category-details)/detail-template';

const CanvasCategoryDetail = ({ data }: { data?: ScreenWithAllTemplate | null }) => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  switch (canvasCategory) {
    case '템플릿':
      return (
        <DetailTemplate
          name={data?.name || ''}
          id={data?.id || ''}
          version={data?.template?.version || ''}
          appName={data?.template?.appName || ''}
        />
      );
      break;
    case '요소':
      return <DetailElement />;
      break;

    case '배경':
      return <DetailBg id={data?.id || ''} bgColor={data?.bgColor || ''} />;
      break;
    case '테마':
      return (
        <>
          <div className="py-4 flex flex-col gap-y-2">
            <Label htmlFor="main_color" className="text-lg  ">
              Main Color : {data?.template?.main_color}
            </Label>
            <Input type="color" value={data?.template?.main_color || ''} id="main_color" />
          </div>
          <div className="py-4 flex flex-col gap-y-2">
            <Label htmlFor="sub_color" className="text-lg  ">
              Sub Color : {data?.template?.sub_color || ''}
            </Label>
            <Input type="color" value={data?.template?.sub_color || ''} id={'sub_color'} />
          </div>
          <Button variant={'secondary'} className="block mt-20 ml-auto">
            <Link href={`/admin/templates/${data?.template?.id}`}>Go To Edit Template</Link>
          </Button>
        </>
      );
      break;
    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
