// import { video } from "../../assets";
import heroImg from "../../assets/hero/hero.svg";
import { motion } from "framer-motion";
import video from "../../assets/icons/video-icon.svg";

// import { blueButton, blackButton, fadeWhite } from "../button";
import { slideAnimation } from "../../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.div className="flex w-[80%] m-auto sm:flex-row flex-col max-h-[90vh] md:h-[90vh] ">
      <motion.div
        className="flex-1 flex flex-col justify-center"
        {...slideAnimation("left")}
      >
        <h1 className="text-6xl	 font-extrabold">
          Build your <br /> audience and <br /> grow your brand
        </h1>
        <div className="left-0 py-4 ">
          <p className="text-lg text-secondary4">
            --no more, no less. Deploy from our single pane of
            <br /> glass, manage them with ease and scale up as
            <br /> fast as your workload grows.
          </p>
        </div>
        <div className="flex gap-x-[1rem]">
          <Link to="/signup">
            <div
              className={`bg-primary1 md:flex hidden items-center justify-center text-sm font-semibold text-secondary5 rounded-[39px] px-[40px] py-[16px]`}
            >
              Get Started
            </div>
          </Link>
          <Link to="/">
            <div className="bg-secondary1 md:flex hidden items-center justify-center text-sm font-semibold text-secondary3 rounded-[39px] px-[40px] py-[16px] relative">
              <span className={`mr-3`}>Watch Video</span>
              <img
                src={video}
                alt="button image"
                className={`w-[40px] h-[40px] absolute right-1`}
              />
            </div>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center"
        {...slideAnimation("right")}
      >
        <motion.img className="w-full" src={heroImg} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
