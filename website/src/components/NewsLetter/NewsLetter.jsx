import React from "react";

import newsLetterBg from "../../assets/news-letter/bg.png";
import newsLetterImg from "../../assets/news-letter/news-letter.png";

const NewsLetterContent = () => {
  return (
    <div className="w-[80%]  m-auto">
      <h1 className="text-lg md:text-3xl text-white font-extrabold font-Nunito mt-[2rem]">
        Automate Infrastructure on Any Cloud with XEROCODEE
      </h1>
      <form
        className=" flex flex-col md:flex-row max-w-[80%] lg:max-w-none gap-x-3 mt-8"
        action="submit"
      >
        <input
          className="text-left bg-[#4585DA] placeholder-secondary1 text-white rounded-full min-w-[70%] py-4 pl-6  "
          type="text"
          value=""
          placeholder="Your mail here..."
        />
        <button
          className="font-normal text-base text-primary1 bg-white px-8 py-4 border rounded-full"
          disabled="disabled"
        >
          SUBSCRISE
        </button>
      </form>
      <div className="flex flex-row gap-3 place-items-start  mt-4">
        <input className="mt-2" type="checkbox" name="" id="" />
        <div className="max-w-[90%] text-white">
          <h2>
            I agree to receive your newsletters and accept the data privacy
            statement.
          </h2>
          <p className="text-xs text-black">
            You may unsubscribe at any time using the link in our newsletter.
          </p>
        </div>
      </div>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${newsLetterBg})` }}
      className=" bg-no-repeat bg-contain bg-center rounded-[4rem] h-[30rem] w-[70%] m-auto my-32 flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="flex-1">
        <NewsLetterContent />
      </div>
      <div className="flex-1">
        <img
          className=" w-[30rem]  h-auto m-auto block md:pr-6"
          src={newsLetterImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default NewsLetter;
