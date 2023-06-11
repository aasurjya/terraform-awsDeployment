import featureImg1 from "../assets/features/featureImg1.png";
import featureImg2 from "../assets/features/featureImg2.png";
import featureImg3 from "../assets/features/featureImg3.png";

// import { howItWorksImg1, howItWorksImg2, howItWorksImg3 } from "../assets";
import howItWorksImg1 from "../assets/howitwork/howitworksImg1.svg";
import howItWorksImg2 from "../assets/howitwork/howitworksImg2.svg";
import howItWorksImg3 from "../assets/howitwork/howitworksImg3.svg";

import {
  ValueBulb,
  ValueExcellence,
  ValueTeam,
  ValueResponsibility,
  Integration1,
  Integration2,
  Integration3,
} from "../assets";

//About us section
export const AboutUsValues = [
  {
    head: "Innovation",
    data: "Revolutionize your software development with DevOps automation and innovative SaaS applications for seamless deployment.",
    img: ValueBulb,
  },
  {
    head: "Team work",
    data: "Teamwork makes the dream work. Collaborate, communicate, and support each other to achieve great things together.",
    img: ValueTeam,
  },
  {
    head: "Excellence",
    data: "Pursue excellence, not perfection. Strive to do your best every day, and success will naturally follow in your footsteps.",
    img: ValueExcellence,
  },
  {
    head: "Responsibility",
    data: "With great power comes great responsibility. Take ownership of your actions, be accountable, and make a positive impact on the world.",
    img: ValueResponsibility,
  },
];

//Features section
export const FeaturesIntegration = [
  {
    imageSrc: Integration1,
    title: "20+ integrations",
    description:
      "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    imageSrc: Integration2,
    title: "All-in-one platform",
    description:
      "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
  },
  {
    imageSrc: Integration3,
    title: "Advanced charts",
    description:
      "Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.",
  },
];

//Used in both Features and Landing page
export const FeaturesSection = [
  {
    imageSrc: featureImg2,
    title: "Kubernetes Monitoring",
    description:
      "Slack, Discord, Teams, or Mattermost are just a few examples of chat apps that let you monitor, debug, and perform tests on your Kubernetes resources.",
  },
  {
    imageSrc: featureImg1,
    title: "Serverless Kubernetes",
    description:
      "Create serverless-based applications so that your developers may concentrate on writing code without being concerned about the cost or availability of servers.",
  },
  {
    imageSrc: featureImg3,
    title: "Kubernetes Managed Services",
    description:
      "Making Kubernetes easy for you, from guidance and implementation to optimisation and support.",
  },
];

//HowItWorks compoonent
export const howItWorksData = {
  BUILD: {
    title: "Containerization & Microservices",
    description:
      "assisting you in implementing containers and, if necessary, switching from monolithic to microservices architecture as you embark on your cloud-native journey. We comprehend your company's requirements and present the ideal design, maximising effort returns and lowering TCO (Total Cost of Ownership).",
    buttonText: "Get Started",
    imageUrl: howItWorksImg1,
  },
  STANDARDIZE: {
    title: "CI, CD, GitOps & Progressive",
    description:
      "The aim is to quickly and with the appropriate quality provide applications to the user. Kubernetes or an edge site may host microservices or ML models. We comprehend the objectives and create the appropriate CI/CD architecture using techniques like GitOps & progressive delivery.",
    buttonText: "Get Started",
    imageUrl: howItWorksImg2,
  },
  INNOVATE: {
    title: "Observability & Security",
    description:
      "Scalability of a platform depends on how well a system can monitor it. With the appropriate dashboards and alerting systems, we assist in developing an observability system based on the application's requirements along the axis of logs, metrics, and traces. This layer also enables the development of strong security over observed data.",
    buttonText: "Get Started",
    imageUrl: howItWorksImg3,
  },
};
