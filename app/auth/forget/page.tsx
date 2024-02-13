'use client';
import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Separator } from '@/components/ui/separator';
import Postit from '../_components/postit';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { supabase } from '@/lib/supabase/initSupabase';

import { useRouter } from 'next/navigation';

const schema = z.object({
  email: z.string().email({ message: '유효하지 않은 이메일 형식입니다.' }),
});
const AuthForgetPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      setIsSubmit(true);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error } = await supabase.auth.resetPasswordForEmail(values.email, {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/update-pw`,
      });
      if (error) {
        setErrorMessage('에러가 발생했습니다.');
        return;
      }

      router.push('/auth/forget-end');
      router.refresh();
    } catch (error) {
    } finally {
      setIsSubmit(false);
    }
  }
  return (
    <div className=" w-96 max-sm:w-full">
      <Postit
        title={undefined}
        content={
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel htmlFor="email">가입하신 이메일 주소를 입력하세요</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="example@domain.com"
                            required={true}
                            onClick={() => {
                              setErrorMessage('');
                            }}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>

                      <FormMessage />
                    </>
                  )}
                />

                {errorMessage && <div className="text-red-600 ">{errorMessage}</div>}
                <Button type="submit" className="w-full" disabled={isSubmit}>
                  비밀번호 찾기
                </Button>
              </form>
            </Form>
            <div className="flex justify-around mt-8">
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/auth/sign-in'} className="cursor-pointer ">
                  로그인
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-[24px]" />
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/auth/sign-up'} className="cursor-pointer ">
                  회원가입
                </Link>
              </Button>
            </div>
          </>
        }
      ></Postit>
    </div>
  );
};
export default AuthForgetPage;
