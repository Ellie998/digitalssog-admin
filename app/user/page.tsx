'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/subabase/initSupabase';

import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';

const schema = z.object({
  nickname: z.string().min(2, { message: '닉네임은 최소 2자 이상이어야 합니다.' }),
});

const UserPage = () => {
  const [user, setUser] = useState<{
    email: string | undefined;
    nickname: string | undefined;
  } | null>({
    email: '' || undefined,
    nickname: '' || undefined,
  });

  const [errorMessage, setErrorMessage] = React.useState('');
  const [pwMessage, setPwMessage] = React.useState('');
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isSubmit2, setIsSubmit2] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  async function onNicknameSubmit(values: z.infer<typeof schema>) {
    try {
      setIsSubmit(true);

      const { error } = await supabase.auth.updateUser({
        data: { nickname: values.nickname },
      });
      if (error) {
        setErrorMessage('유효하지 않은 닉네임입니다.');
        return;
      }

      toast.success('닉네임 변경이 완료되었습니다.');
    } catch (error) {
    } finally {
      setIsSubmit(false);
    }
  }

  async function onPwCick() {
    try {
      setIsSubmit2(true);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data, error } = await supabase.auth.resetPasswordForEmail(user?.email || '', {
        redirectTo: `${process.env.NEXT_PUBLIC_DOMAIN}/auth/update-pw`,
      });
      if (error) {
        setErrorMessage('에러가 발생했습니다.');
        return;
      }
      setPwMessage('비밀번호 재설정 링크가 메일로 전송되었으니, 메일을 확인해보세요.');
    } catch (error) {
    } finally {
      setIsSubmit2(false);
    }
  }
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Supabase 클라이언트에서 현재 사용자 정보 가져오기
        const currentUser = await supabase.auth.getUser();

        // 현재 사용자가 로그인한 경우
        if (currentUser.data.user) {
          // 사용자 email 가져오기
          const userEmail = currentUser.data.user?.email;

          const userNickname = currentUser.data.user?.user_metadata.nickname;

          // 사용자 정보 설정
          setUser({
            email: userEmail, // 이메일 등 다른 정보도 가져올 수 있음
            nickname: userNickname,
          });
        } else {
          // 로그인하지 않은 경우
          router.push('/');
          router.refresh();
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // 페이지 로드 시 사용자 정보 가져오기
    fetchUserData();
  }, []);

  return (
    <div className="grid gap-8 p-8 sm:gap-4 sm:grid-cols-2 grid-col-1">
      <div className=" sm:max-w-[450px] border rounded-sm p-8">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight ">이메일 주소</h2>
          <p className="pt-8 text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>
      <div className=" sm:max-w-[450px] border rounded-sm p-8">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight ">닉네임 수정하기</h2>
          <p className="text-sm text-muted-foreground">
            변경하고자 하는 닉네임을 작성한 뒤, [닉네임 변경하기] 버튼을 누르세요.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onNicknameSubmit)} className="pt-4 space-y-8">
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <>
                  <FormItem>
                    {/* <FormLabel htmlFor="nickname">닉네임</FormLabel> */}
                    <FormControl>
                      <Input
                        id="nickname"
                        type="text"
                        className="text-left"
                        placeholder="nickname"
                        defaultValue={user?.nickname}
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
              닉네임 변경하기
            </Button>
          </form>
        </Form>
      </div>
      <div className=" sm:max-w-[450px] border rounded-sm p-8">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none tracking-tight ">비밀번호 변경하기</h2>
          <p className={cn('pb-8 text-sm text-muted-foreground', pwMessage && 'text-red-600')}>
            {pwMessage
              ? pwMessage
              : '변경하기 버튼을 누르면 비밀번호 변경 메일이 이메일로 전송됩니다.'}
          </p>
          <Button disabled={isSubmit2} onClick={() => onPwCick()}>
            비밀번호 변경하기
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
