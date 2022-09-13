import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { LanguageIcon } from "@heroicons/react/solid";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
export default function Languages() {
  return (
    <div className="w-14  text-right mr-24 z-50 lg:mr-0">
      <Menu as="div" className=" w-auto">
        <div>
          <Menu.Button className="rounded-full bg-amber-500 bg-opacity-20 p-3 hover:bg-amber-400 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => i18n.changeLanguage("en")}
                    className={`${
                      active ? "bg-blue-900 text-white" : "text-blue-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => i18n.changeLanguage("ku")}
                    className={`${
                      active ? "bg-blue-900 text-white" : "text-blue-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    كوردي
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => i18n.changeLanguage("ar")}
                    className={`${
                      active ? "bg-blue-900 text-white" : "text-blue-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    عربي
                  </button>
                )}
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
