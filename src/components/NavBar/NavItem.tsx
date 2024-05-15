import React from 'react';
import Link from 'next/link';

import { NavBarItem } from '@/lib/data/navbar';

const NavLinkItem = (props: NavBarItem) => {
  return (
    <Link
      href={props.path}
      className=' flex items-center gap-4 p-4 text-neutral-500 duration-500 hover:rounded-lg hover:bg-indigo-100 hover:text-blue-600'
    >
      <span className='text-xl'>{props.icon}</span>
      <span className='text-lg'>{props.label}</span>
    </Link>
  );
};

export default NavLinkItem;
