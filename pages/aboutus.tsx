import Head from "next/head";
import Image from "next/image";
import Aboutuscard from "../components/AboutUsCard";
import ContactForm from "../components/ContactForm";
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
        <h1 className="text-5xl font-black text-center">
          ABOUT
          <span className="text-green-500"> US</span>{" "}
        </h1>
        <div className="flex flex-shrink flex-grow-0">
          {/* left */}
          <div className="flex flex-col justify-center align-middle space-y-8">
            <p className="text-center text-xl">
              {" "}
              Based out of Delhi Technological University, techTHELLA is aimed
              to solve the problems of the street vendors by becoming a platform
              providing the ailment to all their daily problems.
            </p>
            <p className="text-center text-xl">
              {" "}
              Ranging from converting their hardwork into smartwork to providing
              the feel of being working in an organised way are some of the
              benefits at the part of vendors to use us. Customers on the other
              hand get the power of bargaining back in their hands with a sense
              of added security and community building.
            </p>
          </div>
          {/* right */}
          <div className="ml-auto min-w-32">
            <Image
              src={"/assets/herosec.gif"}
              width={500}
              height={500}
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className=" grid grid-cols-3 space-x-4 ">
          <Aboutuscard />
          <Aboutuscard />
          <Aboutuscard />
        </div>
      </div>
      <div className="pt-20">
        <ContactForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
