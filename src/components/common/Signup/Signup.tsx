import { Button } from '@/components/ui/button';

type Props = {
  loginFlow: string;
  setLoginFLow: any;
};

const Signup = (props: Props) => {
  // constants
  const signUpText = 'Sign up';
  const signInText = 'Sign in';
  const signUpHelperText = "I don't have an account?";
  const singInHelperText = 'Already have an account?';

  // variable checks
  const isLoginFlow = props.loginFlow === 'login';

  return (
    <div className='rounded-2x mb-4 p-4 text-center'>
      <span className='text-xs text-slate-500'>{isLoginFlow ? signUpHelperText : singInHelperText}</span>
      <Button
        className='ml-4 bg-white px-8 py-2 font-semibold'
        variant='outline'
        onClick={() => props.setLoginFLow(isLoginFlow ? 'signup' : 'login')}
      >
        {isLoginFlow ? signUpText : signInText}
      </Button>
    </div>
  );
};

export default Signup;
