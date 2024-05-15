import { CalendarDays, Cog, HandCoins, Home, Presentation, Settings, Wrench } from 'lucide-react';

export interface NavBarItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

const NavBarItems: NavBarItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: <Home size={16} />,
  },
  {
    label: 'Calendar',
    path: '/',
    icon: <CalendarDays size={16} />,
  },
  {
    label: 'Meetings',
    path: '/',
    icon: <Presentation size={16} />,
  },
  {
    label: 'Actions',
    path: '/',
    icon: <Cog size={16} />,
  },
  {
    label: 'Integrations',
    path: '/',
    icon: <Wrench size={16} />,
  },
  {
    label: 'Pricing',
    path: '/',
    icon: <HandCoins size={16} />,
  },
  {
    label: 'Settings',
    path: '/',
    icon: <Settings size={16} />,
  },
];

export default NavBarItems;
