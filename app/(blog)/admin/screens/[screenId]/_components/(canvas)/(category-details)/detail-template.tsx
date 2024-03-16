'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { screenNameState } from '../canvas-atom';
import { checkAdmin } from '@/utils/checkAdmin';

const formSchema = z.object({
  appName: z.string().min(1),
  version: z.string().min(1),
  name: z.string().min(1),
});

const DetailTemplate = ({
  appName,
  version,
  name,
  id,
}: {
  appName: string;
  version: string;
  name?: string;
  id: string;
}) => {
  const setScreenName = useSetRecoilState(screenNameState);

  const [isSubmited, setIsSubmited] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appName: appName,
      version: version,
      name: name ? name : '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmited(true);
      const isAdmin = await checkAdmin();
      if (!isAdmin) {
        toast.error('Not Allowed!');
        return;
      }

      const response = await fetch(`/api/screens/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName: values.appName,
          version: values.version,
          name: values.name,
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
      setIsSubmited(false);
    }
  }
  return (
    <div className="w-full p-6 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="appName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">AppName</FormLabel>
                <FormControl>
                  <Input placeholder="ex) 카카오톡" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">version</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">스크린 이름</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex) 스크린1"
                    onChange={(e) => {
                      setScreenName(e.target.value);
                      field.onChange(e);
                    }}
                    value={field.value}
                    // {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmited}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DetailTemplate;
