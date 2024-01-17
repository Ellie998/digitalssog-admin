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

const formSchema = z.object({
  version: z.string().min(1),
});

const ScreenVersionForm = ({ version, id }: { version: string; id: string }) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      version: version,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmited(true);
      // const response = await fetch(`/api/templates/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     version: values.version,
      //   }),
      // });
      // if (!response.ok) {
      //   toast.error('Fail');
      //   throw Error('');
      // }
      toast.success(`[${id}] version : ${values.version} 수정 성공!`);
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
          <Button type="submit" disabled={isSubmited}>
            Edit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ScreenVersionForm;
