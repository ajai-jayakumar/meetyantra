import Image from 'next/image';

import NavBarItems from '@/lib/data/navbar';

import Referral from '../Referral/Referral';

import NavItem from './NavItem';

const NavBar = () => {
  return (
    <nav className='flex w-1/6 flex-col justify-between bg-slate-100 p-4'>
      <div>
        <h1 className='mb-4 flex items-center gap-2 p-4 text-xl'>
          <Image src='/logo.svg' alt='MeetYantra' width={40} height={40} />
          Meet Yantra
        </h1>
        <ul>
          {NavBarItems.map(item => {
            return <NavItem key={item.label} {...item} />;
          })}
        </ul>
      </div>
      <Referral />
    </nav>
  );
};

export default NavBar;
