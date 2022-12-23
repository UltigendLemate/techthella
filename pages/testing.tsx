import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AboutDataTemplate from "../components/AboutDataCard";
import { sectionData } from "../utilities/data";
import LoginCard from "../components/LoginCards";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const renderAboutData = sectionData.map((data, index) => (
  <AboutDataTemplate
    key={index}
    start={data.start}
    picImg={data.picImg}
    number={data.number}
    title={data.title}
  />
));
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
        <Sidebar />
      </div>
      {/* main hero section starts */}
    </>
  );
}
