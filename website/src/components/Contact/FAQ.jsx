import React, { useState } from "react";
import { FAQList } from "../../utils/FAQList";
import { motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";

const FAQTile = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
        transition: { type: "spring", duration: 0.8, delay: 0.5 },
      }}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 0.8, delay: index * 0.5 },
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={`bg-secondary5 rounded-2xl my-[1rem] p-4 w-full`}
    >
      <div className={`flex items-center justify-between  w-full p-2`}>
        <h5 className="font-bold text-2xl w-full">{question}</h5>
        <div
          className={`bg-primary1 h-[40px] w-[40px] rounded-full cursor-pointer`}
          onClick={() => setIsOpen((prev) => !prev)}
        ></div>
      </div>
      {isOpen ? (
        <motion.p
          {...slideAnimation("down")}
          className="text-wrap mt-[1rem] mb-[3rem] p-4 text-secondary4 text-lg leading-8"
        >
          {answer}
        </motion.p>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

const FAQWrapper = () => {
  return (
    <div className="w-full flex flex-col items-start mt-[4rem]">
      {FAQList.map((elem, index) => (
        <FAQTile key={index} {...elem} index={index} />
      ))}
    </div>
  );
};

const FAQ = () => {
  return (
    <div
      className={`bg-primary1 w-screen mt-[8rem] flex flex-col items-center py-[4rem] `}
    >
      <div className="w-[60%] m-auto">
        <h3 className="text-secondary5 font-bold font-Nunito text-3xl flex justify-center ">
          Frequently Asked Questions
        </h3>
        <FAQWrapper />
      </div>
    </div>
  );
};

export default FAQ;
