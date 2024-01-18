'use client';
import React from 'react';

import { BsBox, BsFillGrid1X2Fill } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { canvasCategoryState, selectedElementState } from './canvas-atom';
import { cn } from '@/lib/utils';

const CanvasCategories = () => {
  const [canvasCategory, setCanvasCategory] = useRecoilState(canvasCategoryState);
  const setSelectedElement = useSetRecoilState(selectedElementState);
  const content = [
    {
      icon: <BsFillGrid1X2Fill />,
      text: '템플릿',
    },
    {
      icon: <BsBox />,
      text: '타겟 선택',
    },
  ];
  return (
    <>
      {content.map(({ text, icon }) => (
        <div
          key={text}
          className={cn(
            `flex flex-col items-center justify-center  w-16 py-2 rounded-sm cursor-pointer hover:border `,
            canvasCategory === text && 'bg-sky-100',
          )}
          onClick={() => {
            setCanvasCategory(text);
            setSelectedElement('');
          }}
        >
          {icon}
          {text}
        </div>
      ))}
    </>
  );
};

export default CanvasCategories;
