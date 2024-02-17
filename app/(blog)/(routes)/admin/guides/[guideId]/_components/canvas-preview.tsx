'use client';

import { cn } from '@/lib/utils';

import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import Icon from '@/components/DisplayBox/AppDisplays/_components/UI/Icon';
import { selectedScreenDataState, targetDataState } from './(canvas)/canvas-atom';
import { useRecoilState } from 'recoil';
import { Screen } from '@prisma/client';
import { GuideWithGuideComponentWithScreenElements, elementDataType } from '@/lib/db';
import { useEffect } from 'react';

const CanvasPreview = ({
  screens,
  guide,
}: {
  screens: Screen[];
  guide: GuideWithGuideComponentWithScreenElements | null;
}) => {
  const [targetData, setTargetData] = useRecoilState(targetDataState);
  const [selectedScreenData, setSelectedScreenData] = useRecoilState(selectedScreenDataState);
  useEffect(() => {
    setTargetData(JSON.parse(guide?.guide_component?.targetBox || '{}'));
    setSelectedScreenData({
      id: guide?.guide_component?.screen?.id || '',
      name: guide?.guide_component?.screen?.name || '',
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <PhoneBackground>
        <PhoneHeader backgroundColor={screens[0].bgColor || ''} />
        <PhoneDisplay
          backgroundColor={screens[0].bgColor || ''}
          main={undefined}
          onClick={undefined}
        >
          <div className="absolute ">
            {JSON.parse(
              screens.find((screen) => screen.id === selectedScreenData.id)?.elements || '[]',
            ).map((data: elementDataType, i: number) => (
              <div
                key={data.type + i}
                style={{ top: data.style.top, left: data.style.left, zIndex: data.style.zIndex }}
                className={cn('cursor-pointer w-fit h-fit absolute')}
                draggable
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

            <div
              style={{
                top: targetData.top,
                left: targetData.left,
                zIndex: targetData.zIndex,
                width: targetData.width,
                height: targetData.height,
              }}
              className={cn('cursor-pointer w-fit h-fit absolute border-2 border-red-500')}
              draggable
              onDragEnd={(e) => {
                setTargetData((prevValue) => ({
                  ...prevValue,
                  top: `${Number(targetData.top.replace('px', '')) + e.nativeEvent.offsetY}px`,
                  left: `${Number(targetData.left.replace('px', '')) + e.nativeEvent.offsetX}px`,
                }));
              }}
            />
          </div>
        </PhoneDisplay>
        <PhoneNav />
      </PhoneBackground>
    </div>
  );
};

export default CanvasPreview;
