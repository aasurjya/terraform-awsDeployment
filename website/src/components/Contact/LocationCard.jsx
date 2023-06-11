import React from "react";
import Pointer from "../../assets/icons/location.svg";

const Location = () => {
  return (
    <div
      className={`bg-secondary5 p-8 flex justify-center items-center border-[1px] rounded-2xl shadow-xl mt-[2rem]`}
    >
      <div className="flex flex-col  items-center">
        <div className="bg-[#F5E9DB] rounded-full p-4 flex justify-center items-center">
          <img src={Pointer} alt="image" className={`h-[30px] w-[30px]`} />
        </div>
        <h3 className="font-extrabold text-2xl font-Nunito mt-2">
          Dwarka | Delhi | India
        </h3>
        <p className="text-secondary4 text-center text-lg">
          Netaji Subhas University of Technology, NSUT IIF Build,
          <br /> 3 Floor, Room no 419
        </p>

        <div className="w-full flex justify-center mt-4">
          <div className="bg-[#F5E9DB] px-10 py-4 border text-[#D1934B] rounded-full font-bold">
            Map
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationCard = () => {
  return (
    <div className="flex flex-col items-center mt-[8rem]">
      <h1 className="text-primary2 text-4xl font-bold font-nunito text-center">
        We help small businesses with big <br /> hearts make meaningful hires
      </h1>
      <Location />
    </div>
  );
};

export default LocationCard;
