import React from "react";

const WhatWeDo = () => {
  return (
    <div className="flex  flex-col w-[90%] mx-auto items-center gap-y-2 md:items-stretch md:flex-row  my-14 mt-[4rem]">
      <h1 className=" text-5xl w-2/6  font-extrabold ">What we do</h1>
      <div className="w-4/6 max-w-[50rem] flex text-sm md:text-xl gap-6  flex-col text-secondary4  justify-evenly">
        <p>
          <span className="font-bold">XeroCodee</span> is a
          software-as-a-service (SaaS) application that provides businesses with
          the flexibility to choose between two popular cloud computing
          architectures: microservices and serverless computing. Microservices
          and serverless computing are two different approaches to building and
          deploying cloud-based applications, each with its own strengths and
          weaknesses.
        </p>
        <p>
          Microservices architecture is a method of developing applications as a
          suite of small, independently deployable services. Each runs its own
          process and communicates with other services through lightweight
          mechanisms such as HTTP/REST. Microservices offer a number of
          benefits, including modularity, scalability, and flexibility.
        </p>
        <p>
          Serverless computing is a cloud computing model that allows developers
          to build and run applications without having to manage infrastructure.
          In a serverless architecture, the cloud provider manages the
          infrastructure, allowing developers to focus on writing code.
          Serverless computing offers benefits such as reduced costs, improved
          scalability, and faster time to market.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
