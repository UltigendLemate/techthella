// import usestate
import { useState } from "react";

export default function Home() {
  // make menu hover toggle

  const [menuPricing, setMenuPricing] = useState(false);
  const [menuServices, setMenuServices] = useState(true);

  return (
    <>
      <div>
        <nav className="bg-white relative  border-gray-200 dark:border-gray-600 h-{15vh} dark:bg-gray-900">
          <div className="flex flex-wrap h-[15vh]  justify-between items-center self-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="https://flowbite.com" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <span className="text-green-500">tech</span>THELLA
              </span>
            </a>
            <button
              id="mega-menu-full-cta-button"
              data-collapse-toggle="mega-menu-full-cta"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-full-cta"
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li>
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onMouseEnter={() => {
                      if (!menuServices) {
                        setMenuPricing(true);
                      }
                    }}
                  >
                    Pricing{" "}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        // clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    onMouseEnter={() => {
                      if (!menuPricing) {
                        setMenuServices(true);
                      }
                    }}
                  >
                    Services{" "}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        // fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        // clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="block  text-black  bg-white md:border-0 px-3 py-2 rounded-xl  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Start Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing */}
          <div
            id="mega-menu-full-cta-dropdown"
            className={
              menuPricing
                ? "mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 absolute top-20 w-full dark:border-gray-600"
                : "hidden"
            }
            onMouseLeave={() => setMenuPricing(false)}
          >
            <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <div>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Vendor - Pro Version</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Customer - Base Version</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Customer - Pro Version</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Services */}
          <div
            id="mega-menu-full-cta-dropdown"
            className={
              menuServices
                ? "mt-1 bg-white items-center border-gray-200 shadow-sm border-y absolute top-20 w-full dark:bg-gray-800 dark:border-gray-600"
                : "hidden"
            }
            onMouseLeave={() => setMenuServices(false)}
          >
            <div className="flex items-center py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <div>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
