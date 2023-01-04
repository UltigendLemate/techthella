import Head from "next/head";
import Image from "next/image";
import UpdateCart from "../components/UpdateCart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Leaderboard from "../components/Leaderboard";
import LocateCustomer from "../components/LocateCustomer.js";
// import UpdateCart from "../components/UpdateCart";
import { useState } from 'react';


export default function Home() {
  const [component, setcomponent] = useState('locate customer')
  console.log(component);

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
        <Sidebar component={setcomponent}/>
        { (component === 'leaderboard') ? <Leaderboard /> : null}
        {(component === 'locate customer' || component==='') ? <LocateCustomer /> : null}
        {(component === 'update' || component==='') ? <UpdateCart /> : null}
        </div>
      </div>
      {/* main hero section starts */}
    </>
  );
}
