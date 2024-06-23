'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [tokenCode, setTokenCode] = useState<string | null>();

  const authenticateUser = async (code: any) => {
    const user = await fetch(`http://localhost:8000/gcode?code=${code}`, { credentials: 'include' });
    const data = await user.json();
    if (data?.id) {
      window.location.replace('http://localhost:3000');
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userCode = urlParams.get('code');
    setTokenCode(userCode);
  }, []);

  useEffect(() => {
    console.log({ tokenCode });
    tokenCode && authenticateUser(tokenCode);
  }, [tokenCode]);

  return <div className='flex h-full'>BRO I AM LOADING... PLEASE WAIT UNTILL I AUTHENTICATE YOUR PROFILE...</div>;
}
