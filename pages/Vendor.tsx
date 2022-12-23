import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import LocateCustomer from "../components/LocateCustomer";


export default function Home() {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative overflow-x-hidden">
        <Navbar />

        <div className="flex z-0 relative">
        <Sidebar />
        {/* <Leaderboard /> */}
        <LocateCustomer />
        </div>
      </div>
      {/* main hero section starts */}
    </>
  );
}
