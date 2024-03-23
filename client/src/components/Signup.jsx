import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import signupImg from "../assets/Signup.svg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
          alert("You can login with your credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("please try after sometime");
      });
  };

  return (
    <>
      <Nav />

      <div className="h-[70vh] md:h-[90vh] w-full bg-black flex items-center justify-between gap-4">
        <div className=" text-white px-4 flex flex-col items-center border-2 bg-indigo-700 rounded-lg md:mx-auto mx-2">
          <h2 className="pt-4 text-3xl mx-auto">Sign Up</h2>
          <form
            className="w-full p-4 flex flex-col gap-4 "
            onSubmit={handleSubmit}
          >
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-md px-2 py-1 bg-black"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Email"
              className="w-full rounded-md px-2 py-1 bg-black"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="******"
              className="w-full rounded-md px-2 py-1 bg-black"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-white text-black border-2 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
            <p className="text-center text-black">
              Have an Account?{" "}
              <Link className="text-white" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden lg:flex md:py-20  mr-14 order-1">
          <img className="w-full md:h-[65vh]" src={signupImg} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Signup;
