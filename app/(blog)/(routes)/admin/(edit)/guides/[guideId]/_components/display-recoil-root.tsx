/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';
// import ComponentSection from "./component-section";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import CanvasPreview from './canvas-preview';

import CanvasCategories from './(canvas)/canvas-categories';
import CanvasCategoryDetail from './(canvas)/canvas-category-detail';

const DisplayRecoilRoot = ({ guide_component_id }: { guide_component_id: string | null }) => {
  return (
    <RecoilRoot>
      {/* <ComponentSection guide_component_id={guide_component_id} /> */}
      <ResizablePanelGroup direction="horizontal" className="min-h-[500px] border ">
        <ResizablePanel className="flex ">
          <>
            <div className="flex flex-col w-16 border-r min-h-[500px]  justify-around items-center  bg-slate-50">
              <CanvasCategories />
            </div>
            <div className="">
              <CanvasCategoryDetail />
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

export default DisplayRecoilRoot;
