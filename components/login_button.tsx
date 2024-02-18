'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { toast } from 'react-toastify';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/initSupabase';

const LoginButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<{ email: string | undefined } | null>({
    email: '' || undefined,
  });

  const fetchUserData = async () => {
    try {
      // Supabase 클라이언트에서 현재 사용자 정보 가져오기
      const currentUser = await supabase.auth.getUser();

      // 현재 사용자가 로그인한 경우
      if (currentUser.data.user) {
        // 사용자 email 가져오기
        const userEmail = currentUser.data.user?.email;

        // 사용자 정보 설정
        setUser({
          email: userEmail, // 이메일 등 다른 정보도 가져올 수 있음
        });
      } else {
        // 로그인하지 않은 경우
        setUser(null);
        if (pathname.includes('/user')) {
          router.push('/');
          router.refresh();
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    // 페이지 로드 시 사용자 정보 가져오기
    fetchUserData();
  }, []);

  return (
    <>
      {user?.email ? (
        <div className="flex gap-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">로그아웃</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>로그아웃 하시겠습니까?</DialogTitle>
              </DialogHeader>

              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    onClick={async () => {
                      const { error } = await supabase.auth.signOut();
                      if (error) toast.error('에러가 발생했습니다.');
                      else {
                        setUser(null);
                        if (pathname.includes('/user')) {
                          router.push('/');
                          router.refresh();
                          return;
                        }
                        router.refresh();
                      }
                    }}
                  >
                    확인
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    취소
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button>
            <Link href={'/user'}>마이페이지</Link>
          </Button>
        </div>
      ) : (
        <Button>
          <Link href={'/auth/sign-in'}>로그인</Link>
        </Button>
      )}
    </>
  );
};

export default LoginButton;
