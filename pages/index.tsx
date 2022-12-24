import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import AboutDataTemplate from "../components/AboutDataCard";
import { sectionData } from "../utilities/data";
import LoginCard from '../components/LoginCards';
import Navbar from '../components/Navbar';
import ReviewCarousel from "../components/ReviewCarousel";

import mongoose, { mongo } from "mongoose";
import { GetServerSideProps } from 'next';
import Reviews from "../models/Reviews";
import Revi from "../models/Revi";

const inter = Inter({ subsets: ['latin'] })
const renderAboutData = sectionData.map((data, index) => (
  <AboutDataTemplate
    key={index}
    start = {data.start}
    picImg={data.picImg}
    number={data.number}
    title={data.title}
  />
));




export default function Home(Rev) {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />


      {/* main hero section starts */}
      <section className="flex justify-center h-[85vh] items-center px-28  gap-7">
        <div className='flex flex-col justify-center gap-7 max-w-[45vw]'>
        <h5 className='text-2xl text-purple-400 font-bold -my-4 font-public-sans'>START TO SUCCESS</h5>

        <h3 className='text-5xl font-semibold'>Empowering your long-lived <span className='text-green-500 '>trust</span> with <span className="text-green-500">technology</span> and <span className="text-green-500">love</span></h3>
        <h5 className='text-xl font-public-sans'>Restoring the connection between vendors and consumers in a split second. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius? et consectetur adipisicing elit. Ea, possimus.</h5>
        </div>

        <div className='w-[60vw]'>
          <Image 
          src={"/assets/herosec.gif"}
          width={500}
          height={500} 
          className="w-full"
          alt="" />

        </div>


      </section>
      {/* main hero section ends */}



      {/* stats section starts */}
      <section className="bg-gray-900 grid grid-cols-2 md:grid-cols-4 px-10 w-full">
          {renderAboutData}
        </section>
      {/* stats sectione ends   */}


{/* login  for vendor and consumer starts */}
      <section className='px-32 pt-20'>
      <div className='h-[70vh] rounded-3xl bg-black text-white px-48 flex flex-col items-center text-center'>
        <p className='text-6xl font-bold my-14 leading-tight '>Its your time to make the move with <span className='text-green-500'>tech
        <span className='text-white'>THELLA</span>
        </span></p> 
        </div>

      {/* this is the div surrounding vendor and customer */}
      <div className='grid grid-cols-2 gap-9 px-20 relative -top-64'>
        <LoginCard name="Vendor" imgName='vendor' text='Ordering stuff is easy without making you pocket squeezy. Sign up to know how'/>
        <LoginCard name='Consumer' imgName='consumer' text='bahut hua online ka prahaar, ab phone hi badhaega apki raftaar. Abhi sign up karei'/>
        </div>  
      </section>
{/* login  for vendor and consumer ends */}


        {/* Student Feedback Carousel Starts */}
        <div className="flex flex-col gap-10 w-4/5 py-4 mx-auto -my-32 mb-0 relative">
          <div className="flex flex-col gap-2">
            <div className="xl:text-5xl text-4xl font-semibold">
              <h1>
                Hear it from our customers!
              </h1>
            </div>
            <p className="text-[#6D737A] text-lg font-public-sans">
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
          </div>
 
          <ReviewCarousel />
  
        </div>
        {/* Student Feedback Carousel Ends */}

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if(!mongoose.connections[0].readyState){
  

  await mongoose.connect(process.env.MONGO_URL)
  console.log("Connected to database successfully")
  }

  let Rev = await Reviews.find();
  // let Revs = await Revi.find();
  return { 
    props: { Rev: JSON.parse(JSON.stringify(Rev))},
  }

}