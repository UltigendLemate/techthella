import React from "react";
import Image from "next/image";


type Props = {
  imgName: string;
  name: string;

};

const LoginCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 bg-primary-purple items-center border-4 py-6 border-black rounded-2xl px-12 text-center justify-center">
      <Image src={`/assets/${props.imgName}.svg`} width={300} height={50} alt=""/>
      <h2 className="text-3xl font-semibold">Are you a <span className=" text-primary-green">{props.name}</span>?</h2>
      <h5 className="text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, atque. Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vel? </h5>
     <button className="text-2xl bg-primary-green text-white font-semibold px-6 py-2 rounded-2xl">Login Now</button>
    </div>
  );
};

export default LoginCard;
