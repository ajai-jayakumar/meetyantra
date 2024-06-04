import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components';
import { SideNavItems } from '@/lib/data/SideNavBar';

const NavItem: React.FC<{ isSideBarExpanded: boolean }> = ({ isSideBarExpanded }) => {
  const navItems = SideNavItems();

  if (isSideBarExpanded) {
    return (
      <>
        <h1 className='mb-1 flex items-center gap-2 p-4 text-lg'>
          <Image src='/assets/images/logo.svg' alt='MeetYantra' width={40} height={40} />
          Meet Yantra
        </h1>
        <ul>
          {navItems.map(item => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`mb-1 flex items-center justify-start gap-4 rounded-lg p-4  hover:bg-indigo-100 hover:text-primary ${item.active ? 'bg-indigo-100 text-primary' : 'text-neutral-500'}`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <h1 className='mb-1 flex items-center py-4 text-lg'>
        <Image src='/assets/images/logo.svg' alt='MeetYantra' width={40} height={40} />
      </h1>
      <ul>
        {navItems.map(item => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`mb-1 flex items-center justify-center rounded-lg py-4  hover:bg-indigo-100 hover:text-primary ${item.active ? 'bg-indigo-100 text-primary' : 'text-neutral-500'}`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span>{item.icon}</span>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <span>{item.label}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavItem;
