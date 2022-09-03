import React from "react";
import SecondLayout from "../layouts/SecondLayout";
import { Ellipsis, vertical } from "@heroicons/react/solid";
import ContactMails from "../components/ContactMails";
export default function Emails() {
  return (
    <SecondLayout>
      <div className="container mx-auto text-white m-10">
        <div className="container mx-auto h-32  p-6 rounded-md  bg-amber-400 ">
          <div className=" text-white md:flex flex  space-x-96">
            <div className="p-2 my-2 mx-5">
              <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                Emails
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactMails />
    </SecondLayout>
  );
}
