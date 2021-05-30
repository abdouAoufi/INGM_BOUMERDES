/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../Button/Button";
import logo from "../../assets/images/icons/logoS.svg"

const navigation = [
  { name: "Acceuil", href: "#", current: false },
  { name: "Programme", href: "#", current: false },
  { name: "Cours", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="sticky max- h-16">
      {({ open }) => (
        <>
          <div className="sticky max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="relative flex  items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between ">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="block  h-8 mr-2 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </a>
                  <p className="font-bold mt-1">FSI</p>
                  
                </div>
                <div className=" sm:hidden sm:ml-6">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-700 hover:text-white",
                          "px-2 py-2 rounded-md text-base font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <Button>Acceder</Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-white shadow">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-blck hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
