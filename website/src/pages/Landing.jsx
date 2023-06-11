import React from "react";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/Features/AboutUs";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Testimonal from "../components/Testimonal/Testimonal";
import Pricing from "../components/Pricing/Pricing";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { FeaturesSection } from "../utils/DataConstant.js";
import Feature from "../components/Features/Feature";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Feature
        head={"Features"}
        para={"Save 10000s of expensive coder hours"}
        data={FeaturesSection}
      />
      <AboutUs />
      <HowItWorks />
      <Testimonal />
      <Pricing />
      <div className="w-[80%] mx-auto">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Landing;
