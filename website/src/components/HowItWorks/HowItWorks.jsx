import { useSelector } from "react-redux";
import { howItWorksData } from "../../utils/DataConstant";
import Working from "./Working";
import SectionWithButtons from "./SectionWithButtons";

// Working component

// Home page component
const DyanmicContainer = () => {
  const buttonClickedStatus = useSelector(
    (store) => store.toogleWork.buttonClicked
  );
  return (
    <div className="flex flex-wrap flex-row justify-between">
      <SectionWithButtons />
      <Working
        title={howItWorksData[buttonClickedStatus].title}
        description={howItWorksData[buttonClickedStatus].description}
        buttonText={howItWorksData[buttonClickedStatus].buttonText}
        imageUrl={howItWorksData[buttonClickedStatus].imageUrl}
      />
    </div>
  );
};
const HowItWorks = () => {
  return (
    <div className="container px-auto">
      <div className="flex flex-col justify-evenly items-center">
        <div>
          <button
            disabled
            className=" text-primary1 font-bold bg-secondary2 px-10 py-6 border rounded-full ml-4 text-[1.1rem]"
          >
            How It Works
          </button>
        </div>
        <h1 className="text-center text-5xl font-extrabold mt-[2rem] ">
          Work smarter <br />
          with easy deploys, manages & scales
        </h1>
        <div className=" flex flex-wrap  mt-[4rem]">
          <DyanmicContainer />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
