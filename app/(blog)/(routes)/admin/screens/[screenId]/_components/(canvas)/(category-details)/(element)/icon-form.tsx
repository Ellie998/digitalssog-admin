/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { useRecoilState, useRecoilValue } from 'recoil';
import { elementDatasState, selectedElementState } from '../../canvas-atom';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useElementDataManipulation } from '../../canvas-libs';
import { Textarea } from '@/components/ui/textarea';

const iconFormSchema = z.object({
  name: z.string(),
  className: z.string(),
  //
  top: z.number(),
  left: z.number(),
  fontSize: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  textAlign: z.string(),
  color: z.string(),
  backgroundColor: z.string(),
  opacity: z.number(),
  border: z.string(),
  borderRadius: z.number(),
  shadow: z.string(),
  width: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  height: z.string().endsWith('px' || 'rem' || 'em' || '%' || 'content' || 'em' || 'vw', {
    message: '유효하지 않은 값',
  }),
  padding: z.string(),
  margin: z.string(),
  zIndex: z.number(),
  //
  onClickType: z.string(),
  onClickId: z.string(),
  onClickEvent: z.string(),
});

const IconForm = () => {
  const elementDatas = useRecoilValue(elementDatasState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);

  const { selectedElementInfo, onAddElementData, onDeleteElementData, onEditElementData } =
    useElementDataManipulation();

  const form = useForm<z.infer<typeof iconFormSchema>>({
    resolver: zodResolver(iconFormSchema),
    defaultValues: selectedElementInfo
      ? {
          name: selectedElementInfo.content,
          className: selectedElementInfo.className,
          //
          top: Number(selectedElementInfo?.style.top),
          left: Number(selectedElementInfo?.style.left),
          fontSize: selectedElementInfo?.style.fontSize,
          textAlign: selectedElementInfo?.style.textAlign,
          color: selectedElementInfo?.style.color,
          backgroundColor: selectedElementInfo?.style.backgroundColor,
          opacity: Number(selectedElementInfo?.style.opacity.replace('%', '')),
          border: selectedElementInfo?.style.border,
          borderRadius: Number(selectedElementInfo?.style.borderRadius.replace('px', '')),
          shadow: selectedElementInfo?.style.shadow,
          width: selectedElementInfo?.style.width,
          height: selectedElementInfo?.style.height,
          padding: selectedElementInfo?.style.padding,
          margin: selectedElementInfo?.style.margin,
          zIndex: Number(selectedElementInfo?.style.zIndex),
          onClickType: selectedElementInfo?.onClick?.type,
          onClickId: selectedElementInfo?.onClick?.id,
          onClickEvent: selectedElementInfo?.onClick?.event,
        }
      : {
          name: '',
          className: '',
          //
          top: 0,
          left: 0,
          fontSize: '',
          textAlign: '',
          color: '',
          backgroundColor: '',
          opacity: 100,
          border: '',
          borderRadius: 0,
          shadow: '',
          width: '',
          height: '',
          padding: '',
          margin: '',
          zIndex: 0,
          //
          onClickType: '',
          onClickId: '',
          onClickEvent: '',
        },
  });
  const formContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    { name: 'name', label: 'Icon Name', type: 'text' },
    { name: 'className', label: 'UI ClassName', type: 'text' },
  ];
  const styleFormContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    { name: 'top', label: 'Position - top', type: 'number' },
    { name: 'left', label: 'Position - left', type: 'number' },
    {
      name: 'fontSize',
      label: 'UI Font Size',
      type: 'text',
      inputAttrybuttes: { placeholder: '14px' },
    },
    {
      name: 'width',
      label: 'UI Width',
      type: 'text',
      inputAttrybuttes: { placeholder: 'ex) 100px' },
    },
    {
      name: 'height',
      label: 'UI Height',
      type: 'text',
      inputAttrybuttes: { placeholder: 'ex) 100px' },
    },
    {
      name: 'padding',
      label: 'UI Padding',
      type: 'text',
      inputAttrybuttes: { placeholder: 'ex) 4px 4px 4px 4px' },
    },
    {
      name: 'margin',
      label: 'UI Margin',
      type: 'text',
      inputAttrybuttes: { placeholder: 'ex) 4px 4px 4px 4px' },
    },
    { name: 'textAlign', label: 'UI Text Align', type: 'text' },
    { name: 'color', label: 'UI Text Color', type: 'color' },
    {
      name: 'backgroundColor',
      label: 'UI Background Color',
      type: 'text',
      inputAttrybuttes: {
        placeholder: 'rgba(0,0,0,0)',
      },
    },
    {
      name: 'opacity',
      label: 'UI opacity',
      type: 'number',
      inputAttrybuttes: { min: 0, max: 100, step: 10 },
    },
    {
      name: 'border',
      label: 'UI Border',
      type: 'text',
      inputAttrybuttes: { placeholder: '1px soild green' },
    },
    {
      name: 'borderRadius',
      label: 'UI Border Radius',
      type: 'number',
      inputAttrybuttes: { min: 0, max: 100, step: 10 },
    },
    {
      name: 'shadow',
      label: 'UI Shadow',
      type: 'text',
      inputAttrybuttes: { placeholder: '4px 4px 5px rgb(233,233,233,0.5)' },
    },
    { name: 'zIndex', label: 'UI zIndex', type: 'number' },
  ];
  const onClickFormContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    {
      name: 'onClickType',
      label: 'onClick event type',
      type: 'text',
      inputAttrybuttes: {
        placeholder: 'hide/show/add/animation',
      },
    },
    { name: 'onClickId', label: 'onClick target Id', type: 'text' },
  ];

  useEffect(() => {
    if (selectedElement) {
      form.setValue('name', selectedElementInfo?.content || '');
      form.setValue('className', selectedElementInfo?.className || '');
      //
      form.setValue('top', Number(selectedElementInfo?.style.top.replace('px', '')) || 0);
      form.setValue('left', Number(selectedElementInfo?.style.left.replace('px', '')) || 0);
      form.setValue('fontSize', selectedElementInfo?.style.fontSize || '14px');
      form.setValue('textAlign', selectedElementInfo?.style.textAlign || '');
      form.setValue('color', selectedElementInfo?.style.color || '#000000');
      form.setValue('backgroundColor', selectedElementInfo?.style.backgroundColor || '#ffffff0');
      form.setValue('opacity', Number(selectedElementInfo?.style.opacity.replace('%', '')) || 100);
      form.setValue('border', selectedElementInfo?.style.border || '');
      form.setValue(
        'borderRadius',
        Number(selectedElementInfo?.style.borderRadius.replace('px', '')) || 0,
      );
      form.setValue('shadow', selectedElementInfo?.style.shadow || '');
      form.setValue('width', selectedElementInfo?.style.width || '100%');
      form.setValue('height', selectedElementInfo?.style.height || 'fit-content');
      form.setValue('padding', selectedElementInfo?.style.padding || '');
      form.setValue('margin', selectedElementInfo?.style.margin || '');
      form.setValue('zIndex', Number(selectedElementInfo?.style.zIndex) || 0);
      form.setValue('onClickType', selectedElementInfo?.onClick?.type || '');
      form.setValue('onClickId', selectedElementInfo?.onClick?.id || '');
      form.setValue('onClickEvent', selectedElementInfo?.onClick?.event || '');
    }
  }, [selectedElement, selectedElementInfo]);
  return (
    <>
      <Button
        className="mr-4"
        type="button"
        onClick={() => {
          const styleObj = {
            fontSize: form.getValues().fontSize !== '' ? form.getValues().fontSize : '14px',
            textAlign: form.getValues().textAlign !== '' ? form.getValues().textAlign : 'inherit',
            color: form.getValues().color !== '' ? form.getValues().color : '#000000',
            backgroundColor:
              form.getValues().backgroundColor !== ''
                ? form.getValues().backgroundColor
                : '#ffffff0',
            opacity: `${form.getValues().opacity}%`,
            border: form.getValues().border !== '' ? form.getValues().border : 'none',
            borderRadius: `${form.getValues().borderRadius}px`,
            shadow: form.getValues().shadow !== '' ? form.getValues().shadow : 'none',
            width: form.getValues().width !== '' ? form.getValues().width : '100%',
            height: form.getValues().height !== '' ? form.getValues().height : 'fit-content',
            padding: form.getValues().padding !== '' ? form.getValues().padding : '0px',
            margin: form.getValues().margin !== '' ? form.getValues().margin : '0px',
            zIndex: `${form.getValues().zIndex}`,
            left: `${form.getValues().left}px`,
            top: `${form.getValues().top}px`,
          };
          selectedElementInfo
            ? onEditElementData({
                type: selectedElementInfo?.type || 'icon',
                style: styleObj,
                id: selectedElement,
                className: form.getValues().className,
                content: form.getValues().name !== '' ? form.getValues().name : 'person-fill',
                onClick:
                  form.getValues().onClickId === ''
                    ? undefined
                    : {
                        type: form.getValues().onClickType || '',
                        id: form.getValues().onClickId || '',
                        event: form.getValues().onClickEvent || '',
                      },
              })
            : onAddElementData({
                type: 'icon',
                style: styleObj,
                id: uuidv4(),
                className: form.getValues().className,
                content: form.getValues().name !== '' ? form.getValues().name : 'person-fill',
                onClick:
                  form.getValues().onClickId === ''
                    ? undefined
                    : {
                        type: form.getValues().onClickType || '',
                        id: form.getValues().onClickId || '',
                        event: form.getValues().onClickEvent || '',
                      },
              });
          console.log(selectedElementInfo ? 'EDIT!' : 'ADD!');
        }}
      >
        {selectedElementInfo ? 'edit' : 'Add'}
      </Button>
      {selectedElement && (
        <>
          <Button
            className="mr-4"
            type="button"
            variant={'default'}
            onClick={() => {
              const styleObj = {
                fontSize: form.getValues().fontSize !== '' ? form.getValues().fontSize : '14px',
                textAlign:
                  form.getValues().textAlign !== '' ? form.getValues().textAlign : 'inherit',
                color: form.getValues().color !== '' ? form.getValues().color : '#000000',
                backgroundColor:
                  form.getValues().backgroundColor !== ''
                    ? form.getValues().backgroundColor
                    : '#ffffff0',
                opacity: `${form.getValues().opacity}%`,
                border: form.getValues().border !== '' ? form.getValues().border : 'none',
                borderRadius: `${form.getValues().borderRadius}px`,
                shadow: form.getValues().shadow !== '' ? form.getValues().shadow : 'none',
                width: form.getValues().width !== '' ? form.getValues().width : '100%',
                height: form.getValues().height !== '' ? form.getValues().height : 'fit-content',
                padding: form.getValues().padding !== '' ? form.getValues().padding : '0px',
                margin: form.getValues().margin !== '' ? form.getValues().margin : '0px',
                zIndex: `${form.getValues().zIndex}`,
                left: `${form.getValues().left + 20}px`,
                top: `${form.getValues().top + 20}px`,
              };
              onAddElementData({
                type: 'icon',
                style: styleObj,
                id: uuidv4(),
                className: form.getValues().className,
                content: form.getValues().name !== '' ? form.getValues().name : 'person-fill',
                onClick:
                  form.getValues().onClickId === ''
                    ? undefined
                    : {
                        type: form.getValues().onClickType || '',
                        id: form.getValues().onClickId || '',
                        event: form.getValues().onClickEvent || '',
                      },
              });
            }}
          >
            Copy
          </Button>
          <Button
            className="mr-4"
            type="button"
            variant={'destructive'}
            onClick={() => {
              onDeleteElementData({ id: selectedElement });
              setSelectedElement('');
            }}
          >
            Delete
          </Button>
        </>
      )}
      <div className="grid gap-y-8">
        <div className="grid gap-y-4">
          {formContent.map((item, i) => (
            <FormField
              key={item.name + i}
              control={form.control}
              // @ts-expect-error: textAlign 할당 타입 문제
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-4">{item.label}</FormLabel>
                  <Input type={item.type} {...field} {...item.inputAttrybuttes} />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {styleFormContent.map((item, i) => (
            <FormField
              key={item.name + i}
              control={form.control}
              // @ts-expect-error: textAlign 할당 타입 문제
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-4">{item.label}</FormLabel>
                  <Input type={item.type} {...field} {...item.inputAttrybuttes} />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-4">
          {onClickFormContent.map((item, i) => (
            <FormField
              key={item.name + i}
              control={form.control}
              // @ts-expect-error: textAlign 할당 타입 문제
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mr-4">{item.label}</FormLabel>
                  <Input type={item.type} {...field} {...item.inputAttrybuttes} />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <FormField
            control={form.control}
            name={'onClickEvent'}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mr-4">onClick Event</FormLabel>
                <Textarea {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default IconForm;
