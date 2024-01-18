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

const formSchema = z.object({
  bgColor: z.string(),
});

const DetailBg = () => {
  const [bgColor, setBgColor] = useRecoilState(bgColorState);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  return (
    <div className="p-6 ">
      <div className="py-2 font-bold font-xl">Display Setting</div>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="bgColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>bgColor : {bgColor}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="color"
                    onChange={(e) => {
                      setBgColor(e.target.value);
                    }}
                    value={bgColor}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default DetailBg;
