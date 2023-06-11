import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../config/serverConfig";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SignUpForm = () => {
  const MySwal = withReactContent(Swal);
  const [regDetails, setRegDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChangeForm = (e) => {
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/v1/signup`, {
        name: regDetails.name,
        email: regDetails.email,
        password: regDetails.password,
      });
      if (response.data.success) {
        MySwal.fire({
          position: "bottom-end",
          title: "Login Successful",
          width: 600,
          icon: "success",
          padding: "10px",
          color: "#716add",
        });
      } else {
        throw new Error(response.data.err);
      }
    } catch (err) {
      MySwal.fire({
        position: "bottom-end",
        title: "Try Again",
        width: 600,
        icon: "error",
        padding: "10px",
        color: "#716add",
      });
    } finally {
      setRegDetails({
        ...regDetails,
        name: "",
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
          value={regDetails.name}
          onChange={handleChangeForm}
          placeholder="Name"
          name="name"
        />
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b mt-5"
          type="string"
          value={regDetails.email}
          onChange={handleChangeForm}
          placeholder="Email Address"
          name="email"
        />
        <input
          className="w-[80%] p-2 block font-bold m-auto border-b my-5"
          type="password"
          value={regDetails.password}
          onChange={handleChangeForm}
          placeholder="Password"
          name="password"
        />

        <button className="mt-2  block bg-primary1 text-white font-bold text-xl px-1 w-[80%] m-auto py-4 border border-blue-200  rounded-lg">
          <h1>Create Account</h1>
        </button>
        <h1 className="w-[80%] block m-auto pt-2">
          Already have an account?
          <Link className="text-primary1" to="/signin">
            <span> Login</span>
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default SignUpForm;
