import Image from 'next/image';

import SigninImage from '../../../public/assets/images/sigin-image.png';

export default function LoginHome() {
  return (
    <div className='flex h-full'>
      <Image className='m-auto' src={SigninImage} loading='lazy' alt='google logo' width={626} height={417} />
    </div>
  );
}
