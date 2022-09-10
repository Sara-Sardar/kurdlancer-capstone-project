/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Languages from "./Languages";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Freelancers", href: "/freelancers", current: false },
  { name: "Jobs", href: "/jobs", current: false },
  { name: "Post Jobs", href: "/postjobs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

{
  /*fixed w-full z-20 top-0 left-0*/
}
export default function NavBar() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    console.log("the state of auth is :", auth);
  }, []);

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
                <Link
                  className="text-md flex-shrink-0 flex items-center text-white hover:amber-500 font-medium "
                  to="/"
                >
                  KURDLANCER
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-amber-400 hover:bg-amber-300 text-white"
                            : "text-gray-100 hover:bg-amber-400 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              {/*languages*/}
              <Languages />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {auth ? (
                  <Link
                    to="/signin"
                    className="bg-amber-400 px-3 py-2 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                    SignOut
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="bg-amber-400 px-3 py-2 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                    SignIn
                  </Link>
                )}
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
                    item.current
                      ? "bg-amber-500 text-white"
                      : "text-white hover:bg-amber-400 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
