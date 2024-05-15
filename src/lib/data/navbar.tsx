import {
  IoCalendarNumberOutline,
  IoCogOutline,
  IoConstructOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoPricetagOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

export interface NavBarItem {
  label: string;
  path: string;
  icon: JSX.Element;
}

const NavBarItems: NavBarItem[] = [
  {
    label: 'Home',
    path: '/',
    icon: <IoHomeOutline />,
  },
  {
    label: 'Calendar',
    path: '/',
    icon: <IoCalendarNumberOutline />,
  },
  {
    label: 'Meetings',
    path: '/',
    icon: <IoPeopleOutline />,
  },
  {
    label: 'Actions',
    path: '/',
    icon: <IoCogOutline />,
  },
  {
    label: 'Integrations',
    path: '/',
    icon: <IoConstructOutline />,
  },
  {
    label: 'Pricing',
    path: '/',
    icon: <IoPricetagOutline />,
  },
  {
    label: 'Settings',
    path: '/',
    icon: <IoSettingsOutline />,
  },
];

export default NavBarItems;
