'use client';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

import PhoneBackground from '@/components/my-ui/phone-background';
import PhoneDisplay from '@/components/my-ui/phone-display';
import PhoneHeader from '@/components/my-ui/phone-header';
import PhoneNav from '@/components/my-ui/phone-nav';
import Icon from '@/components/DisplayBox/AppDisplays/_components/UI/Icon';

import {
  bgColorState,
  canvasCategoryState,
  elementDatasState,
  elementDataType,
  screenNameState,
  selectedElementState,
} from './(canvas)/canvas-atom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'react-toastify';
import { ScreenWithAllTemplate } from '@/lib/db';

const CanvasPreview = ({ data }: { data?: ScreenWithAllTemplate | null }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [previreBgColor, setBgColor] = useRecoilState(bgColorState);
  const screenName = useRecoilValue(screenNameState);
  const [elementDatas, setElementDatas] = useRecoilState(elementDatasState);

  const setCanvasCategory = useSetRecoilState(canvasCategoryState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  // type : icon,

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setCanvasCategory('요소');
    setSelectedElement(e.currentTarget.id.replace('_container', '') || '');
  };

  useEffect(() => {
    setBgColor(data?.bgColor || '');
    setElementDatas(JSON.parse(data?.elements || '[]'));
  }, []);

  useEffect(() => {}, [elementDatas, selectedElement]);

  const editElement = (editElement: elementDataType) => {
    return setElementDatas((prevElements): elementDataType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);
      return [...tempElements, editElement];
    });
  };

  async function onSubmit() {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/screens/${data?.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bgColor: previreBgColor,
          screenName: screenName,
          elements: JSON.stringify(elementDatas),
        }),
      });
      if (!response.ok) {
        toast.error('Fail to update screen datas');
        throw Error('');
      }
      toast.success(`[screen ${data?.id}] 수정 성공!`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <PhoneBackground>
        <PhoneHeader backgroundColor={previreBgColor} />
        <PhoneDisplay backgroundColor={previreBgColor} main={undefined}>
          <div className="absolute ">
            {elementDatas?.map((data, i) => (
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
                      left: `${
                        Number(data.style.left.replace('px', '')) + e.nativeEvent.offsetX
                      }px`,
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

      <AlertDialog>
        <AlertDialogTrigger
          className="mt-10  w-fit px-12 py-2 mr-2 bg-slate-950 rounded text-white"
          onClick={() => {
            console.log('screenName : ' + screenName);
            console.log('element Datas : ');
            console.log(elementDatas);
            console.log('BgColor : ' + previreBgColor);
          }}
        >
          수정 완료
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>입력하신 정보가 맞으면 확인 버튼을 누르세요.</AlertDialogTitle>
            <AlertDialogDescription>console을 확인하세요.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction
              disabled={isSubmit}
              onClick={() => {
                console.log('send data into DB...');
                onSubmit();
              }}
            >
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CanvasPreview;
