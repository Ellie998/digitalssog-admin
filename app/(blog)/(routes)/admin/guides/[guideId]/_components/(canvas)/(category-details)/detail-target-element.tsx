/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSetRecoilState } from 'recoil';
import { targetDataState } from '../canvas-atom';

const formSchema = z.object({
  top: z.string(),
  left: z.string(),
  width: z.string(),
  height: z.string(),
  zIndex: z.string(),
});

const DetailTargetElement = () => {
  const setTargetData = useSetRecoilState(targetDataState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { top: '', left: '', width: '', height: '', zIndex: '' },
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

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-4 space-y-8 "
      >
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
                      setTargetData({
                        top: form.getValues().top,
                        left: form.getValues().left,
                        width: form.getValues().width,
                        height: form.getValues().height,
                        zIndex: form.getValues().zIndex,
                      });
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

        <Button type="button" variant={'destructive'}>
          Push Data
        </Button>
      </form>
    </Form>
  );
};

export default DetailTargetElement;
