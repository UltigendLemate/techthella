import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import AboutDataTemplate from "../components/AboutDataCard";
import { sectionData } from "../utilities/data";

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
export default function Home() {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='h-[15vh] bg-red-300'></nav>


      {/* main hero section starts */}
      <section className="flex justify-center h-[85vh] items-center px-28  gap-7">
        <div className='flex flex-col justify-center gap-7 max-w-[45vw]'>
        <h5 className='text-2xl text-purple-400 font-bold -my-4 text-left'>START TO SUCCESS</h5>

        <h3 className='text-5xl font-semibold'>Empowering your long-lived <span className='text-primary-green '>trust</span> with <span className="text-primary-green">technology</span> and <span className="text-primary-green">love</span></h3>
        <h5 className='text-xl'>Restoring the connection between vendors and consumers in a split second. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eius? et consectetur adipisicing elit. Ea, possimus.</h5>
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
      <div className="bg-primary-purple grid grid-cols-2 md:grid-cols-4 px-10 w-full">
          {renderAboutData}
        </div>
    </>
  )
}
