'use client';
import React from 'react';

import { useRecoilValue } from 'recoil';
import { canvasCategoryState } from './canvas-atom';

import DetailTargetElement from './(category-details)/detail-target-element';
import DetailTemplate from './(category-details)/detail-template';

import { GuideWithGuideComponentWithScreenElements, TemplateWithScreensNameAndId } from '@/lib/db';

const CanvasCategoryDetail = ({
  templates,
  guide,
}: {
  templates: TemplateWithScreensNameAndId[];
  guide: GuideWithGuideComponentWithScreenElements | null;
}) => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  switch (canvasCategory) {
    case '템플릿':
      return <DetailTemplate templates={templates} guide={guide} />;
      break;
    case '타겟 선택':
      return <DetailTargetElement guide={guide} />;

      break;

    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
