'use client';

import { useEffect } from 'react';

export default function Loading() {
  const authenticateUser = async (code: any) => {
    const user = await fetch(`http://localhost:8000/mscode?code=${code}`, { credentials: 'include' });
    const data = await user.json();
    console.log({ data });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userCode = urlParams.get('code');
    authenticateUser(userCode);
  }, []);

  return <div className='flex h-full'>BRO I AM LOADING... PLEASE WAIT UNTILL I AUTHENTICATE YOUR PROFILE...</div>;
}
