import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { BellIcon } from "@heroicons/react/solid";
import ContactList from "./ContactList";

export default function Notification() {
  return (
    <div className="w-14 text-right">
      <Menu as="div" className=" w-auto">
        <div>
          <Menu.Button className="rounded-full bg-amber-500 bg-opacity-20 p-3 hover:bg-amber-400 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <BellIcon
              className="rounded-full w-6 h-6  text-white hover:text-white"
              aria-hidden="true"
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
          <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <ContactList />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#1D4A7A"
        stroke="#ffffff"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#1D4A7A"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#1D4A7A"
        stroke="#ffffff"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#none"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#1D4A7A" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#1D4A7A" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#1D4A7A" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#1D4A7A" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#ffffff" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#ffffff" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="none"
        stroke="#1D4A7A"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#1D4A7A" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#1D4A7A" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#ffffff" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}
