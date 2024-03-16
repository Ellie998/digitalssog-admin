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

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import { supabase } from '@/lib/supabase/initSupabase';

const schema = z.object({
  email: z.string().email({ message: '유효하지 않은 이메일 형식입니다.' }),
  pw: z
    .string()
    .min(8, { message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.' })
    .regex(/(?=.*\d)(?=.*[a-z]).{8,}/, {
      message: '비밀번호는 숫자, 영문을 포함한 8자리 이상의 값이어야 합니다.',
    }),
});
const AuthSignInPage = () => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      setIsSubmit(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.pw,
      });
      if (error) {
        throw Error('ERROR');
      }
      const session = await supabase.auth.setSession(data.session);
      if (session.error) {
        throw Error('ERROR');
      }

      router.push('/');
      router.refresh();
      toast.success(data.user.email + '님 반갑습니다.');
    } catch (error) {
      setErrorMessage('유효하지 않은 로그인입니다. 아이디와 비밀번호를 다시 확인해 주세요.');
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
                        <FormLabel htmlFor="email">이메일</FormLabel>
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
                {errorMessage && <div className="text-red-600 ">{errorMessage}</div>}
                <Button type="submit" className="w-full" disabled={isSubmit}>
                  로그인
                </Button>
              </form>
            </Form>
            <div className="flex justify-around mt-8">
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/auth/forget'} className="cursor-pointer ">
                  비밀번호 찾기
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
export default AuthSignInPage;
