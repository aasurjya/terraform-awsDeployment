import {
  blackButton,
  blueButton,
  fadeWhite,
  whiteButton,
} from "../Extra/button";

import UpiCard from "../../assets/icons/payment-icon.svg";

const PricingContent = () => {
  return (
    <div className="w-[20rem] h-[28rem] flex flex-col justify-evenly pr-8">
      <div className="w-32">{blueButton("Pricing")}</div>
      <h1 className="text-4xl font-extrabold">
        Simple and <br /> flexible pricing
      </h1>
      <p>
        It is a long established fact that a reader the will be distracted by
        the readable content of a page from when looking at it layout.{" "}
      </p>
      <h2 className="text-xl font-bold">Accepted Payment Methods</h2>
      <img src={UpiCard} alt="" />
    </div>
  );
};

const BusinessCard = () => {
  return (
    <div className="bg-secondary1  rounded-3xl  w-[22rem] h-[36rem] flex flex-col justify-evenly  mr-4">
      <div className="flex pl-5 items-center  justify-around ">
        <h1 className="text-4xl">Buisness</h1>
        <h3 className="px-5 py-3 bg-white rounded-3xl">Save 30%</h3>
      </div>
      <span className="border border-[#D3D3D3] w-[80%] mx-auto"></span>
      <div className="text-center pt-4">
        <h1 className="font-semibold">
          <span className=" text-3xl">$49.99</span> / month
        </h1>
        <div>
          <h3 className="rounded-full mt-2 bg-[#FFEECC] text-[#C68A15] w-60 m-auto">
            Billed as $549.99 per year
          </h3>
        </div>
      </div>
      <span className="border border-[#D3D3D3] w-[80%] mx-auto"></span>
      <div className=" flex flex-col items-center justify-evenly h-80">
        <h1>
          <span className="font-bold">5+ Kubernetes</span> Cluster
        </h1>
        <h1>
          <span className="font-bold">API</span> Gateway
        </h1>
        <h1>Analytics & Security</h1>
        <h1>
          <span className="font-bold">SSH</span> key management
        </h1>
        <h1>VPC Peering</h1>
        <div className="w-44 text-center mt-4 ">{fadeWhite("Get Started")}</div>
      </div>
    </div>
  );
};
const EnterpriseCard = () => {
  return (
    <div className="bg-secondary1 rounded-3xl mt-[2rem] w-[22rem] h-[38rem] flex flex-col justify-evenly  mr-4">
      <div className="flex pl-5 items-center  justify-around ">
        <h1 className="text-4xl">Enterprise</h1>
        <h3 className="px-5 py-3 text-primary1 bg-secondary2 rounded-3xl">
          Popular
        </h3>
      </div>
      <span className="border border-[#D3D3D3] w-[80%] mx-auto"></span>
      <div className="text-center pt-4">
        <h1 className="font-semibold">
          <span className=" text-3xl">$99.99</span> / month
        </h1>
        <div>
          <h3 className="rounded-full mt-2 bg-[#FFEECC] text-[#C68A15] w-60 m-auto">
            Billed as $1099.99 per year
          </h3>
        </div>
      </div>
      <span className="border border-[#D3D3D3] w-[80%] mx-auto"></span>
      <div className=" flex flex-col items-center justify-evenly h-[60%]">
        <h1>Unlimited Kubernetes Cluster</h1>
        <h1>Unlimited Databases</h1>
        Unlimited Deployments
        <h1>
          <span className="font-bold">Grafana and Datadog</span> Integration
        </h1>
        <h1>Volumes (PVC) / VPC Peering</h1>
        <h1>
          <span className="font-bold">SSO</span> authentification
        </h1>
        <h1>Multi-Cloud Backup</h1>
        <div className="w-44 text-center mt-4 ">
          {blackButton("Get Started")}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="container px-auto my-[4rem]">
      <div className="flex flex-row flex-grow justify-center items-center">
        <div>
          <PricingContent />
        </div>
        <div>
          <BusinessCard />
        </div>
        <div>
          <EnterpriseCard />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
