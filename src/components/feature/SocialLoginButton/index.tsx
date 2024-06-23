import React, { useEffect } from 'react';
import { Button } from '@/components';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

import { SocialLoginOptions, SocialSignupOptions } from '@/lib/data/SideNavBar';
import { redirectAuthURL } from '@/lib/utils';
// import { redirectToHomePage } from '@/lib/utils';

type Props = { loginFlow: string };

export default function SocialLoginButton(props: Props) {
  const { status, data: session } = useSession();

  console.log({ status, session });
  // redirectToHomePage(status);

  useEffect(() => {
    // Send the ID token to your backend API for verification and authentication
    fetch('http://localhost:8000/user', {
      credentials: 'include', // Include this line to send and receive cookies
    })
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        // if (data.status === 'success') {
        //   // The authentication was successful, and the cookie has been set
        //   console.log('Authentication successful');
        //   redirectToHomePage(status);
        // } else {
        //   // There was an error during the authentication process
        //   console.log('Authentication error:', data.message);
        // }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [status]);

  const socialAuthOptions = props.loginFlow === 'login' ? SocialLoginOptions : SocialSignupOptions;
  const isLoginFlow = props.loginFlow === 'login';

  const handleGoogleSignIn = (event: React.FormEvent<Element>, provider: string, authPath: string) => {
    event.preventDefault();
    // signIn(provider);
    // Microsoft ClientID -> delete later
    const clientIdMicrosoft = 'b05b76f9-8a76-4f91-88cd-05e3c0c8eb7e';
    const redirectURLMicrosoft = 'http://localhost:3000/mscallback';
    // Google ClientID -> delete later
    const clientIdGoogle = '518243688349-4om4hjvrqebjqfdjq56bo8v2nqchirp8.apps.googleusercontent.com';
    const redirectURLGoogle = 'http://127.0.0.1:3000/gcallback';

    const clientId = provider === 'google' ? clientIdGoogle : clientIdMicrosoft;
    const redirectURL = provider === 'google' ? redirectURLGoogle : redirectURLMicrosoft;
    const authURL = redirectAuthURL(provider, authPath, clientId, redirectURL);
    authURL && window.location.replace(authURL);
  };

  return (
    <div>
      <h1 className='mb-[36px] flex items-center justify-center text-[28px] font-medium dark:bg-gray-800'>
        {isLoginFlow ? 'Sign in' : 'Sign up'}
      </h1>
      {socialAuthOptions.map(option => {
        return (
          <div key={option.name} className='mb-5 flex items-center justify-center dark:bg-gray-800'>
            <Button
              className='flex w-[350px] gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 transition duration-150 hover:border-slate-400 hover:text-white hover:shadow dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-300'
              onClick={e => handleGoogleSignIn(e, option?.provider, option?.authPath)}
            >
              <Image
                className='h-6 w-6'
                src={option?.logoPath}
                loading='lazy'
                alt='google logo'
                width={40}
                height={40}
              />
              <span className='m-auto'>{option?.label}</span>
            </Button>
          </div>
        );
      })}
      <div className='text-center text-xs'>
        <p>
          <a className='text-blue-600 underline' href='www.google.com'>
            Terms of Service
          </a>{' '}
          and{' '}
          <a className='text-blue-600 underline' href='www.google.com'>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
