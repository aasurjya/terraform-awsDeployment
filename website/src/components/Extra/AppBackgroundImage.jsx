import { useLocation } from "react-router-dom";
import background from "../../assets/hero/bg.svg";

const AppBackgroundImage = () => {
  const location = useLocation();
  //added this to hide this backgroud image depending upon the location
  return (
    <>
      {(location.pathname === "/signup" ||
        location.pathname === "/signin" ||
        location.pathname === "/") && (
        <img
          className="absolute top-[-3rem] right-0 w-[75%] -z-10 mt-[-1.25rem] "
          src={background}
          alt=""
        />
      )}
    </>
  );
};

export default AppBackgroundImage;
