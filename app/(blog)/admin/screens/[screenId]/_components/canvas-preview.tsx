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
  onClickPreviewState,
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
import { checkAdmin } from '@/utils/checkAdmin';

const CanvasPreview = ({ data }: { data?: ScreenWithAllTemplate | null }) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [previreBgColor, setBgColor] = useRecoilState(bgColorState);
  const screenName = useRecoilValue(screenNameState);
  const [onClickPreview, setOnClickState] = useRecoilState(onClickPreviewState);
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
    setOnClickState({ id: '', type: '', event: '' });
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
      const isAdmin = await checkAdmin();
      if (!isAdmin) {
        toast.error('Not Allowed!');
        return;
      }

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
    <div className="flex flex-col items-center justify-center">
      <PhoneBackground>
        <PhoneHeader backgroundColor={previreBgColor} />
        <PhoneDisplay
          backgroundColor={previreBgColor}
          main={undefined}
          onClick={(e: { target: { id: string } }) => {
            e.target?.id === 'phone_display_main' && setSelectedElement('');
          }}
        >
          <div className="absolute">
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
                  data.className,
                )}
                draggable
                onDragEnd={(e) => {
                  editElement({
                    id: e.currentTarget.id.replace('_container', ''),
                    type: data.type,
                    content: data.content,
                    onClick: data.onClick,
                    className: data.className,
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
                    id={data.id}
                    name={data.content || 'circle'}
                    className={data.className}
                    onClick={
                      data.onClick?.event !== ''
                        ? () => {
                            const element = document.getElementById(data.onClick?.id || data.id);
                            if (data.onClick?.type === 'hide') element?.classList.add('hidden');
                            if (data.onClick?.type === 'show') element?.classList.remove('hidden');
                            if (data.onClick?.type === 'add') {
                              element ? (element.textContent += data.onClick.event) : null;
                            } else {
                              new Function(data.onClick?.event || '')();
                            }
                          }
                        : () => {}
                    }
                  />
                )}
                {data.type === 'text' && (
                  <div
                    // @ts-expect-error: textAlign 할당 타입 문제
                    style={{ ...data.style }}
                    id={data.id}
                    name={data.content || ''}
                    className={data.className}
                    onClick={
                      data.onClick?.event !== ''
                        ? () => {
                            const element = document.getElementById(data.onClick?.id || data.id);
                            if (data.onClick?.type === 'hide') element?.classList.add('hidden');
                            if (data.onClick?.type === 'show') element?.classList.remove('hidden');
                            if (data.onClick?.type === 'add') {
                              element ? (element.textContent += data.onClick.event) : null;
                            } else {
                              new Function(data.onClick?.event || '')();
                            }
                          }
                        : () => {}
                    }
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
          className="px-12 py-2 mt-10 mr-2 text-white rounded w-fit bg-slate-950"
          onClick={() => {
            console.log('screenName : ' + screenName);
            console.log('element Datas : ');
            console.log(elementDatas);
            console.log('BgColor : ' + previreBgColor);
            console.log('element onClick type: ' + onClickPreview.type);
            console.log('element onClick id: ' + onClickPreview.id);
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
