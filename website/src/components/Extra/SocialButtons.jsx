import githubIcon from "../../assets/icons/github-black.svg";
import googleIcon from "../../assets/icons/google.svg";
import { baseUrl } from "../../config/serverConfig";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {useHistory} from 'react-router-dom'

const SocialButtons = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const fetchuserdata = async () => {
    const response = await axios
      .get(`${baseUrl}/v1/getUser`, {
        // withCredentials: "true",
      })
      .catch((err) => {
        console.log("Not Logged In Properly");
        navigate(`/signin`);
      });
    if (response) {
      console.log("User", response);
      navigate("/");
    }
  };

  const googleAuth = async () => {
    const newWindow = window.open(
      `${baseUrl}/v1/auth/google`,
      "_blank",
      "width=500, height=600"
    );

    var interval = setInterval(windowCloser, 500); // 2000 ms = start after 2sec
    function windowCloser() {
      if (newWindow.closed) {
        console.log("Logged In");
        fetchuserdata();
        clearInterval(interval);
      }
    }
  };

  return (
    <div className="flex flex-row  justify-evenly w-[100%]  flex-wrap">
      <button
        className="px-1 text-lg flex flex-row justify-evenly items-center  w-[15rem] py-2 border border-blue-200  rounded-lg"
        onClick={googleAuth}
      >
        <img className="" src={googleIcon} alt="" />
        <span className="w-48">Sign in with Google</span>
      </button>

      <button
        className="px-1 text-lg flex flex-row justify-evenly items-center w-[15rem] py-2 border border-blue-200  rounded-lg"
        onClick={() => {
          window.open(`${baseUrl}/v1/auth/github`, "_self");
        }}
      >
        <img className="" src={githubIcon} alt="" />
        <span className="w-48">Sign Up with Github</span>
      </button>
    </div>
  );
};

export default SocialButtons;
