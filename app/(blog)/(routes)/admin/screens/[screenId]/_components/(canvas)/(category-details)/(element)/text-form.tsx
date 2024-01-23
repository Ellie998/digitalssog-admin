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

const types = [
  { label: 'Text', value: 'text' },
  { label: 'Icon', value: 'icon' },
  { label: 'Tab', value: 'tab' },
] as const;

const formSchema = z.object({
  top: z.number(),
  left: z.number(),
  text: z.string(),
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
  id: z.string(),
});

const TextForm = () => {
  const elementDatas = useRecoilValue(elementDatasState);
  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);
  const { selectedElementInfo, onAddElementData, onDeleteElementData, onEditElementData } =
    useElementDataManipulation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: selectedElementInfo
      ? {
          top: Number(selectedElementInfo?.style.top),
          left: Number(selectedElementInfo?.style.left),
          text: '...',
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
        }
      : {
          top: 0,
          left: 0,
          text: '',
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
        },
  });
  const formContent: Array<{
    name: string;
    label: string;
    type: string;
    inputAttrybuttes?: object;
  }> = [
    { name: 'top', label: 'Position - top', type: 'number' },
    { name: 'left', label: 'Position - left', type: 'number' },
    { name: 'text', label: 'UI Text', type: 'text' },
    {
      name: 'fontSize',
      label: 'UI Font Size',
      type: 'text',
      inputAttrybuttes: { placeholder: '14px' },
    },
    { name: 'width', label: 'UI Width', type: 'text' },
    { name: 'height', label: 'UI Height', type: 'text' },
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

  useEffect(() => {
    if (selectedElement) {
      form.setValue('text', selectedElementInfo?.content || '...');
      form.setValue(
        'top',
        Number(selectedElementInfo?.style.top.replace('px', '')) || form.getValues().top,
      );
      form.setValue(
        'left',
        Number(selectedElementInfo?.style.left.replace('px', '')) || form.getValues().left,
      );
      form.setValue('fontSize', selectedElementInfo?.style.fontSize || form.getValues().fontSize);
      form.setValue(
        'textAlign',
        selectedElementInfo?.style.textAlign || form.getValues().textAlign,
      );
      form.setValue('color', selectedElementInfo?.style.color || form.getValues().color);
      form.setValue(
        'backgroundColor',
        selectedElementInfo?.style.backgroundColor || form.getValues().backgroundColor,
      );
      form.setValue(
        'opacity',
        Number(selectedElementInfo?.style.opacity.replace('%', '')) || form.getValues().opacity,
      );
      form.setValue('border', selectedElementInfo?.style.border || form.getValues().border);
      form.setValue(
        'borderRadius',
        Number(selectedElementInfo?.style.borderRadius.replace('px', '')) ||
          form.getValues().borderRadius,
      );
      form.setValue('shadow', selectedElementInfo?.style.shadow || form.getValues().shadow);
      form.setValue('width', selectedElementInfo?.style.width || form.getValues().width);
      form.setValue('height', selectedElementInfo?.style.height || form.getValues().height);
      form.setValue('padding', selectedElementInfo?.style.padding || form.getValues().padding);
      form.setValue('margin', selectedElementInfo?.style.margin || form.getValues().margin);
      form.setValue('zIndex', Number(selectedElementInfo?.style.zIndex) || form.getValues().zIndex);
    }
  }, [elementDatas, selectedElement]);

  return (
    <>
      <Button
        className="mr-4 "
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
                type: selectedElementInfo?.type || 'text',
                style: styleObj,
                id: selectedElement,
                content: form.getValues().text || 'empty...',
              })
            : onAddElementData({
                type: 'text',
                style: styleObj,
                id: uuidv4(),
                content: form.getValues().text || 'empty...',
              });
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
                type: 'text',
                style: styleObj,
                id: uuidv4(),
                content: form.getValues().text || 'empty...',
              });
            }}
          >
            복제
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

      <div className="grid grid-cols-3 gap-x-2 gap-y-4">
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
    </>
  );
};

export default TextForm;
