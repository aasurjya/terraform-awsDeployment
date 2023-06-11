import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleLogin } from "../../utils/Redux/loginSlice";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/serverConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const LogInForm = () => {
  const MySwal = withReactContent(Swal);
  const status = useSelector((state) => state.loginStatus.loginStatus);
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const [logDetails, setLogDetails] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setLogDetails({ ...logDetails, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${baseUrl}/v1/login`, {
        method: "POST",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        credentials: "include", //to accepts cookies in your frontend
        body: new URLSearchParams({
          email: logDetails.email,
          password: logDetails.password,
        }),
      });
      response = await response.json();
      console.log(response.data);
      if (response.data.success) {
        dispatch(toogleLogin(response.data.success));
        MySwal.fire({
          position: "bottom-end",
          title: "Login Successful",
          width: 600,
          icon: "success",
          padding: "3em",
          color: "#716add",
        });
      }
    } catch (err) {
      MySwal.fire({
        position: "bottom-end",
        title: "Try Again",
        width: 600,
        icon: "error",
        padding: "3em",
        color: "#716add",
      });
    } finally {
      setLogDetails({
        ...logDetails,
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col w-full ">
      <form className=" w-full" action="" onSubmit={submitForm} method="post ">
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b mt-5"
          type="string"
          value={logDetails.email}
          onChange={handleChangeForm}
          name="email"
          placeholder="Email Address"
        />
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b my-5"
          type="password"
          value={logDetails.password}
          onChange={handleChangeForm}
          name="password"
          placeholder="Password"
        />

        <button className="mt-2  block bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-4 border border-blue-200  rounded-lg">
          <h1>Log In</h1>
        </button>
        <h1 className="w-[80%] block m-auto pt-2">
          Don't have an account?
          <Link className="text-primary1" to="/signup">
            <span> Sign Up</span>
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default LogInForm;
