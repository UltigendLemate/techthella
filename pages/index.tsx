import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex">
        <div>
        <h3 className='text-5xl'>Empowering your long-lived trust with technology and love.</h3>
        <h5 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro aliquid facere necessitatibus suscipit sunt molestiae, neque quia! Aperiam, mollitia?</h5>
        </div>

        <div className='w-60 h-60 bg-red-500'>
          {/* <img src={"/assets/"} alt="" /> */}

        </div>


      </section>
    </>
  )
}
