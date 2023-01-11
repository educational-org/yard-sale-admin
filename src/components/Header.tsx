/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';
import logo from '@logos/logo_yard_sale_white.svg';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Productos', href: '/dashboard/products', current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const router = useRouter();
  const auth: any = useAuth();

  useEffect(() => {
    if (router.pathname == navigation[0].href) {
      navigation[0].current = true;
      navigation[1].current = false;
    } else if (router.pathname == navigation[1].href) {
      navigation[0].current = false;
      navigation[1].current = true;
    }
  }, [router]);

  const userData = {
    name: auth?.user?.name,
    email: auth?.user?.mail,
    imageUrl: auth?.user?.avatar,
  };

  const logOutHandler = () => {
    auth.logOut();
    router.push('/');
  };

  return (
    <>
      <Disclosure as="nav" className="bg-slate-700">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image width={200} className="h-auto w-100" src={logo} alt="Workflow" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-purple-400 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className=" bg-purple-400 p-1 rounded-full text-slate-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image width={50} height={50} className="h-8 w-8 rounded-full" src={userData.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <button onClick={logOutHandler} className="block px-4 py-2 text-sm text-gray-700">
                            Log Out
                          </button>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="flex items-center my-6 px-5">
                <div className="flex-shrink-0">
                  <Image width={50} height={50} className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-purple-400">{userData.name}</div>
                  <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
                </div>
                <button
                  type="button"
                  className="ml-auto bg-purple-400 flex-shrink-0 p-1 rounded-full text-slate-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(item.current ? 'bg-purple-400 text-white' : 'text-white hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-slate-800">
                <div className="px-2">
                  <button onClick={logOutHandler} className="block font-bold px-4 py-2 text-sm text-white">
                    Log Out
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
