import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from './../provider/AuthProvider';
import {useContext} from 'react'
const SignIn = () => {
  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate()
  const handleSignIn=(e)=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    signIn(email,password)
    .then(res => {
      // Display success message using toast.success()
      toast.success('Login successful!');
      navigate('/mylist')
      console.log(res);
  })
  .catch(error => {
      // Display Firebase error message using toast.error()
      if (error.code === 'auth/invalid-credential') {
          toast.error('Invalid credentials. Please check your email and password.');
      } else {
          toast.error(error.message);
      }
      console.log(error);  // Optionally log the error
  });

  }
    return (
        <>
        <div className='w-full h-screen'>
          <img
            className='hidden sm:block absolute w-full h-full object-cover'
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='/'
          />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form onSubmit={handleSignIn}
               
                  className='w-full flex flex-col py-4'
                >
                  <input
                   
                    className='p-3 my-2 bg-gray-700 rouded'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    name='email'
                  />
                  <input
                 
                    className='p-3 my-2 bg-gray-700 rouded'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    name='password'
                  />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                    Sign In
                  </button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p>
                      <input className='mr-2' type='checkbox' />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className='py-8'>
                    <span className='text-gray-600'>
                      New to Netflix?
                    </span>{' '}
                    <Link to='/signup'>Sign Up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SignIn;