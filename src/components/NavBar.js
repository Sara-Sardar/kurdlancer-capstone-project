/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Freelancers', href: '/freelancers', current: false },
  { name: 'Jobs', href: '/jobs', current: false },
  { name: 'Post Jobs', href: '/postjobs', current: false },
  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
{/*fixed w-full z-20 top-0 left-0*/}
export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-amber-500 "> 
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="text-md flex-shrink-0 flex items-center text-white hover:amber-500 font-medium " to='/'>
                 KURDLANCER
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-amber-400 hover:bg-amber-300 text-white' : 'text-gray-100 hover:bg-amber-400 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  to="/signin"
                  className="bg-amber-400 px-3 py-2 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                  SignIn
                </Link>

                {/* Profile dropdown */}
                {/*<Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-amber-400 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-amber-500')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-amber-500')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-amber-500')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>*/}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-amber-500 text-white' : 'text-white hover:bg-amber-400 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



/*import { GlobeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const links =[
    {name: 'Home', url: '/'},
    {name: 'Freelancers', url: '/freelancers'},   
    {name: 'Jobs', url: '/jobs'},
    {name: 'Post Jobs', url: '/postjobs'},    
];
 
export default function NavBar() {
  return (
    <div>
    <nav className="fixed-top text-amber-400 shadow-sm  flex justify-between items-center w-screen">
       
       <div className="flex "> 
       <a href="/" className="text-2xl mx-2 p-6 font-bold hover:underline ">KURDLANCER</a>
                
        <ul className="flex  py-4 ">
           {links.map((link,index)=>{
              return(
          <li className="text-xl mx-2 font-semibold  hover:underline rounded-md  py-2" key={index}>
                <Link to={link.url}>{link.name}</Link>
          </li>

              );
           })}
        </ul>
       </div>
         
        <div className="text-white mr-11">
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignIn</button>
        <button className="p-2 ml-4  bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignUp</button>
        <button className="p-2  ml-4 mb- bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        </div>
    </nav>
    </div>
  );
}
*/ 


