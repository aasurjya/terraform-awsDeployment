import { useState } from "react";
import { fadeIn, slideAnimation } from "../../utils/motion";
import { AnimatePresence, motion } from "framer-motion";

// Card component for each
const Card = ({ imageSrc, title, description, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      {...slideAnimation("down", index * 0.5)}
      className={`transform transition duration-300 pt-4 ${
        index === 1 ? "lg:bg-secondary1 lg:scale-110" : ""
      } p-6 hover:z-10 border-black w-full max-w-[24rem] pt-[3rem] pb-[1.5rem] flex justify-evenly items-center flex-col rounded-3xl`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        <div className="p-[1rem]">
          <img
            className="min-w-[10rem] block w-auto mx-auto"
            src={imageSrc}
            alt=""
          />
          <h2 className="text-lg md:text-2xl font-bold mb-6">{title}</h2>
        </div>
      </div>
      <p className="text-secondary4  text-sm md:text-[1rem] lg:text-xl">
        {description}
      </p>
      <a
        className={`pt-4 underline ${hover ? "text-primary1" : ""}`}
        href="/features"
      >
        Learn More
      </a>
    </motion.div>
  );
};

// Reusable Components
const Analytic = ({ head, para, data }) => {
  return (
    <motion.div className="text-center w-[100%] m-auto my-32 flex flex-col justify-center items-center">
      <div className="text-sm text-primary1 font-bold bg-secondary2 px-8 py-5 border rounded-full">
        {head}
      </div>
      <div>
        <h1 className="text-lg md:text-5xl max-w-[70%] mx-auto font-extrabold font-Nunito mt-[2rem]">
          {para}
        </h1>
      </div>

      <div className="text-center grid grid-cols-1 lg:grid-cols-3 grid-rows-1 m-auto justify-evenly mt-[4rem] gap-x-[4rem]">
        {data.map((Analytic, index) => (
          <Card
            key={index}
            imageSrc={Analytic.imageSrc}
            title={Analytic.title}
            description={Analytic.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Analytic;
