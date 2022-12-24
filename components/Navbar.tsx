// import usestate
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  // make menu hover toggle

  const [menuPricing, setMenuPricing] = useState(false);
  const [menuServices, setMenuServices] = useState(false);

  return (
    <>
      <div>
        <nav className="relative border-gray-600 h-{15vh} z-40 bg-gray-900 ">
          <div className="flex flex-wrap h-[15vh]  justify-between items-center self-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <Link href={"/"} className="flex items-center">
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
                <span className="text-green-500">tech</span>THELLA
              </span>
            </Link>
            <button
              id="mega-menu-full-cta-button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
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
                <li className="flex  items-center">
                  <Link
                    href={"/"}
                    className="block py-2 pr-4 pl-3 border-b   md:border-0 md:p-0 text-gray-400 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700 text-xl"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href={"/aboutus"}
                    className="block py-2 pr-4 pl-3 border-b   md:border-0 md:p-0 text-gray-400 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700 text-xl"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="flex">
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-dropdown-placement="bottom"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium border-b md:w-auto md:border-0 md:p-0 text-gray-400 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700 text-xl"
                    onMouseEnter={() => {
                      setMenuPricing(true);
                      if (menuServices) {
                        setMenuServices(false);
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
                <li className="flex">
                  <button
                    id="mega-menu-full-cta-dropdown-button"
                    data-collapse-toggle="mega-menu-full-cta-dropdown"
                    data-dropdown-placement="bottom"
                    className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium  border-b  md:w-auto md:border-0  md:p-0 text-gray-400 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700 text-xl"
                    onMouseEnter={() => {
                      setMenuServices(true);
                      if (menuPricing) {
                        setMenuPricing(false);
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
                  <Link
                    href={"/login"}
                    className="block  text-black  bg-white md:border-0 px-3 py-2 rounded-xl  md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent text-xl border-gray-700"
                  >
                    Start Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Pricing */}
          <div
            id="mega-menu-full-cta-dropdown"
            className={
              menuPricing
                ? "mt-1 shadow-sm  bg-gray-900 absolute top-[104px] w-full "
                : "hidden"
            }
            onMouseLeave={() => setMenuPricing(false)}
          >
            <div className="grid py-5 px-4 mx-auto max-w-screen-xl  text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <div>
                <Link href={"/pricing"} className="block p-3 rounded-lg  hover:bg-gray-700">
                  <div className="font-semibold">Vendor - Pro Version</div>
                  <span className="text-sm font-light  text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </Link>
              </div>
              <div>
                <Link href={"/form"} className="block p-3 rounded-lg  hover:bg-gray-700">
                  <div className="font-semibold">Customer - Base Version</div>
                  <span className="text-sm font-light  text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </Link>
              </div>
              <div>
                <Link href={"/form"} className="block p-3 rounded-lg  hover:bg-gray-700">
                  <div className="font-semibold">Customer - Pro Version</div>
                  <span className="text-sm font-light  text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Services */}
          <div
            id="mega-menu-full-cta-dropdown"
            className={
              menuServices
                ? "mt-1 items-center  shadow-sm  absolute bg-gray-900 w-full top-[104px]"
                : "hidden"
            }
            onMouseLeave={() => setMenuServices(false)}
          >
            <div className="flex items-center py-5 px-4 mx-auto max-w-screen-xl z-40 text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <div className="z-10">
                <a href="#" className="block p-3 rounded-lg  hover:bg-gray-700">
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm font-light  text-gray-400">
                    Connect with third-party tools that youre already using.
                  </span>
                </a>
              </div>
              <div>
                <a href="#" className="block p-3 rounded-lg  hover:bg-gray-700">
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm font-light  text-gray-400">
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
