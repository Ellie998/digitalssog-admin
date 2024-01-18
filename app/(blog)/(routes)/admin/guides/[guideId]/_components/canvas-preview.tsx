'use client';

import { cn } from '@/lib/utils';

import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import Icon from '@/components/DisplayBox/AppDisplays/_components/UI/Icon';
import { elementDataType, elementDatasState, screenDatasState } from './(canvas)/canvas-atom';
import { useRecoilValue } from 'recoil';

const CanvasPreview = () => {
  const screenDatas = useRecoilValue(screenDatasState);
  const elementDatas = useRecoilValue(elementDatasState);
  return (
    <div className="flex flex-col items-center justify-center">
      <PhoneBackground>
        <PhoneHeader backgroundColor={screenDatas[0].bgColor} />
        <PhoneDisplay backgroundColor={screenDatas[0].bgColor} main={undefined}>
          <div className="absolute ">
            {elementDatas.map((data: elementDataType, i: number) => (
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
          </div>
        </PhoneDisplay>
        <PhoneNav />
      </PhoneBackground>
    </div>
  );
};

export default CanvasPreview;
