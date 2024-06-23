import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function redirectToHomePage(status: string) {
  if (status === 'authenticated') {
    window.location.href = '/';
  }
}

export function redirectToLoginPage(status: string) {
  if (status === 'unauthenticated') {
    window.location.href = '/login';
  }
}

export function redirectAuthURL(provider: string, authPath: string, clientId: string, redirectURL: string) {
  if (provider === 'azure-ad') {
    return `${authPath}?client_id=${clientId}&response_type=code&redirect_uri=${redirectURL}&response_mode=query
&scope=offline_access%20user.read%20mail.read&state=12345`;
  } else if (provider === 'google') {
    return `${authPath}?response_type=code&client_id=${clientId}&redirect_uri=${redirectURL}&scope=openid%20profile%20email&access_type=offline`;
  }
}
