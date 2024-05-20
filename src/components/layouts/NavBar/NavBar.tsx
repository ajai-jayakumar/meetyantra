import Image from 'next/image';

import { Referral } from '@/components';
import NavBarItems from '@/lib/data/navbar';

import NavItem from './NavItem';

const NavBar = () => {
  return (
    <>
      <div>
        <h1 className='mb-1 flex items-center gap-2 p-4 text-lg'>
          <Image src='/assets/images/logo.svg' alt='MeetYantra' width={40} height={40} />
          Meet Yantra
        </h1>
        <ul>
          {NavBarItems.map(item => {
            return <NavItem key={item.label} {...item} />;
          })}
        </ul>
      </div>
      <Referral />
    </>
  );
};

export default NavBar;
