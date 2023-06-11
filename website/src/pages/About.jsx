import Hero from "../components/AboutUs/Hero";
import Mission from "../components/AboutUs/Mission";
import Values from "../components/AboutUs/Values";
import WhatWeDo from "../components/AboutUs/WhatWeDo";

const About = () => {
  return (
    <div className="w-[85%] mx-auto ">
      <Hero />
      <WhatWeDo />
      <Mission />
      <Values />
    </div>
  );
};
export default About;
