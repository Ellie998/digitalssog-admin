'use client';
import * as React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Postit from '../_components/postit';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../_components/user_atom';
import { Separator } from '@radix-ui/react-separator';

const AuthSignUpEndPage = () => {
  const userEmail = useRecoilValue(userEmailState);
  return (
    <div className=" w-96 max-sm:w-full">
      <Postit
        title={
          <div>{userEmail ? `${userEmail}님 반갑습니다 👋` : '유효하지 않은 접근입니다.'}</div>
        }
        content={
          <>
            {userEmail && (
              <div>가입하신 이메일 주소의 메일을 통해 인증을 완료하시면 로그인이 가능합니다.</div>
            )}
            <div className="flex items-center justify-around mt-8">
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/'} className="cursor-pointer ">
                  홈으로 이동하기
                </Link>
              </Button>
              <Separator orientation="vertical" className="h-[24px] w-1 bg-slate-100" />
              <Button className="w-full" variant={'ghost'}>
                <Link href={'/auth/sign-in'} className="cursor-pointer ">
                  로그인하기
                </Link>
              </Button>
            </div>
          </>
        }
      ></Postit>
    </div>
  );
};
export default AuthSignUpEndPage;
