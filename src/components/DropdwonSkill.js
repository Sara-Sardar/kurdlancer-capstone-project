import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function DropdwonSkill() {
  return (
    <div className="w-full px-4 pt-16 mb-10">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {/*1*/}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Development And IT</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> JavaScript Developers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> WordPress Developers
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>HTML Developers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>WordPress Developers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>
                  CSS Developers PHP Developers
                </Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}> PHP Developers</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*2*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Design And Creative</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> Graphic Designers Animators</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Adobe Photoshop Experts
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Adobe Illustrator Experts</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Logo Designers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Illustrators</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}> Animators</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*3*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Sales And Marketing</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> Facebook Ads Specialists</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Marketing Strategists
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>SEO Keyword Researchers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Social Media Managers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Google Analytics Experts</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Email Marketers</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*4*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Writing And Translation</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> Accountants</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Bookkeepers
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Business Planners</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Financial Analysts</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Tax Preparers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>
                  Business Intelligence Developers
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*5*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>HR & Training</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}>
                  {" "}
                  Technology Freelancers / Online Freelancers
                </Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Recruiters & Recruitment
                Consultants
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Interviewers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Human Resource Managers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>e-Learning Specialists</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Instructional Designers</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*6*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Finance & Accounting</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> Accountants</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Bookkeepers
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Business Planners</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Financial Analysts</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>e-Learning Specialists</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Startup Consultants</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*8 */}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Legal </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> Legal Consultants</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> Business Law Freelancers
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Legal Researchers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Legal Assistants</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>
                  Partnership Agreements Freelancers
                </Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>
                  Civil Law Lawyers & Legal Professionals
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/*7*/}
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-900  px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 shadow-md hover:shadow-lg  hover:bg-blue-800">
                <span>Engineering & Architecture </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Link to={"/freelancerInfo"}> 3D Designers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}></Link> AutoCAD Drafters
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Product Designers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Interior Designers</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>Mathematics Specialists</Link>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {" "}
                <Link to={"/freelancerInfo"}>SketchUp Specialists</Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
