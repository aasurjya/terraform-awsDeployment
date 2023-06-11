import { useState } from "react";
import { motion } from "framer-motion";

import testimonalImg from "../../assets/testimonal/aryasoni.png";
import Star from "../../assets/icons/rating.svg";

import { fadeIn, headTextAnimation } from "../../utils/motion";
import { testimonialList } from "../../utils/testimonials";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const UserInfo = ({ designation, name }) => {
  return (
    <div className="flex flex-col justify-between items-center mt-8">
      <img
        className="rounded-full h-[12rem] w-[12rem] object-cover"
        src={testimonalImg}
        alt=""
      />
      <h1 className="text-3xl bold">{name}</h1>
      <h1 className="">{designation}</h1>
      <img src={Star} alt="" />
    </div>
  );
};

// Feature component
const Review = ({ name, text, rating, designation }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[70%] mt-[1rem] mx-auto">
      <motion.p
        className="text-center text-[1.5rem] italic"
        {...headTextAnimation()}
      >
        {text}
      </motion.p>
      <UserInfo name={name} designation={designation} />
    </div>
  );
};

// Home page component
const DyanmicContainer = ({ name, designation, review, rating }) => {
  return (
    <div className="flex flex-wrap justify-center mt-[2rem]">
      <Review
        text={review}
        name={name}
        designation={designation}
        rating={rating}
      />
    </div>
  );
};
const Testimonal = () => {
  const leftArr = "<";
  const rightArr = ">";
  return (
    <div className="text-white bg-primary1 flex min-w-[100vw] mt-[10rem] px-4 py-[2rem] min-h-[65vh] flex-col justify-evenly items-center ">
      <div className="font-bold px-10 py-6 border rounded-full  text-secondary5 bg-[#4192FF] border-none text-lg">
        Testimonial
      </div>
      <div className=" flex flex-col items-center">
        {/* <h1 className="font-extrabold text-center  text-[3.5rem]">
          Trusted by millions of creators.
        </h1> */}
        {/* <h1 className="text-[8rem] font-extrabold">“</h1> */}
        <div className="flex w-[100%] mx-auto">
          {/* <div className="w-fit h-fit px-5 py-3 rounded-full hover:bg-[#4192FF] text-2xl font-bold">
            {leftArr}
          </div> */}
          <Carousel
            axis="horizontal"
            autoPlay="true"
            interval="2500"
            infiniteLoop="true"
            margin="auto"
            useKeyboardArrows="true"
            showThumbs="false"
            showArrows="false"
            showIndicators="false"
          >
            {testimonialList.map((item, index) => (
              <DyanmicContainer key={index} {...item} />
            ))}
          </Carousel>

          {/* <div className="w-fit h-fit px-5 py-3 rounded-full hover:bg-[#4192FF] text-2xl font-bold">
            {rightArr}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Testimonal;
