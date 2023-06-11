import howItWorkProfile from "../../assets/icons/profile-icon.svg";
import { slideAnimation } from "../../utils/motion";
import { motion } from "framer-motion";
import { blackButton } from "../Extra/button";

const Working = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="flex  w-[80%] m-auto mt-10 ">
      <motion.div
        {...slideAnimation("left")}
        className=" flex-1 flex flex-col justify-evenly mr-10"
      >
        <div className="flex flex-row">
          <img className="w-[5rem] mr-5" src={howItWorkProfile} alt="" />
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <p className="text-secondary4 text-lg mt-3">{description}</p>
        <div className="max-w-fit mt-3">{blackButton(buttonText)}</div>
      </motion.div>
      <motion.div {...slideAnimation("up")} className="flex-1">
        <img src={imageUrl} alt="" className="w-full h-full" />
      </motion.div>
    </div>
  );
};

export default Working;
