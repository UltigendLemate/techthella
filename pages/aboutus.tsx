import Head from "next/head";
import Image from "next/image";
import Aboutuscard from "../components/AboutUsCard";
import ContactForm from "../components/ContactForm";

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
      <div className="flex flex-col  justify-center align-middle w-4/5 mx-auto">
        
        <div className="flex text-left">
          {/* left */}
          <div className="flex flex-col justify-center align-middle space-y-8">
          <h1 className="text-6xl font-black ">
          ABOUT
          <span className="text-green-500"> US</span>{" "}
        </h1>

            <p className="text-xl">
              {" "}
              Based out of Delhi Technological University, techTHELLA is aimed
              to solve the problems of the street vendors by becoming a platform
              providing the ailment to all their daily problems.
            </p>
            <p className="text-xl">
              {" "}
              Ranging from converting their hardwork into smartwork to providing
              the feel of being working in an organised way are some of the
              benefits at the part of vendors to use us. Customers on the other
              hand get the power of bargaining back in their hands with a sense
              of added security and community building.
            </p>
          </div>
          {/* right */}
          <div className="min-w-[40vw]">
            <Image
              src={"/assets/about.gif"}
              width={500}
              height={500}
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-12 ">
          <Aboutuscard />
          <Aboutuscard />
          <Aboutuscard />
        </div>
      </div>
      <div className="pt-20">
        <ContactForm />
      </div>
      <div>

      </div>
    </div>
  );
}
