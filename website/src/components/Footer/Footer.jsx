import mailLogo from "../../assets/icons/mail.svg";
// import twitter from "../../assets/images/twitter.svg";
// import instagram from "../../assets/images/instagram.svg";
// import facebook from "../../assets/images/facebook.svg";
// import {github, linkedin} from '../../assets/index'
import github from "../../assets/icons/github-white.svg";
import linkedin from "../../assets/icons/linkedin-blue.svg";

// import { blackButton, fadeWhite } from "../button";
import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  return (
    <div className="  text-lg w-[20rem] h-[25rem] flex flex-col ">
      <h1 className="text-primary2 text-2xl font-extrabold  h-[20%] flex flex-col justify-end">
        XeroCodee
      </h1>
      <div className="flex flex-col  h-[80%] justify-evenly ">
        <p>
          You get just what you need to run your cloud workloads--no more, no
          less. Deploy from our single pane of glass, manage them with ease and
          scale up as fast as your workload grows
        </p>
        <div className="flex flex-row justify-start items-start">
          <div>
            <img src={mailLogo} alt="" />
          </div>
          <div className="ml-4 ">
            <h2>hello@xerocodee.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pages = () => {
  return (
    <div className="  text-lg w-[10rem] h-[25rem] flex flex-col justify-around ">
      <h1 className="text-primary2 text-2xl font-bold  h-[20%] flex flex-col justify-end">
        Pages
      </h1>
      <div className="border-b-black border mt-3 "></div>
      <div className=" flex flex-col  h-[80%] justify-evenly ">
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Home</h2>
        </Link>
        <Link to="/about">
          <h2 className="hover:text-[#5236FF] cursor-pointer">About Us</h2>
        </Link>
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Integrations</h2>
        </Link>
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Pricing</h2>
        </Link>
        <Link to="/features">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Features</h2>
        </Link>
        <Link to="/contact">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Contact Us</h2>
        </Link>
      </div>
    </div>
  );
};
const Utility = () => {
  return (
    <div className="  text-lg w-[10rem] h-[25rem] flex flex-col justify-around ">
      <h1 className="text-primary2 text-2xl font-bold  h-[20%] flex flex-col justify-end">
        Utility Pages
      </h1>
      <div className="border-b-black border mt-3 "></div>
      <div className=" flex flex-col  h-[80%] justify-evenly">
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Careers</h2>
        </Link>

        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">
            Privacy Policy
          </h2>
        </Link>
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">
            Terms & Conditins
          </h2>
        </Link>
        <Link to="/contact">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Support</h2>
        </Link>
        <Link to="/">
          <h2 className="hover:text-[#5236FF] cursor-pointer">Sitemap</h2>
        </Link>
      </div>
    </div>
  );
};

const Integration = () => {
  return (
    <div className=" bg-secondary1 flex flex-col justify-center w-[24rem] h-[20rem] border rounded-3xl pl-6">
      <p className="text-[#5236FF]">Social Media</p>
      <h1 className="text-primary2 font-extrabold mt-2 text-2xl 	">
        Infrastructure Automation & Compliance
      </h1>
      <div className="left-0 py-4 ">
        <p className="text-lg">
          With a few clicks, you can integrate your preferred DevOps tools to
          enable Single Pane of Glass DevOps
        </p>
      </div>
      <div className="flex gap-[10px]">
        <Link to="https://www.linkedin.com/company/xerocodee/" target="_blank">
          <div
            className={`bg-[#0288D1] md:flex hidden items-center justify-center text-sm font-semibold text-secondary5 rounded-[39px] px-[2rem] py-[1rem]`}
          >
            <img src={linkedin} alt="icon" className={`mr-[0.5rem] h-[30px]`} />
            Linkedin
          </div>
        </Link>
        <Link to="https://github.com/xerocodee" target="_blank">
          <div
            className={`bg-secondary3 md:flex hidden items-center justify-center text-sm font-semibold text-secondary5 rounded-[39px] px-[2rem] py-[1rem]`}
          >
            <img
              src={github}
              alt="icon"
              className={`mr-[0.5rem] h-[30px] fill-white`}
            />
            Github
          </div>
        </Link>
      </div>
    </div>
  );
};

const UpperFooter = () => {
  return (
    <div className="flex justify-evenly m-auto items-center">
      <Contact />
      <Pages />
      <Utility />
      <Integration />
    </div>
  );
};
const BottomFooter = () => {
  return (
    <div>
      <div className=" mb-5 border-t grid col-span-12 items-center h-16 w-[60%] m-auto">
        <div className="flex justify-center mt-[1rem]">
          <h1>Copyright © EXOCODE TECHNOLOGIES | All rights reserved</h1>
        </div>

        {/* <div className="col-start-8 col-span-1 flex flex-row justify-evenly">
          <Link to="/signin">
            <img src={facebook} alt="" />
          </Link>
          <Link to="/signin">
            <img src={twitter} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/company/xerocodee/" target="_blank">
            <img src={linkdin} alt="" />
          </Link>
          <Link to="/signin">
            <img src={instagram} alt="" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const route = pathname.split("/")[1];

  if (route === "signup" || route === "signin") return null;

  return (
    <div className=" text-secondary4">
      <UpperFooter />

      <BottomFooter />
    </div>
  );
};

export default Footer;
