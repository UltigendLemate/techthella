import React from 'react'
import CustomerHome from "../components/CustomerNavbar";
import CustomerSidebar from "../components/CustomerSidebar";
import Head from "next/head";
import CustomerNear from './../components/CustomerNear';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";


const nearMe = [{
'Name': 'Ramu',
'Distance': '2km',
},{
  'Name': 'Somu',
  'Distance': '7km',
},{
  'Name': 'Vihari',
  'Distance': '1.1km',
},{
  'Name': 'Akash Jindal',
  'Distance': '2.1km',
}]
const Customer = () => {
  return (
    <>
      <Head>
        <title>TechThella</title>
        <meta name="description" content="perfect for vendors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <CustomerHome/>
        
        <div className="flex flex-row">
        <div className="flex w-screen z-0">
        <CustomerSidebar /> 
        
       <div className="flex flex-col mx-auto">
        <div className="text-[#fc6441] text-4xl text-center mt-20 font-extrabold">Vendors near you </div>
        <div className="w-4/5 mx-auto grid grid-cols-2 justify-center">
        <SwiperSlide
      className="h-[200px] mt-[48px] ml-[48px] bg-purple-50 rounded-3xl px-6 py-8  flex flex-col gap-8"
    >
      <div className="flex flex-col items-center justify-between rounded-3xl w-full gap-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src="http://medicine.exeter.ac.uk/images/profiles/John_Dennis.jpg"
              alt="mentor"
              className="h-14 rounded-full w-[50px]"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#1B1D1F]">Mukesh</h1>
              
            </div>
          </div>
          <div>
            <img src={`/reviews/quoteLogo.svg`} alt=""  className="text-green-500"/>
          </div>
        </div>
      </div>
      <div className="text-[#363A3D]">something</div>
    </SwiperSlide>

    <SwiperSlide
      className="h-[200px] mt-[48px] ml-[48px] bg-purple-50 rounded-3xl px-6 py-8  flex flex-col gap-8"
    >
      <div className="flex flex-col items-center justify-between rounded-3xl w-full gap-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src="http://medicine.exeter.ac.uk/images/profiles/John_Dennis.jpg"
              alt="mentor"
              className="h-14 rounded-full w-[50px]"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#1B1D1F]">Harish</h1>
            </div>
          </div>
          <div>
            <img src={`/reviews/quoteLogo.svg`} alt=""  className="text-green-500"/>
          </div>
        </div>
      </div>
      <div className="text-[#363A3D]">More something</div>
    </SwiperSlide>
    </div>
    
</div>

        </div>

        </div>
        </div>
    </>
  )
}

export default Customer
