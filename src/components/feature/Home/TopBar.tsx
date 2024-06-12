'use client';

import { CircleHelp, Plus } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { redirectToLoginPage } from '@/lib/utils';

const TopBar = () => {
  const { status, data: session } = useSession();

  console.log({ session });

  // Redirecting user to the login page if the user is unauthenticated
  redirectToLoginPage(status);

  return (
    <div className='mb-8 flex justify-between'>
      <Input placeholder='Search' className='w-1/3 bg-gray-50' />
      <div className='flex items-center gap-4'>
        <Button className='px-6 tracking-wide'>
          <Plus className='mr-2 h-4' /> Join a meeting
        </Button>
        <CircleHelp />
        {status === 'authenticated' && (
          <Button className='px-6 tracking-wide' onClick={() => signOut()}>
            Sign out
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
