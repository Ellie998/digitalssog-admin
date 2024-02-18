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
  main_color: z.string().min(1),
});

const TemplateMainColorForm = ({ main_color, id }: { main_color: string; id: string }) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      main_color: main_color,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmited(true);
      // const response = await fetch(`/api/templates/${id}`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     main_color: values.main_color,
      //   }),
      // });
      // if (!response.ok) {
      //   toast.error('Fail');
      //   throw Error('');
      // }
      toast.success(`[${id}] main_color 수정 성공!` + ' : ' + values.main_color);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmited(false);
    }
  }
  return (
    <div className="w-full p-6 shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="main_color"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Main Color</FormLabel>
                <FormControl>
                  <Input type="color" {...field} />
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

export default TemplateMainColorForm;
