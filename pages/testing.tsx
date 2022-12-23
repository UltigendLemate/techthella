import Head from "next/head";
import Footer from "../components/Footer";

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
        <Footer />
      </div>
      {/* main hero section starts */}
    </>
  );
}
