import React from "react";
import CountUp from "react-countup";

type Props = {
  start : number;
  picImg: string;
  number: number;
  title: string;
};

const AboutDataCard = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center py-10 justify-center">
      <img src={`/assets/${props.picImg}.svg`} alt="" />
      <div className="text-black flex flex-col gap-2 text-center md:text-left ">
        <CountUp
          start={props.start}
          end={props.number}
          duration={2}
          enableScrollSpy={true}
          className="font-semibold text-4xl text-green-500"
          suffix="+"
        />
        {/* <h3 className="font-semibold text-3xl">{props.number}</h3> */}
        <h5 className="text-xl text-white font-public-sans">{props.title}</h5>
      </div>
    </div>
  );
};

export default AboutDataCard;
