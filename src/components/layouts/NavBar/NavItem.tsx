import React from 'react';
import { CalendarDays, Cog, HandCoins, Home, Presentation, Settings, Wrench } from 'lucide-react';
import Link from 'next/link';

import { NavBarItem } from '@/lib/data/navbar';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'Home':
      return <Home size={16} />;
    case 'Calendar':
      return <CalendarDays size={16} />;
    case 'Meetings':
      return <Presentation size={16} />;
    case 'Actions':
      return <Cog size={16} />;
    case 'Integrations':
      return <Wrench size={16} />;
    case 'Pricing':
      return <HandCoins size={16} />;
    case 'Settings':
      return <Settings size={16} />;
    default:
      return <Home size={16} />;
  }
};

const NavLinkItem = (props: NavBarItem) => {
  return (
    <Link
      href={props.path}
      className=' flex items-center gap-4 p-4 text-neutral-500 duration-500 hover:rounded-lg hover:bg-indigo-100 hover:text-blue-600'
    >
      <span>{getIcon(props.label)}</span>
      <span>{props.label}</span>
    </Link>
  );
};

export default NavLinkItem;
