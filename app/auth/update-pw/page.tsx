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
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { supabase } from '@/lib/supabase/initSupabase';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const schema = z.object({
  pw: z
    .string()
    .min(8, { message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.' })
    .regex(/(?=.*\d)(?=.*[a-z]).{8,}/, {
      message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.',
    }),
  re_pw: z.string().regex(/(?=.*\d)(?=.*[a-z]).{8,}/, {
    message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.',
  }),
});
const AuthUpdatePwPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    if (values.pw !== values.re_pw) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      setIsSubmit(true);

      const { error } = await supabase.auth.updateUser({
        password: values.pw,
      });
      if (error) {
        setErrorMessage('이전과 동일한 비밀번호입니다.');
        toast.error('에러가 발생했습니다.');
        return;
      }

      toast.success('비밀번호 재설정이 완료되었습니다.');
      router.push('/auth/sign-in');
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
                  name="pw"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel htmlFor="pw">비밀번호</FormLabel>
                        <Input
                          id="pw"
                          type="password"
                          placeholder="password"
                          required={true}
                          onClick={() => {
                            setErrorMessage('');
                          }}
                          {...field}
                        />
                      </FormItem>
                      <FormMessage />
                    </>
                  )}
                />
                <FormField
                  control={form.control}
                  name="re_pw"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormLabel htmlFor="re_pw">비밀번호 재입력</FormLabel>
                        <Input
                          id="re_pw"
                          type="password"
                          placeholder="password"
                          required={true}
                          onClick={() => {
                            setErrorMessage('');
                          }}
                          {...field}
                        />
                      </FormItem>
                      <FormMessage />
                    </>
                  )}
                />
                {errorMessage && <div className="text-red-600 ">{errorMessage}</div>}
                <Button type="submit" className="w-full" disabled={isSubmit}>
                  비밀번호 변경
                </Button>
              </form>
            </Form>
            <div className="flex justify-around mt-8">
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/'} className="cursor-pointer ">
                  홈으로
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-[24px]" />
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/auth/sign-in'} className="cursor-pointer ">
                  로그인
                </Link>
              </Button>
            </div>
          </>
        }
      ></Postit>
    </div>
  );
};
export default AuthUpdatePwPage;
