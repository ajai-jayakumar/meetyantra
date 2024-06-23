'use client';

import { useEffect, useState } from 'react';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Authentication, Referral } from '@/components';
import SocialLoginButton from '@/components/feature/SocialLoginButton';

import NavItem from './NavItem';

const AuthSidePane = () => {
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
      <Authentication loginFlow={loginFlow} setLoginFLow={setLoginFLow} />
    </nav>
  );
};

const AppSidePane = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(true);

  const { status, data: session } = useSession();

  console.log({ status, session });
  // redirectToHomePage(status);

  useEffect(() => {
    // Send the ID token to your backend API for verification and authentication
    fetch('http://127.0.0.1:8000/user', {
      credentials: 'include', // Include this line to send and receive cookies
    })
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        // if (data.status === 'success') {
        //   // The authentication was successful, and the cookie has been set
        //   console.log('Authentication successful');
        //   redirectToHomePage(status);
        // } else {
        //   // There was an error during the authentication process
        //   console.log('Authentication error:', data.message);
        // }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [status]);

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
    return <AuthSidePane />;
  }
  return <AppSidePane />;
};

export default SideNav;
