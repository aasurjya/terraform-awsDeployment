import React from "react";
import HeroImg1 from "../../assets/aboutUs/HeroImg1.png";
import HeroImg2 from "../../assets/aboutUs/HeroImg2.png";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center justify-evenly h-[85vh]  ">
      <div className=" flex-auto flex flex-col justify-around">
        <h1 className="text-center text-6xl font-extrabold mt-[4rem] ">
          About XeroCodee
        </h1>
        <p className="text-xl text-secondary4 max-w-3xl text-center">
          Infrastructure automation is made possible by Xero Code Cloud for
          provisioning, compliance, and management of any cloud, datacenter, and
          service.
        </p>
      </div>
      <div className="flex flex-row w-[100%] md:justify-center  flex-auto mx-auto items-center  gap-6 h-[16rem]">
        <img
          className=" h-[100%] max-w-[60%]   block"
          src={HeroImg1}
          alt="Hero Image 1"
        />
        <img
          className="h-[100%] max-w-[40%]  block"
          src={HeroImg2}
          alt="Hero Image 2"
        />
      </div>
    </div>
  );
};

export default Hero;
