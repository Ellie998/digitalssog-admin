'use client';
import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { bgColorState } from './atoms';
import {
  canvasCategoryState,
  elementDatasState,
  elementDataType,
  selectedElementState,
} from './(canvas)/canvas-atom';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import Icon from '@/components/DisplayBox/AppDisplays/_components/UI/Icon';

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const [elementDatas, setElementDatas] = useRecoilState(elementDatasState);

  const setCanvasCategory = useSetRecoilState(canvasCategoryState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanvasCategory('요소');
    setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
  };

  useEffect(() => {}, [elementDatas, selectedElement]);

  const editElement = (editElement: elementDataType) => {
    return setElementDatas((prevElements): elementDataType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        <div className="absolute ">
          {elementDatas.map((data, i) => (
            <div
              key={data.type + i}
              style={{
                top: data.style.top,
                left: data.style.left,
                zIndex: data.style.zIndex,
              }}
              className={cn(
                'cursor-pointer w-fit h-fit absolute',
                selectedElement === `${data.id}` && 'border-2 border-blue-400 ',
              )}
              draggable
              onDragEnd={(e) => {
                editElement({
                  id: e.currentTarget.id.replace('_container', ''),
                  type: data.type,
                  content: data.content,
                  style: {
                    ...data.style,
                    top: `${Number(data.style.top.replace('px', '')) + e.nativeEvent.offsetY}px`,
                    left: `${Number(data.style.left.replace('px', '')) + e.nativeEvent.offsetX}px`,
                  },
                });
              }}
              onDragStart={(e) => {
                setCanvasCategory('요소');
                setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
              }}
              onClick={handleClick}
              id={data.id + '_container'}
            >
              {data.type === 'icon' && (
                <Icon
                  style={{ ...data.style }}
                  id={undefined}
                  name={data.content || 'circle'}
                  className={undefined}
                  onClick={undefined}
                />
              )}
              {data.type === 'text' && (
                <div
                  // @ts-expect-error: textAlign 할당 타입 문제
                  style={{ ...data.style }}
                  id={undefined}
                  name={data.content || 'empty...'}
                  className={undefined}
                  onClick={undefined}
                >
                  {data.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
