/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// import { toast } from "react-toastify";

import { useRecoilState } from 'recoil';
import { bgColorState } from '../canvas-atom';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const formSchema = z.object({
  bgColor: z.string(),
});

const DetailBg = ({ id, bgColor }: { id: string; bgColor: string }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [previewBgColor, setBgColor] = useRecoilState(bgColorState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { bgColor: bgColor },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmit(true);
      const response = await fetch(`/api/screens/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bgColor: values.bgColor,
        }),
      });
      if (!response.ok) {
        toast.error('Fail to update screen template');
        throw Error('');
      }
      toast.success(`[screen ${id}] template 수정 성공!`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="p-6 ">
      <div className="py-2 font-bold font-xl">Display Setting</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="bgColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>bgColor : {previewBgColor}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => {
                      setBgColor(e.target.value);
                      field.onChange(e);
                    }}
                    value={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmit}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DetailBg;
