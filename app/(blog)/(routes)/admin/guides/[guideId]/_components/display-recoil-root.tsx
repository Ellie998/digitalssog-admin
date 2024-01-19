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
import { Screen } from '@prisma/client';
import { GuideWithGuideComponentWithScreenElements, TemplateWithScreensNameAndId } from '@/lib/db';

const DisplayRecoilRoot = ({
  templates,
  screens,
  guide,
}: {
  templates: TemplateWithScreensNameAndId[];
  screens: Screen[];
  guide: GuideWithGuideComponentWithScreenElements | null;
}) => {
  return (
    <RecoilRoot>
      <ResizablePanelGroup direction="horizontal" className="min-h-[500px] border ">
        <ResizablePanel className="flex ">
          <>
            <div className="flex flex-col w-16 border-r min-h-[500px]  justify-around items-center  bg-slate-50">
              <CanvasCategories />
            </div>
            <div className="">
              <CanvasCategoryDetail templates={templates} guide={guide} />
            </div>
          </>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="p-8">
          <CanvasPreview screens={screens} guide={guide} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </RecoilRoot>
  );
};

export default DisplayRecoilRoot;
