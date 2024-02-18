'use client';

import { RecoilRoot } from 'recoil';

const UserRecoilRoot = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default UserRecoilRoot;
