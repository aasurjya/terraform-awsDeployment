import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import FAQ from "../components/Contact/FAQ";
import GetInTouch from "../components/Contact/GetInTouch";
import LocationCard from "../components/Contact/LocationCard";
import backgorund3 from "../assets/contact/bg.svg";

const BgImage = () => {
  return (
    <img
      src={backgorund3}
      alt="background"
      className="absolute right-0 z-[-3] top-[-2rem] w-[36rem]"
    />
  );
};

const Contact = () => {
  return (
    <div
      className={`md:px-32 md:py-8 px-8 relative flex flex-col items-center overflow-x-hidden`}
    >
      <BgImage />
      <GetInTouch />
      <ContactForm />
      <LocationCard />
      <FAQ />
      <div
        className={`bg-[#E3E3E3] w-[80%] mx-auto h-[2px] mt-[4rem] mb-[6rem]`}
      ></div>
    </div>
  );
};

export default Contact;
