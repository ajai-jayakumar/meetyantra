'use client';

import { useState } from 'react';
import { ArrowLeftToLine, ArrowRightToLine } from 'lucide-react';

import { Referral } from '@/components';

import NavItem from './NavItem';

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
            <ArrowLeftToLine size={16} className='text-blue-600' />
          ) : (
            <ArrowRightToLine size={16} className='text-blue-600' />
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

export default NavBar;
