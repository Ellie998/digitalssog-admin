/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedScreenDataState, targetDataState } from '../canvas-atom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GuideWithGuideComponentWithScreenElements, targetDataType } from '@/lib/db';
import { checkAdmin } from '@/utils/checkAdmin';

const formSchema = z.object({
  top: z.string(),
  left: z.string(),
  width: z.string(),
  height: z.string(),
  zIndex: z.string(),
});

const DetailTargetElement = ({
  guide,
}: {
  guide: GuideWithGuideComponentWithScreenElements | null;
}) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const setTargetData = useSetRecoilState(targetDataState);
  const selectedScreenData = useRecoilValue(selectedScreenDataState);
  const targetBox: targetDataType = JSON.parse(guide?.guide_component?.targetBox || '{}');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      top: targetBox.top || '',
      left: targetBox.left || '',
      width: targetBox.width || '',
      height: targetBox.height || '',
      zIndex: targetBox.zIndex || '',
    },
  });
  const formContent: Array<{
    name: string;
    label: string;
    placeholder?: string;
  }> = [
    { name: 'top', label: 'Position - top', placeholder: '10px' },
    { name: 'left', label: 'Position - left', placeholder: '10px' },
    { name: 'width', label: 'Width', placeholder: '100px' },
    { name: 'height', label: 'Height', placeholder: '100px' },
    { name: 'zIndex', label: 'zIndex', placeholder: '10' },
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmited(true);
      const isAdmin = await checkAdmin();
      if (!isAdmin) {
        toast.error('Not Allowed!');
        return;
      }

      const response = await fetch(`/api/guide-components/${guide?.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          screenId: selectedScreenData.id,
          targetBox: JSON.stringify({ ...values }),
        }),
      });
      if (!response.ok) {
        toast.error('Fail');
        throw Error('');
      }
      toast.success(`guide [${guide?.id}] target 수정 성공!`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmited(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-8 ">
        <div className="font-bold text-md">Add Target Box</div>

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
                  <Input
                    type={'text'}
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    value={field.value}
                    placeholder={item.placeholder}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button
          type="button"
          className="mr-4"
          onClick={() => {
            setTargetData({
              top: form.getValues().top,
              left: form.getValues().left,
              width: form.getValues().width,
              height: form.getValues().height,
              zIndex: form.getValues().zIndex,
            });
          }}
        >
          Edit Data
        </Button>
        <Button variant={'destructive'} disabled={isSubmited}>
          Push Data
        </Button>
      </form>
    </Form>
  );
};

export default DetailTargetElement;
