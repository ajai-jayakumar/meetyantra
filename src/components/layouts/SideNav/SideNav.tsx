'use client';

import { useState } from 'react';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Referral, Signup } from '@/components';
import SocialLoginButton from '@/components/feature/SocialLoginButton';

import NavItem from './NavItem';

const LoginSidePane = () => {
  const [loginFlow, setLoginFLow] = useState('login');
  return (
    <nav className='z-0 flex h-screen w-[500px] flex-col justify-between bg-slate-100 p-4'>
      <div>
        <h1 className='mb-1 flex items-center gap-2 p-4 text-2xl font-semibold'>
          <Image src='/assets/images/logo.svg' alt='MeetYantra' width={60} height={60} />
          Meet Yantra
        </h1>
      </div>
      <SocialLoginButton loginFlow={loginFlow} />
      <Signup loginFlow={loginFlow} setLoginFLow={setLoginFLow} />
    </nav>
  );
};

const NavBar = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarExpanded(!isSideBarExpanded);
  };

  return (
    <nav
      className={`relative flex flex-col items-center justify-between bg-slate-100 duration-200 ${isSideBarExpanded ? 'w-1/6 p-4' : 'w-[60px] py-4'}`}
    >
      <div className='absolute right-[-24px] top-7 bg-white drop-shadow-md'>
        <button className='px-1 py-4' onClick={toggleSideBar}>
          {isSideBarExpanded ? (
            <ArrowLeftToLine size={16} className='text-primary' />
          ) : (
            <ArrowRightToLine size={16} className='text-primary' />
          )}
        </button>
      </div>

      <div>
        <NavItem isSideBarExpanded={isSideBarExpanded} />
      </div>
      {isSideBarExpanded && <Referral />}
    </nav>
  );
};

const SideNav = () => {
  const pathname = usePathname();
  const isLoginFlow = pathname === '/login';
  if (isLoginFlow) {
    return <LoginSidePane />;
  }
  return <NavBar />;
};

export default SideNav;
