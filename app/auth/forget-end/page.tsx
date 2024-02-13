'use client';
import * as React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import Postit from '../_components/postit';

import { Separator } from '@radix-ui/react-separator';

const AuthForgetEndPage = () => {
  return (
    <div className=" w-96 max-sm:w-full">
      <Postit
        title={
          <div>
            입력하신 이메일 주소에 <br />
            비밀번호 재설정 링크을 보냈습니다.
          </div>
        }
        content={
          <>
            <div>전송된 메일의 링크를 통해 비밀번호 변경이 가능합니다.</div>
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
export default AuthForgetEndPage;
