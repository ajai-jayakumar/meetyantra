import { type ReactElement } from 'react';
import { CalendarDays, Cog, HandCoins, Home, Presentation, Settings, Wrench } from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface SideNavItemProps {
  label: string;
  href: string;
  icon: ReactElement;
  active: boolean;
}

export interface SocialLoginOption {
  name: string;
  label: string;
  logoPath: string;
  provider: string;
  authPath: string;
}

export const SideNavItems = (): SideNavItemProps[] => {
  const pathname = usePathname();

  const isNavItemActive = (nav: string) => {
    return pathname.includes(nav);
  };
  return [
    {
      label: 'Home',
      href: '/',
      icon: <Home size={16} />,
      active: pathname === '/' || pathname.includes('/t/'),
    },
    {
      label: 'Calendar',
      href: '/calendar',
      icon: <CalendarDays size={16} />,
      active: isNavItemActive('/calendar'),
    },
    {
      label: 'Meetings',
      href: '/meetings',
      icon: <Presentation size={16} />,
      active: isNavItemActive('/meetings'),
    },
    {
      label: 'Actions',
      href: '/actions',
      icon: <Cog size={16} />,
      active: isNavItemActive('/actions'),
    },
    {
      label: 'Integrations',
      href: '/integrations',
      icon: <Wrench size={16} />,
      active: isNavItemActive('/integrations'),
    },
    {
      label: 'Pricing',
      href: '/pricing',
      icon: <HandCoins size={16} />,
      active: isNavItemActive('/pricing'),
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings size={16} />,
      active: isNavItemActive('/settings'),
    },
  ];
};

export const SocialLoginOptions: SocialLoginOption[] = [
  {
    name: 'Google Login',
    label: 'Sign in with Google',
    logoPath: 'https://www.svgrepo.com/show/475656/google-color.svg',
    provider: 'google',
    authPath: 'https://accounts.google.com/o/oauth2/auth',
  },
  {
    name: 'Microsoft Login',
    label: 'Sign in with Microsoft',
    logoPath: 'https://www.svgrepo.com/show/452062/microsoft.svg',
    provider: 'azure-ad',
    authPath: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  },
];

export const SocialSignupOptions: SocialLoginOption[] = [
  {
    name: 'Google Login',
    label: 'Sign up with Google',
    logoPath: 'https://www.svgrepo.com/show/475656/google-color.svg',
    provider: 'google',
    authPath: '',
  },
  {
    name: 'Microsoft Login',
    label: 'Sign up with Microsoft',
    logoPath: 'https://www.svgrepo.com/show/452062/microsoft.svg',
    provider: 'azure-ad',
    authPath: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  },
];
