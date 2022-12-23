import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <Navbar />

        <div className="flex w-screen z-0">
        <Sidebar />
        </div>
      </div>
      {/* main hero section starts */}
    </>
  );
}
