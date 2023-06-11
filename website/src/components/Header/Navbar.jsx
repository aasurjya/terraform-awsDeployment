import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogleLogin } from "../../utils/Redux/loginSlice";

import logo from "../../assets/logo/logo.svg";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const colorChange = () => setColor(window.scrollY >= 200);
    window.addEventListener("scroll", colorChange);
    return () => window.removeEventListener("scroll", colorChange);
  }, []);

  const dispatch = useDispatch();
  const status = useSelector((state) => state.loginStatus.status);
  const location = useLocation();
  const shouldShowBackgroundImage =
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/";
  return (
    <div
      className={`sticky top-[1rem] z-[999] ${
        color
          ? "backdrop-blur-xl backdrop-brightness-90 bg-opacity-30 bg-secondary4"
          : ""
      } py-[1.6rem] flex items-center mt-[2rem] mx-[3rem] rounded-3xl transition-all`}
    >
      <div className="  grid col-span-12 items-center h-16  rounded-3xl w-[80%] m-auto">
        <Link to="/" className="col-start-2 col-end-4 font-extrabold text-lg">
          <img src={logo} alt="logo" />
        </Link>
        <div
          className={` 
          ${
            shouldShowBackgroundImage
              ? "bg-blue-200 bg-opacity-25  text-white "
              : "bg-secondary1 text-black"
          } py-[1.1rem] ml-4  ${
            color ? "bg-opacity-60" : "bg-opacity-25"
          }  col-start-4 col-end-7  rounded-[3rem] transition-all`}
        >
          <ul className="flex justify-evenly">
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to=" ">Team</Link>
            <Link
              to="https://join.slack.com/t/xerocodee-workspace/shared_invite/zt-1u40v2902-1YLQZsCLUw8bN9dHa3Zudw"
              target="_blank"
            >
              Join
            </Link>
            <Link to="https://blog.xerocodee.com/" target="_blank">
              Blogs
            </Link>
          </ul>
        </div>
        <div className="col-start-8 col-span-1">
          <button className="bg-white px-10 py-4 border rounded-full font-bold">
            {status ? (
              <Link to="/signin" onClick={() => dispatch(toogleLogin(false))}>
                Logout
              </Link>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
