import React from "react";
import ContactMail from "../../assets/icons/mail-icon.svg";

const ContactCard = () => {
  return (
    <div className=" w-fit flex justify-between items-center bg-secondary5 px-[1rem] py-[1rem] rounded-3xl shadow-xl gap-[4rem] mt-[1rem]">
      <div className="flex items-center gap-2">
        <img src={ContactMail} alt="icon" />
        <span className="text-secondary3 font-bold text-md">Mail Us</span>
      </div>
      <div>
        <form>
          <p className={`text-xl text-secondary4`}>hello@xerocodee.com</p>
        </form>
      </div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center mt-[4rem]">
      <h1 className="text-primary2 text-[64px] font-bold font-nunito">
        Get in touch today!
      </h1>
      <ContactCard />
    </div>
  );
};

export default GetInTouch;
