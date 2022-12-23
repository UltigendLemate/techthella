import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for a smooth experience
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at TechThella we focus on markets where technology,
              innovation, and capital can unlock long-term value and drive
              economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Customer - Free</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">Free</span>
              </div>

              <Link
                href={"/login"}
                className="text-white border bg-blue-600 hover:bg-primary-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get started
              </Link>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Customer - Pro</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">₹120</span>
                <span className="text-gray-500 ">/month</span>
              </div>
              <Link
                href={"/login"}
                className="text-white border bg-blue-600 hover:bg-primary-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get started
              </Link>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Vendor - Pro</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">₹150</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <Link
                href={"/login"}
                className="text-white border bg-blue-600 hover:bg-primary-gray-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
