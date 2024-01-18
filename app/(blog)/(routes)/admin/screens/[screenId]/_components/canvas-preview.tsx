'use client';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

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

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const screenName = useRecoilValue(screenNameState);
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
    <div className="flex flex-col justify-center items-center">
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
            console.log('BgColor : ' + bgColor);
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
              onClick={() => {
                console.log('send data into DB...');
                toast.success('Screen 정보 수정 성공!');
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
