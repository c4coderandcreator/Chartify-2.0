import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import loginImg from "../assets/Login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect password");
      });
  };

  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center items-center h-[70vh] md:h-full w-full  gap-4">
        <div className="md:h-[90vh] flex items-center justify-center order-2 md:pr-8">
          <div className="w-full  bg-black flex flex-col items-center border-2 rounded-lg">
            <h2 className="bg-indigo-700 py-4 px-4 text-3xl text-white w-full text-center">
              Login
            </h2>
            <form
              className="w-full p-4 flex flex-col gap-4 bg-indigo-700"
              onSubmit={handleSubmit}
            >
              <label className="text-white" htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                autoComplete="off"
                placeholder="Email"
                className="w-full rounded-md px-2 py-1 bg-black text-white"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-white" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                placeholder="******"
                className="w-full rounded-md px-2 py-1 bg-black text-white"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-white border-2 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-md"
                type="submit"
              >
                Login
              </button>
              <div className="text-white text-center">
                <Link to="/forgotPassword">Forgot Password?</Link>
                <p className="text-black">
                  Don't Have an Account?{" "}
                  <Link className="text-white" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex md:py-20  mr-14 order-1">
          <img className="w-full md:h-[55vh]" src={loginImg} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Login;
