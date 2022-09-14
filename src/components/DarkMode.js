import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function DarkMode() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className=" mr-2 ">
      <div className="">
        <Switch
          onClick={() => document.documentElement.classList.add("dark")}
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-blue-900" : "bg-amber-600"}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only bg-teal-700">Use setting</span>
          <span
            onClick={() => document.documentElement.classList.remove("dark")}
            aria-hidden="true"
            className={`${enabled ? "translate-x-7" : "translate-x-1 "}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
}
