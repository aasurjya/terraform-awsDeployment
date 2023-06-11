import AboutUsImg from "../../assets/aboutUs/aboutUsImg.png";
import costIcon from "../../assets/icons/cost-icon.svg";
import { motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";
const AboutUs = () => {
  return (
    <div className="flex h-[100vh] bg-white ">
      <div className="flex w-[80%] flex-wrap  m-auto ">
        <motion.div
          {...slideAnimation("up")}
          className="w-[55%]  flex-1 px-10 py-5 bg-secondary1 rounded-3xl flex flex-col justify-evenly  "
        >
          <h1 className="text-[3rem] leading-tight	font-extrabold">
            Powerful and easy to use saas deploy platform
          </h1>
          <p className="text-lg left-0 text-secondary4">
            Effortlessly deploy your saas with a powerful platform that
            simplifies the process and maximizes your potential.
          </p>
          <div className="flex flex-row w-[80%] ">
            <img className="h-[5rem]" src={costIcon} alt="" />
            <div className="ml-3 bold">
              <h2 className="text-2xl font-bold">Cost Effective</h2>
              <p className="text-lg text-secondary4">
                Deploy your applications in the cloud with cost-effective
                solutions that optimize your budget and performance.
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[80%] ">
            <img className="h-[5rem]" src={costIcon} alt="" />
            <div className="ml-3 bold">
              <h2 className="text-2xl font-bold">Scale Anywhere</h2>
              <p className="text-lg text-secondary4">
                Scale your application automatically and seamlessly across any
                infrastructure with ease and efficiency.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.img
          {...slideAnimation("down")}
          className="flex-1 z-10 ml-[-4rem]  w-[50%]"
          src={AboutUsImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
