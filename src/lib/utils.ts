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
