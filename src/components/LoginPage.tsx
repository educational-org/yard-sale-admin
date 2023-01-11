import { LockClosedIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';


import Modal from '@common/Modal';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';

export default function LoginPage() {
  const [open, setOpen] = useState(false); //useState del modal
  const router = useRouter();
  const emailRef: any = useRef();
  const passRef: any = useRef();
  const auth: any = useAuth();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;

    auth.signIn(email, password)
      .then(() => {
        router.push('/dashboard');
      })
      .catch((err: any) => {
        console.log(err);
        setOpen(true);
      });
  };

  return (
    <>
      <Modal title={'Incorrect Credentials'} open={open} setOpen={setOpen}>
        <div className="flex flex-col items-start">
          <p className="text-sm mb-6">Verify your username and password to get access to the app.</p>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
            }}
            className="self-start inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Close and try again
          </button>
        </div>
      </Modal>
      <div className="h-90v m-0 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div>
            <Image className="mx-auto w-40" src={logo} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-400 focus:border-purple-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-400 focus:border-purple-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passRef}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-purple-400 focus:ring-purple-400 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-400 hover:text-purple-400">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-400 hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-purple-700 group-hover:text-purple-900" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
