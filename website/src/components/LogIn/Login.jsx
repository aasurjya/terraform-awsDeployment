import GuyWithBook from "../../assets/login-signup/login-signup.png";
import downArrowFade from "../../assets/icons/downArrowFade.png";
import SocialButtons from "../Extra/SocialButtons";
import LogInForm from "./LogInForm";

const LeftContainer = () => {
  return (
    <div className="bg-primary1 border rounded-l-3xl flex flex-col justify-evenly items-center col-span-2">
      <h1 className="text-3xl  text-white px-6 pt-10 font-ReemKufi">
        Welcome to XeroCodee DevOps Automation Platform.
      </h1>
      <img
        className="min-w-[32rem] ml-42"
        src={GuyWithBook}
        alt="Login Image"
      />
    </div>
  );
};

const OrDivider = () => {
  return (
    <h2 className="text-secondary4 w-fit mx-auto font-bold text-xl">- OR -</h2>
  );
};

const RightContainer = () => {
  return (
    <div className="min-h-full border z-10 ml-[-1.5rem] rounded-3xl col-span-3  bg-white flex flex-col justify-around items-start relative  ">
      <h1 className="ml-10 text-3xl font-Roboto font-bold">Log in Account</h1>
      <SocialButtons />
      <OrDivider />
      <LogInForm />
      <div className="absolute top-8 right-8 text-lg font-bold text-secondary4 flex justify-center items-center">
        <span className="pr-2"> English (IN)</span>
        <img src={downArrowFade} alt="" />
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="min-h-[90vh] flex ">
      <div className="w-[80%] min-h-[35rem] m-auto grid grid-flow-col grid-cols-7 ab">
        <div className="col-span-1"></div>
        <LeftContainer />
        <RightContainer />
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Login;
