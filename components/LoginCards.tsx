import React from "react";
import Image from "next/image";


type Props = {
  imgName: string;
  name: string;
  text: string;

};

const LoginCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center border-4 py-6 bg-purple-50 border-black rounded-2xl px-12 text-center justify-center">
      <Image src={`/assets/${props.imgName}.svg`} width={300} height={50} alt=""/>
      <h2 className="text-3xl font-semibold">Are you a <span className=" text-green-500">{props.name}</span>?</h2>
      <h5 className="text-lg text-center font-public-sans">{props.text}</h5>
     <button className="text-2xl bg-green-500 text-white font-semibold px-6 py-2 rounded-2xl">Start Now</button>
    </div>
  );
};

export default LoginCard;
