import Feature from "../components/Features/Feature";
import Hero from "../components/Features/Hero";

//importing data
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { FeaturesSection, FeaturesIntegration } from "../utils/DataConstant.js";

const Features = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Hero />
      <Feature
        head={"Features"}
        para={"Save 10000s of expensive coder hours"}
        data={FeaturesSection}
      />
      <Feature
        head={"Integration"}
        para={`Connect all your tools and work efficiently.`}
        data={FeaturesIntegration}
      />
      <NewsLetter />
    </div>
  );
};

export default Features;
