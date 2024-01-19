'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import CanvasPreview from './canvas-preview';

import CanvasCategories from './(canvas)/canvas-categories';
import CanvasCategoryDetail from './(canvas)/canvas-category-detail';
import { ScreenWithAllTemplate } from '@/lib/db';

const ScreenRecoilRoot = ({ data }: { data: ScreenWithAllTemplate | null }) => {
  return (
    <RecoilRoot>
      <ResizablePanelGroup direction="horizontal" className="min-h-[500px] border ">
        <ResizablePanel className="flex w-full ">
          <>
            <div className="flex flex-col w-16 border-r min-h-[500px]  justify-around items-center  bg-slate-50">
              <CanvasCategories />
            </div>
            <div className="p-6 h-full w-full">
              <CanvasCategoryDetail data={data} />
            </div>
          </>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="p-8">
          <CanvasPreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </RecoilRoot>
  );
};

export default ScreenRecoilRoot;
