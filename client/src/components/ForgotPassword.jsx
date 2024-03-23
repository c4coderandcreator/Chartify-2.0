import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import forgotImg from "../assets/Forgotpassword.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/forgot-password", {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("check your email including spam folder");
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Nav />

      <div className="h-[60vh] md:h-[75vh] w-full bg-black flex items-center justify-center gap-4">
        <div className="w-full md:w-[30rem] md:mx-auto flex flex-col justify-center items-center border-2 bg-indigo-700 rounded-lg p-4 mx-4">
          <h2 className="pb-4 text-white text-3xl text-center">
            Forgot Password
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="email" className=" text-white">
              Email:
            </label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-white border-2 hover:bg-indigo-700 hover:text-white text-black rounded-md py-2 px-4 w-full transition-colors duration-300"
              type="submit"
            >
              Send reset link
            </button>
          </form>
          <p className="text-black mt-4">
            Got your Password?{" "}
            <Link to="/login" className="text-white">
              Login Here
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex md:py-20  mr-14 order-1">
          <img className="w-full md:h-[40vh]" src={forgotImg} alt="image" />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
