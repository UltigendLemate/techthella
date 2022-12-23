import Head from "next/head";
import Aboutuscard from "../components/AboutUsCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Aboutus() {
  return (
    <div>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* heading */}
      <div className="flex flex-col space-y-10 pt-4 justify-center align-middle w-4/5 mx-auto">
        <h1 className="text-5xl font-black text-center">ABOUT US</h1>
        <p className="text-center text-xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          harum delectus nostrum maxime quibusdam fugit a nam quis, reiciendis,
          inventore magni officia minus! Rem, libero.
        </p>
        <p className="text-center text-xl">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          esse repudiandae impedit nisi minima. Aperiam eum deleniti voluptatem
          dolor illo repellendus veniam molestias animi a.
        </p>
        <p className="text-center text-xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sit
          laborum iste quidem dolores fugiat, aliquid fugit commodi. Voluptatem,
          a?
        </p>
        <div className=" grid grid-cols-3 space-x-4 ">
          <Aboutuscard />
          <Aboutuscard />
          <Aboutuscard />
        </div>
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
