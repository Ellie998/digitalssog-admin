'use client';
import { supabase } from '@/lib/supabase/initSupabase';
import Link from 'next/link';

import { useEffect, useState } from 'react';

const SidebarRoutes = () => {
  const [data, setData] = useState<{ email: string | undefined }>({ email: undefined });

  const fetchUserData = async () => {
    try {
      supabase.auth.getUser().then((res) => setData({ email: res.data.user?.email }));
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col w-full pl-6">
      {true || data?.email === 'dpfla9144@naver.com' ? (
        <>
          <Link href={'/admin'}>admin 메인</Link>
          <Link href={'/admin/functions'}>function 메인</Link>
          <Link href={'/admin/templates'}>template 메인</Link>
        </>
      ) : (
        <>
          {/* <Link href={"/description/function"}>기능 메인</Link> */}
          {/* <Link href={"/description/app"}>앱 메인</Link> */}
        </>
      )}
    </div>
  );
};

export default SidebarRoutes;
