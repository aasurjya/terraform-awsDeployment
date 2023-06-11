import React from "react";
import MissionImg from "../../assets/aboutUs/MissionImg.png";

const Stats = () => {
  return (
    <div
      className="bg-[#F9F9F9] text-6xl font-semibold text-center flex flex-row w-full justify-evenly
        rounded-[1.5rem] py-6
    "
    >
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider">
          00<span className="text-primary1">M</span>
        </h1>
        <h3 className="text-lg">Client Satisfaction</h3>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider">
          00<span className="text-primary1">h</span>
        </h1>
        <h3 className="text-lg">Expert Support Team</h3>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider">
          00<span className="text-primary1"> k+</span>
        </h1>
        <h3 className="text-lg">Sales Count</h3>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold tracking-wider">
          00<span className="text-primary1">+</span>
        </h1>
        <h3 className="text-lg">Client Worldwide</h3>
      </div>
    </div>
  );
};

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row text-secondary4 text-sm md:text-xl gap-10">
      <div className="flex flex-col justify-evenly">
        <h1 className="text-black text-5xl  font-extrabold">Our Mission</h1>
        <p>
          Our mission is to revolutionize the world of software development with
          innovative DevOps automation and SaaS applications. We believe that
          technology should be accessible to everyone, regardless of their
          technical background or expertise. That's why we're committed to
          building tools that are intuitive, user-friendly, and don't require
          any coding skills to use.
        </p>
      </div>

      <img
        className="max-w-[50%] object-cover h-auto block"
        src={MissionImg}
        alt="Mission Image"
      />
    </div>
  );
};

const Mission = () => {
  return (
    <div className=" flex flex-col justify-evenly  h-[80vh]  w-[90%] mx-auto">
      <Stats />
      <OurMission />
    </div>
  );
};

export default Mission;
