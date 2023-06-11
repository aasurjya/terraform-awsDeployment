import { AboutUsValues } from "../../utils/DataConstant.js";

// Feature page component
const Values = () => {
  return (
    <div className="text-center w-[95%] mb-24 m-auto    flex flex-col justify-center items-center">
      <div className="text-primary1 font-bold bg-secondary2 px-10 py-5 border rounded-full">
        Our values
      </div>
      <div>
        <h1 className="text-[3rem] text-center leading-tight font-extrabold font-Nunito mt-[2rem]">
          The story and values behind <br /> our company
        </h1>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-20">
        {AboutUsValues.map((card, index) => {
          return (
            <div
              key={index}
              className="bg-secondary1 px-10 py-6  flex flex-col md:flex-row gap-2 rounded-xl "
            >
              <img className="h-[8rem]" src={card.img} alt="Card Image" />
              <div className="flex flex-col text-left pl-2">
                <h1 className="font-bold text-2xl">{card.head}</h1>
                <p className="text-secondary4 text-lg">{card.data}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
