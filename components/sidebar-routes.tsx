import { headers } from 'next/headers';
import Link from 'next/link';

const SidebarRoutes = () => {
  const headersList = headers();

  return (
    <div className="flex flex-col w-full pl-6">
      {headersList.get('host')?.includes('localhost') ? (
        <>
          <Link href={'/admin'}>admin 메인</Link>
          <Link href={'/admin/functions'}>function 메인</Link>
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
