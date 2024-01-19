'use client';
import React from 'react';

import { useRecoilValue } from 'recoil';
import { canvasCategoryState } from './canvas-atom';

import DetailTargetElement from './(category-details)/detail-target-element';
import DetailTemplate from './(category-details)/detail-template';

import { TemplateWithScreensNameAndId } from '@/lib/db';

const CanvasCategoryDetail = ({
  templates,
  guideId,
}: {
  templates: TemplateWithScreensNameAndId[];
  guideId: string;
}) => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  switch (canvasCategory) {
    case '템플릿':
      return <DetailTemplate templates={templates} />;
      break;
    case '타겟 선택':
      return <DetailTargetElement guideId={guideId} />;

      break;

    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
