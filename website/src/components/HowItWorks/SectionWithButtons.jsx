import { useState } from "react";
import { useDispatch } from "react-redux";
import { toogleOption } from "../../utils/workSlice";

const SectionWithButtons = () => {
  //useSelector to access store data and from there slice initialstate

  const [buttonClicked, setButtonClicked] = useState("BUILD");
  const styleClicked = "text-white bg-primary1";
  const notClick = "text-black bg-secondary1";
  const dispatch = useDispatch();
  const updateButton = (value) => {
    dispatch(toogleOption(value));
    setButtonClicked(value);
  };
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid sm:grid-rows-1 sm:grid-cols-3 grid-rows-3 grid-cols-1 w-[100%]  gap-[20px] sm:gap-[40px] mt-[20px] ">
        <button
          className={` ${
            buttonClicked === "BUILD" ? styleClicked : notClick
          } py-5  flex justify-start items-center pl-[2rem] font-bold border rounded-xl text-2xl `}
          onClick={() => updateButton("BUILD")}
        >
          01. BUILD
        </button>
        <button
          className={` ${
            buttonClicked === "STANDARDIZE" ? styleClicked : notClick
          } py-5  flex justify-start items-center pl-[2rem] font-bold border rounded-xl text-2xl  `}
          onClick={() => updateButton("STANDARDIZE")}
        >
          02. STANDARDIZE
        </button>
        <button
          className={` ${
            buttonClicked === "INNOVATE" ? styleClicked : notClick
          }  py-5  flex justify-start items-center pl-[2rem] font-bold border rounded-xl text-2xl `}
          onClick={() => updateButton("INNOVATE")}
        >
          03. INNOVATE
        </button>
      </div>
    </div>
  );
};

export default SectionWithButtons;
