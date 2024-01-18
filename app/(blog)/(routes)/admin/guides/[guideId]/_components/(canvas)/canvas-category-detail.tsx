'use client';
import React from 'react';

import { useRecoilValue } from 'recoil';
import { canvasCategoryState } from './canvas-atom';

import DetailTargetElement from './(category-details)/detail-target-element';
import DetailTemplate from './(category-details)/detail-template';

const CanvasCategoryDetail = () => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  switch (canvasCategory) {
    case '템플릿':
      return <DetailTemplate />;
      break;
    case '타겟 선택':
      return <DetailTargetElement />;

      break;

    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
